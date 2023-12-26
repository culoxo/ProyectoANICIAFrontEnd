import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";

export const servApi = createApi({
  reducerPath: "servApi",
  baseQuery: customFetchBase,
  tagTypes: ["Servicio"],
  endpoints: (builder) => ({
    getServs: builder.query({
      query(queryFilters) {

        let urlQuery =`servicios`;

        return {
          url: `/${urlQuery}`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ['Servicios']
    }),

    // Get single user
    getServ: builder.query({
      query(servId) {
        return {
          url: "servicios/" + servId,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ['Servicios'],
    }),

    // Post user
    postServ: builder.mutation({
      query(newServ) {
        return {
          url: "servicios",
          method: "POST",
          body: newServ,
          credentials: "include",
        };
      },
      invalidatesTags: ['Servicios'],
    }),

    // Update user
    updateServ: builder.mutation({
      query({ servId, updatedServ }) {
        return {
          url: "servicios/" + servId,
          method: "PUT",
          body: updatedServ,
          credentials: "include",
        };
      },
      invalidatesTags: ['Servicios']
    }),

    // Delete user
    deleteServ: builder.mutation({
      query(servId) {
        return {
          url: "servicios/" + servId,
          method: "DELETE",
          credentials: "include",
        };
      },
      invalidatesTags: ['Servicios']
    })
  }),
});


export const {
  useGetServsQuery,
  useGetServQuery,
  useUpdateServMutation,
  usePostServMutation,
  useDeleteServMutation,
} = servApi;