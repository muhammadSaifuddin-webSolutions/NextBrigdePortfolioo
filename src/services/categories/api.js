import { supabase } from "@/actions/baseURL/base_url";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["categories"],
  endpoints: (builder) => ({
    //  Get All Categories
    getCategories: builder.query({
      async queryFn(venue_id) {

        const { data, error } = await supabase
          .from("categories")
          .select("*, venues(id, display_name)")
          .eq("venue_id", venue_id)
          .order("position", { ascending: true });
        if (error) return { error: error.message };
        return { data };
      },
      providesTags: ["categories"],
    }),

    //  Get Categories by id
    getCategoryById: builder.query({
      async queryFn(id) {
        const { data, error } = await supabase
          .from("categories")
          .select("*,  venues(id, display_name)")
          .eq("id", id)
          .single();

        if (error) return { error: error.message };
        return { data };
      },
      providesTags: (result, error, id) => [{ type: "categories", id: id }],
    }),
  })
});

export const {
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
} = categoriesApi;
