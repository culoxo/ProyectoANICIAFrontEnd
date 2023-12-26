import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";

export const clientApi = createApi({
  reducerPath: "clientApi",
  baseQuery: customFetchBase,
  tagTypes: ["Clients"],
  endpoints: (builder) => ({
    
    getClients: builder.query({
      query(queryFilters) {

        let urlQuery =`clientes`;

        return {
          url: `/${urlQuery}`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ['Client']
    }),

    // Get single user
    getClient: builder.query({
      query(clientId) {
        return {
          url: "clientes/" + clientId,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ['Client'],
    }),

    // Post user
    postClient: builder.mutation({
      query(newClient) {
        return {
          url: "clientes",
          method: "POST",
          body: newClient,
          credentials: "include",
        };
      },
      invalidatesTags: ['Client'],
    }),

    // Update user
    updateClient: builder.mutation({
      query({ clientId, updatedClient }) {
        return {
          url: "clientes/" + clientId,
          method: "PUT",
          body: updatedClient,
          credentials: "include",
        };
      },
      invalidatesTags: ['Client']
    }),

    // Delete user
    deleteClient: builder.mutation({
      query(clientId) {
        return {
          url: "clientes/" + clientId,
          method: "DELETE",
          credentials: "include",
        };
      },
      invalidatesTags: ['Client']
    })
  }),
});


export const {
  useGetClientsQuery,
  useGetClientQuery,
  useUpdateClientMutation,
  usePostClientMutation,
  useDeleteClientMutation,
} = clientApi;
