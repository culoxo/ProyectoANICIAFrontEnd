import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";

export const usuarioApi = createApi({
  reducerPath: "usuarioApi",
  baseQuery: customFetchBase,
  tagTypes: ["Usuarios"],
  endpoints: (builder) => ({
    
    getUsers: builder.query({
      query(queryFilters) {

        let urlQuery =`usuarios`;

        return {
          url: `/${urlQuery}`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ['Usuarios']
    }),

    // Get single user
    getUser: builder.query({
      query(userId) {
        return {
          url: "usuarios/" + userId,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ['Usuarios'],
    }),

    // Post user
    postUser: builder.mutation({
      query(newUsuario) {
        return {
          url: "usuarios",
          method: "POST",
          body: newUsuario,
          credentials: "include",
        };
      },
      invalidatesTags: ['Usuarios'],
    }),

    // Update user
    updateUser: builder.mutation({
      query({ userId, updatedUser }) {
        return {
          url: "usuarios/" + userId,
          method: "PUT",
          body: updatedUser,
          credentials: "include",
        };
      },
      invalidatesTags: ['Usuarios']
    }),

    // Delete user
    deleteUser: builder.mutation({
      query(userId) {
        return {
          url: "usuarios/" + userId,
          method: "DELETE",
          credentials: "include",
        };
      },
      invalidatesTags: ['Usuarios']
    })
  }),
});


export const {
  useGetUsersQuery,
  useGetUserQuery,
  useUpdateUserMutation,
  usePostUserMutation,
  useDeleteUserMutation,
} = usuarioApi;
