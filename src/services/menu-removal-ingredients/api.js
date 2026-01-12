import { supabase } from "@/actions/baseURL/base_url";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const removalIngredientsApi = createApi({
  reducerPath: "menuAddOnsApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["removal_ingredients", "menu-addons"],
  endpoints: (builder) => ({
    //  Get All RemovalIngredients
    getRemovalIngredients: builder.query({
      async queryFn(venue_id) {
        const { data, error } = await supabase
          .from("removal_ingredients")
          .select("*, venues(id, display_name), items(id, name)")
          .eq("venue_id", venue_id)
          .order("id", { ascending: false });
        if (error) return { error: error.message };
        return { data };
      },
      providesTags: ["removal_ingredients"],
    }),

    //  Get RemovalIngredients by id
    getRemovalIngredientsByItemId: builder.query({
      async queryFn(id) {

        try {
        const { data, error } = await supabase
          .from("removal_ingredients")
          .select("*")
          .eq("item_id", id);
        if (error) return { error: error.message };

        return  { data: data} ;
        } catch (error) {
                return { error: error.message };
        }
      },
      providesTags: (result, error, id) => [
        { type: "removal_ingredients", id: id },
      ]
    }),

    //  Get MenuAddOns by id
    getAddOnsByItemId: builder.query({
      async queryFn(id) {
        const { data, error } = await supabase
          .from("menu_add_ons")
          .select("*")
          .eq("item_id", id);

        if (error) return { error: error.message };
        return { data };
      },
      providesTags: (result, error, id) => [
        { type: "menu-addons", item_id: id },
      ],
      keepUnusedDataFor: 20000, // cache data for 5 minutes (300 seconds)
      refetchOnMountOrArgChange: false, // do not refetch if data is already cached
      refetchOnReconnect: false, // do not refetch automatically when connection resumes
      refetchOnFocus: false,
    }),
  }),
});

export const {
  useGetRemovalIngredientsQuery,
  useGetRemovalIngredientsByItemIdQuery,
  useGetAddOnsByItemIdQuery,
} = removalIngredientsApi;
