import { supabase } from "@/actions/baseURL/base_url";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const venueApi = createApi({
  reducerPath: "venueApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["venues"], // Cache invalidation
  endpoints: (builder) => ({
    //  Get All Venues
    getVenues: builder.query({
      async queryFn() {
        const { data, error } = await supabase
          .from("venues")
          .select("*") 
          .order("id", { ascending: false });
        if (error) return { error: error.message };
        return { data };
      },
      providesTags: ["venues"],
    }),

    //  Get Venues by role
    getVenuesById: builder.query({
      async queryFn(id) {
        const { data, error } = await supabase
          .from("venues")
          .select("*")
          .eq("id", id);

        if (error) return { error: error.message };
        return { data };
      },
      providesTags: (result, error, id) => [
        { type: "venues", id: id },
      ],
    }),

  }),
});

export const {
  useGetVenuesQuery,
  useGetVenuesByIdQuery,
} = venueApi;
