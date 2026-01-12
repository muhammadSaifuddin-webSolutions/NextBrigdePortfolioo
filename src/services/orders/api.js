import { supabase } from "@/actions/baseURL/base_url";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["orders"],
  endpoints: (builder) => ({
    //  Get All Orders
    getOrders: builder.query({
      async queryFn(venue_id) {
        const { data, error } = await supabase
          .from("orders")
          .select(
            `*,  venues(id, display_name),  order_items ( id,
            name_snapshot,
            quantity,
            unit_price,
            product_addons_snapshot,
            removal_ingredients_snapshot,
            category_addons_snapshot,
            notes
          )`
          )
          .eq("venue_id", venue_id)
          .order("id", { ascending: true });
        if (error) return { error: error.message };
        return { data };
      },
      providesTags: ["orders"],
    }),

    //  Get order by id
    getOrdersById: builder.query({
      async queryFn(id) {
        const { data, error } = await supabase
          .from("orders")
          .select(
            `*,  venues(id, display_name),  order_items ( id,
            name_snapshot,
            quantity,
            unit_price,
            product_addons_snapshot,
            removal_ingredients_snapshot,
            category_addons_snapshot,
            notes
          )`
          )
          .eq("id", id)
          .single();

        if (error) return { error: error.message };
        return { data };
      },
      providesTags: (result, error, id) => [{ type: "orders", id: id }],
    }),

    // Add Orders
    addOrder: builder.mutation({
      async queryFn(newOrder) {
        const {
          customer_name,
          customer_email,
          customer_contact,
          order_no,
          order_type,
          source,
          status,
          subtotal,
          tax,
          total,
          payment_status,
          venue_id,
          orderItems,
        } = newOrder;
        const { data: order, error: orderError } = await supabase
          .from("orders")
          .insert({
            customer_name,
            customer_email,
            customer_contact,
            order_no,
            order_type,
            source,
            status,
            subtotal,
            tax,
            total,
            payment_status,
            venue_id,
          })
          .select();

        if (orderError) return { error: orderError.message };

        const itemDetails = orderItems?.map((items) => {
          return {
            ...items,
            order_id: order[0]?.id,
          };
        });

        const updatedItems = itemDetails.map(({ id, ...rest }) => rest);

        const { data: itemsData, error: itemsError } = await supabase
          .from("order_items")
          .insert(updatedItems, { upsert: true });

        if (itemsError) {
          return { error: itemsError.message };
        }

        return { order };
      },
      invalidatesTags: ["orders"],
    }),

    updateOrderStatus: builder.mutation({
      async queryFn(data) {
        try {
          const { orderId, newStatus } = data;
          // Update only the `status` column
          const { data: updateDetails, error } = await supabase
            .from("orders")
            .update({
              status: newStatus,
              updated_at: new Date().toISOString(), // keep updated_at in sync
            })
            .eq("id", orderId)
            .select()
            .single();

          if (error) return { error: error.message };

          return { updateDetails };
        } catch (err) {
          return { error: err.message };
        }
      },
      invalidatesTags: ["orders"], // so your orders list gets refreshed
    }),

    updateOrderPaymentStatus: builder.mutation({
      async queryFn(data) {
        try {
          const { orderId, newStatus } = data;
          // Update only the `status` column
          const { data: updateDetails, error } = await supabase
            .from("orders")
            .update({
              payment_status: newStatus,
              updated_at: new Date().toISOString(), // keep updated_at in sync
            })
            .eq("id", orderId)
            .select()
            .single();

          if (error) return { error: error.message };

          return { updateDetails };
        } catch (err) {
          return { error: err.message };
        }
      },
      invalidatesTags: ["orders"], // so your orders list gets refreshed
    }),

    // Update Order
    updateOrder: builder.mutation({
      async queryFn(updatedCategory) {
        const { id, ...rest } = updatedCategory;
        const { data, error } = await supabase
          .from("orders")
          .update(rest)
          .eq("id", id)
          .select();

        if (error) return { error: error.message };
        return { data };
      },
      invalidatesTags: ["orders"],
    }),

    // Delete Order
    deleteOrder: builder.mutation({
      async queryFn(id) {
        const { data, error } = await supabase
          .from("orders")
          .delete()
          .eq("id", id);

        if (error) return { error: error.message };
        return { data };
      },
      invalidatesTags: ["orders"],
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useGetOrdersByIdQuery,
  useAddOrderMutation,
  useUpdateOrderMutation,
  useUpdateOrderStatusMutation,
  useUpdateOrderPaymentStatusMutation,
  useDeleteOrderMutation,
} = orderApi;
