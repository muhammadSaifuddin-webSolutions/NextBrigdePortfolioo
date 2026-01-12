import { supabase } from "@/actions/baseURL/base_url";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookingsApi = createApi({
  reducerPath: "bookingsApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["bookings"],
  endpoints: (builder) => ({
    //  Get All Bookings
    getBookings: builder.query({
      async queryFn(venue_id) {
        const { data, error } = await supabase
          .from("bookings")
          .select("*, venues(id, display_name)")
          .eq("venue_id", venue_id)
          .order("id", { ascending: false });
        if (error) return { error: error.message };

        return { data };
      },
      providesTags: ["bookings"],
    }),

    //  Get Bookings by id
    getBookingsById: builder.query({
      async queryFn(id) {
        const { data, error } = await supabase
          .from("bookings")
          .select("*,  venues(id, display_name)")
          .eq("id", id)
          .single();

        if (error) return { error: error.message };
        return { data };
      },
      providesTags: (result, error, id) => [{ type: "bookings", id: id }],
    }),

    checkTableAvailability: builder.query({
      async queryFn(availabilityData) {
        try {
          const { selectedCapacity, bookingDate, startTime, endTime } =
            availabilityData;
          // 1 Step 1: Get tables with matching capacity or higher
          let tableQuery = supabase
            .from("tables")
            .select("*").eq("active", true)
            .order("capacity", { ascending: true });
          if (selectedCapacity === "more") {
            tableQuery = tableQuery.gte("capacity", 16); // capacity >= 16
          } else {
            tableQuery = tableQuery.gte("capacity", selectedCapacity);
          }
          const { data: tables, error: tablesError } = await tableQuery;
          console.log(tables)
          if (tablesError) throw tablesError;
          if (!tables?.length) {
            return { error: "No tables with required capacity." };
          }
          // 2 Step 2: Fetch bookings for these tables on the same date & overlapping timeslot
          const tableIds = tables.map((t) => t.id);
          const { data: bookings, error: bookingError } = await supabase
            .from("bookings")
            .select("table_id, status, starts_at, ends_at")
            .in("table_id", tableIds)
            .eq("booking_date", bookingDate)
            .in("status", ["pending", "confirmed"]);

          if (bookingError) throw bookingError;

          // 3 Step 3: Group bookings by table_id and count overlaps
          const overlapBookings = {};
          bookings.forEach((b) => {
            const start = new Date(b.starts_at);
            const end = new Date(b.ends_at);
            const selectedStart = new Date(startTime);
            const selectedEnd = new Date(endTime);
            // Check if booking overlaps with requested slot
            // Check overlap more explicitly
            const startsExactlySame =
              selectedStart.getTime() === start.getTime();
            const startsInsideExistingBooking =
              selectedStart.getTime() > start.getTime() &&
              selectedStart.getTime() < end.getTime();

            const overlaps =
              startsExactlySame ||
              startsInsideExistingBooking || //  Exact match or inside range
              (start < selectedEnd && end > selectedStart); //  Generic overlap check

            if (overlaps) {
              overlapBookings[b.table_id] =
                (overlapBookings[b.table_id] || 0) + 1;
            }
          });
          // Step 4: Calculate available tables per capacity group
          const availability = tables.map((t) => {
            const totalBooked = overlapBookings[t.id] || 0;
            const availableTables = t.total_tables - totalBooked;
            return {
              table_id: t.id,
              capacity: t.capacity,
              total_tables: t.total_tables,
              total_bookings: totalBooked,
              available_tables: availableTables,
              is_fully_booked: availableTables <= 0,
            };
          });
          // 5 Step 5: Find first available table group
          const available = availability.find((a) => a.available_tables > 0);
          const unavailableTables = availability.filter(
            (t) => t.available_tables <= 0
          );
          if (!available) {
            return {
              error: "No tables available for selected capacity and time slot.",
              data: availability,
            };
          }

          return {
            data: { available, unavailableTables, allTables: availability },
          };
        } catch (err) {
          return { error: err.message };
        }
      },
    }),

    // Add Bookings
    addBookings: builder.mutation({
      async queryFn(newBooking) {
        const { data, error } = await supabase
          .from("bookings")
          .insert([newBooking])
          .select();

        if (error) return { error: error.message };
        return { data };
      },
      invalidatesTags: ["bookings"],
    }),

    // Update Bookings
    updateBookings: builder.mutation({
      async queryFn(updatedBookings) {
        const { id, ...rest } = updatedBookings;
        const { data, error } = await supabase
          .from("bookings")
          .update(rest)
          .eq("id", id)
          .select();

        if (error) return { error: error.message };
        return { data };
      },
      invalidatesTags: ["bookings"],
    }),

    // Delete Bookings
    deleteBookings: builder.mutation({
      async queryFn(id) {
        const { data, error } = await supabase
          .from("bookings")
          .delete()
          .eq("id", id);

        if (error) return { error: error.message };
        return { data };
      },
      invalidatesTags: ["bookings"],
    }),
  }),
});

export const {
  useGetBookingsQuery,
  useGetBookingsByIdQuery,
  useAddBookingsMutation,
  useUpdateBookingsMutation,
  useDeleteBookingsMutation,
  useCheckTableAvailabilityQuery,
} = bookingsApi;
