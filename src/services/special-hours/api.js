import { supabase } from "@/actions/baseURL/base_url";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const specialHoursApi = createApi({
  reducerPath: "specialHoursApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["special-hours"],
  endpoints: (builder) => ({
    //  Get All Special Hours
    getSpecialHours: builder.query({
      async queryFn(venue_id) {
        const { data, error } = await supabase
          .from("special_hours")
          .select("*, venues(id, display_name)")
          .eq("venue_id", venue_id)
          .order("id", { ascending: false });
        if (error) return { error: error.message };
        return { data };
      },
      providesTags: ["special-hours"],
    }),
    //  Get Special Hours by id
    getSpecialHoursByVenueAndCurrentDate: builder.query({
      async queryFn(venueId) {
        const today = new Date().toISOString().split("T")[0];
        const { data, error } = await supabase
          .from("special_hours")
          .select("*")
          .eq("venue_id", venueId)
          .eq("date", today);

        if (error) return { error: error.message };
        return { data };
      },
      providesTags: (result, error, venueId, today) => [
        { type: "special-hours", id: venueId, date: today },
      ],
    }),
    //  Get Special Hours by id
    getSpecialHoursById: builder.query({
      async queryFn(id) {
        const { data, error } = await supabase
          .from("special_hours")
          .select("*,  venues(id, display_name)")
          .eq("id", id)
          .single();

        if (error) return { error: error.message };
        return { data };
      },
      providesTags: (result, error, id) => [{ type: "special-hours", id: id }],
    }),
  }),
});

export const {
  useGetSpecialHoursQuery,
  useGetSpecialHoursByIdQuery,
  useGetSpecialHoursByVenueAndCurrentDateQuery,
} = specialHoursApi;
