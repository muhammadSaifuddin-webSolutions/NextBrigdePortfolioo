import { supabase } from "@/actions/baseURL/base_url";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const venueHoursApi = createApi({
  reducerPath: "venueHoursApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["venue-hours"], 
  endpoints: (builder) => ({
    //  Get All hours
    getVenueHours: builder.query({
      async queryFn(venue_id) {
        const { data, error } = await supabase
          .from("venue_hours")
          .select("*, venues(id, display_name)").eq("venue_id", venue_id)
          .order("day_of_week", { ascending: true });
        if (error) return { error: error.message };
        return { data };
      },
      providesTags: ["venue-hours"],
    }),

    //  Get hours by id
    getVenueHoursById: builder.query({
      async queryFn(id) {
        const { data, error } = await supabase
          .from("venue_hours")
          .select("*,  venues(id, display_name)")
          .eq("id", id).single();

        if (error) return { error: error.message };
        return { data };
      },
      providesTags: (result, error, id) => [
        { type: "venue-hours", id: id },
      ],
    }),

  }),
});

export const {
  useGetVenueHoursQuery,
  useGetVenueHoursByIdQuery,
} = venueHoursApi;
