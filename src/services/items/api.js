import { supabase } from "@/actions/baseURL/base_url";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemsApi = createApi({
  reducerPath: "itemsApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["items", "items-category", "promotions"], // Cache invalidation
  endpoints: (builder) => ({
    //  Get All Items
    getItems: builder.query({
      async queryFn(venue_id) {
        const { data, error } = await supabase
          .from("items")
          .select(
            `
          *,
          categories (
            id,
            name,
            position,
            category_option_groups (
              option_groups (
                id,
                name,
                type,
              display_type,
                min_select,
                max_select,
                required,
                options (
                  id,
                  name,
                  price_delta,
                  is_default
                )
              )
            )
          )
        `
          )
          .eq("venue_id", venue_id)
          .eq("is_promotional", false)
          .order("id", { ascending: false });
        if (error) return { error: error.message };

        const sortedItems = data.sort((a, b) => {
          const posA = a?.categories?.position ?? Infinity;
          const posB = b?.categories?.position ?? Infinity;
          return posA - posB;
        });

        const grouped = sortedItems.reduce((acc, item) => {
          const categoryName = item.categories?.name || "Uncategorized";
          if (!acc[categoryName]) acc[categoryName] = [];
          acc[categoryName].push(item);
          return acc;
        }, {});
        return { data: grouped };
      },
      providesTags: ["items"],
    }),

    getPromotions: builder.query({
      async queryFn(venue_id) {
        const { data, error } = await supabase
          .from("promotions")
          .select(
            `
          id,
          name,
          is_visible,
          start_at,
          end_at,
          days_of_week,
          time_windows,
          priority,
          active,
          created_at,
          updated_at,
          venues (
            id,
            display_name
          ),
          promotion_items (
            id,
            item_id,
            sku,
            title,
            description,
            price,
            image_url,
            max_qty_per_order,
            sort_order,
            is_menu_item,
            item_id (
              id,
              name,
              description,
              base_price,
              image_url,
              category_id,
              is_available,
               categories (
            id,
            name,
            position,
            category_option_groups (
              option_groups (
                id,
                name,
                type,
              display_type,
                min_select,
                max_select,
                required,
                options (
                  id,
                  name,
                  price_delta,
                  is_default
                )
              )
            )
          )
            )
          )
        `
          )
          .eq("venue_id", venue_id).eq("active", true).eq("is_visible", true)
          .order("id", { ascending: false });

        if (error) return { error: error.message };
        return { data };
      },
      providesTags: ["promotions"],
    }),

    getItemsByOnlyTwoCategories: builder.query({
      async queryFn(venue_id) {
        try {
          const { data, error } = await supabase
            .from("items")
            .select(
              `
          *,
          categories (
            id,
            name,
            category_option_groups (
              id,
              option_groups (
                id,
                name,
                type,
                min_select,
                max_select,
                required,
                options (
                  id,
                  name,
                  price_delta,
                  is_default
                )
              )
            )
          )
        `
            )
            .eq("venue_id", venue_id)
            .order("id", { ascending: false });

          if (error) return { error: error.message };

          //  STEP 1: Group items by category name
          const categoryGroups = {};
          data.forEach((item) => {
            const categoryName = item.categories?.name?.toLowerCase();
            if (!categoryName) return;

            if (!categoryGroups[categoryName]) {
              categoryGroups[categoryName] = [];
            }

            categoryGroups[categoryName].push({
              id: item.id,
              name: item.name,
              description: item.description || "",
              price: item.price ? `$${item.price}` : "", // format price
              image: item.image_url || "/placeholder.jpg", // fallback image
            });
          });

          //  STEP 2: Take only first 2 categories
          const limitedCategories = Object.entries(categoryGroups)
            .slice(0, 2) // first 2 categories
            .reduce((acc, [categoryName, items]) => {
              acc[categoryName] = items.slice(0, 3); // first 3 items per category
              return acc;
            }, {});

          return { data: limitedCategories };
        } catch (err) {
          return { error: err.message };
        }
      },
      providesTags: ["items"],
    }),

    //  Get Item by ID
    getItemsById: builder.query({
      async queryFn(id) {
        const { data, error } = await supabase
          .from("items")
          .select("*")
          .eq("id", id)
          .single();

        if (error) return { error: error.message };
        return { data };
      },
      providesTags: (result, error, id) => [{ type: "items", id: id }],
    }),

    //  Get Item by Category
    getItemsByCategory: builder.query({
      async queryFn(id) {
        const { data, error } = await supabase
          .from("items")
          .select(
            `
          *,
          categories (
            id,
            name,
            category_option_groups (
              id,
              option_groups (
                id,
                name,
                type,
                min_select,
                max_select,
                required,
                options (
                  id,
                  name,
                  price_delta,
                  is_default
                )
              )
            )
          )
        `
          )
          .eq("category_id", id);

        if (error) return { error: error.message };
        // 🟢 Transform Supabase Response
        const transformed = data.map((item) => ({
          id: item.id,
          name: item.name,
          base_price: item.base_price ?? 0,
          category_id: item.category_id,
          image_url: item.image_url,
          description: item.description,
          option_groups:
            item.categories?.category_option_groups?.map((cog) => ({
              id: cog.option_groups.id,
              name: cog.option_groups.name,
              type: cog.option_groups.type,
              required: cog.option_groups.required,
              min_select: cog.option_groups.min_select,
              max_select: cog.option_groups.max_select,
              options:
                cog.option_groups.options?.map((opt) => ({
                  id: opt.id,
                  name: opt.name,
                  price: opt.price_delta,
                  is_default: opt.is_default,
                  option_group_id: cog.option_groups.id,
                })) ?? [],
            })) ?? [],
        }));

        return { data: transformed };
      },
      providesTags: (result, error, id) => [{ type: "items-category", id: id }],
    }),
  }),
});

export const {
  useGetItemsQuery,
  useGetItemsByIdQuery,
  useGetItemsByCategory,
  useGetItemsByOnlyTwoCategoriesQuery,
  useGetPromotionsQuery,
} = itemsApi;
