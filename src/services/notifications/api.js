import { supabase } from "@/actions/baseURL/base_url";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export const notificationApi = createApi({
  reducerPath: "notificationApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["notifications"],
  endpoints: (builder) => ({
    //  Get All Notifications
    getNotifications: builder.query({
      async queryFn(venue_id) {
        const { data, error } = await supabase
          .from("notifications")
          .select("*, venues(id, display_name)")
          .eq("venue_id", venue_id)
        .order("created_at", { ascending: false });
        if (error) return { error: error.message };
        return { data };
      },
      providesTags: ["notifications"],
    }),

    //  Get Notifications by id
    getNotificationsById: builder.query({
      async queryFn(id) {
        const { data, error } = await supabase
          .from("tables")
          .select("*,  venues(id, display_name)")
          .eq("id", id)
          .single();

        if (error) return { error: error.message };
        return { data };
      },
      providesTags: (result, error, id) => [{ type: "tables", id: id }],
    }),

    // Add Notifications
    addNotifications: builder.mutation({
      async queryFn(newNotifications) {
        const { venue_id, type, payload, is_read, message, url } =
          newNotifications;

        const { data, error } = await supabase
          .from("notifications")
          .insert([
            {
              venue_id,
              type,
              payload,
              message,
              is_read,
              url,
            },
          ])
          .select();

        if (error) return { error: error.message };
        return { data };
      },
      invalidatesTags: ["notifications"],
    }),

    // Update Category
    updateNotifications: builder.mutation({
      async queryFn(updatedNotifications) {
        const { id, is_read } = updatedNotifications;
        const { data, error } = await supabase
          .from("notifications")
          .update({
            is_read: !is_read,
          })
          .eq("id", id)
          .select();

        if (error) return { error: error.message };
        return { data };
      },
      invalidatesTags: ["notifications"],
    }),

    // Delete Category
    deleteNotifications: builder.mutation({
      async queryFn(id) {
        const { data, error } = await supabase
          .from("notifications")
          .delete()
          .eq("id", id);

        if (error) return { error: error.message };
        return { data };
      },
      invalidatesTags: ["notifications"],
    }),
  }),
});

export const {
  useGetNotificationsQuery,
  useGetNotificationsByIdQuery,
  useAddNotificationsMutation,
  useUpdateNotificationsMutation,
  useDeleteNotificationsMutation,
} = notificationApi;
