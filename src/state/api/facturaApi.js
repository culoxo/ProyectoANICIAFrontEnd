import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";

export const facturaApi = createApi({
  reducerPath: "Factura",
  baseQuery: customFetchBase,
  tagTypes: ["Factura"],
  endpoints: (builder) => ({

    getFacturas: builder.query({
      query(queryFilters) {

        let urlQuery =`factura`;

        return {
          url: `/${urlQuery}`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ['Factura']
    }),

    // Get single user
    getFactura: builder.query({
      query(facturaId) {
        return {
          url: "factura/" + facturaId,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ['Factura'],
    }),
    // Post user
    postFactura: builder.mutation({
      query(newFactura) {
        return {
          url: "factura",
          method: "POST",
          body: newFactura,
          credentials: "include",
        };
      },
      invalidatesTags: ['Factura'],
    }),

    // Update user
    updateFactura: builder.mutation({
      query({ facturaId, updatedFactura }) {
        return {
          url: "factura/" + facturaId,
          method: "PUT",
          body: updatedFactura,
          credentials: "include",
        };
      },
      invalidatesTags: ['Factura']
    }),

    // Delete user
    deleteFactura: builder.mutation({
      query(facturaId) {
        return {
          url: "factura/" + facturaId,
          method: "DELETE",
          credentials: "include",
        };
      },
      invalidatesTags: ['Factura']
    })
  }),
});


export const {
  useGetFacturasQuery,
  useGetFacturaQuery,
  useUpdateFacturaMutation,
  usePostFacturaMutation,
  useDeleteFacturaMutation,
} = facturaApi;