import { createApi } from "@reduxjs/toolkit/query/react";
import customFetchBase from "./customFetchBase";

export const usuarioApi = createApi({
  reducerPath: "usuarioApi",
  baseQuery: customFetchBase,
  tagTypes: ["Usuarios"],
  endpoints: (builder) => ({
    
    getUsers: builder.query({
      query(queryFilters) {
        // Verificar si queryFilters es undefined
        if (queryFilters === undefined) {
          // Puedes manejar este caso según tus necesidades, por ejemplo, retornar un valor por defecto
          return {
            url: "/usuarios",
            method: "GET",
            credentials: "include",
          };
        }
    
        let urlQuery = "usuarios";
    
        // Verifica si al menos hay un parámetro presente
        if (
          queryFilters.active !== undefined ||
          queryFilters.PASSWORD !== undefined ||
          queryFilters.USERNAME !== undefined
        ) {
          urlQuery += '?';
    
          // Agregar el parámetro active si está presente y no es nulo
          if (queryFilters.active !== undefined) {
            urlQuery += `active=${queryFilters.active}&`;
          }
    
          // Agregar el parámetro PASSWORD si está presente y no es nulo
          if (queryFilters.PASSWORD !== undefined) {
            urlQuery += `PASSWORD=${queryFilters.PASSWORD}&`;
          }
    
          // Agregar el parámetro USERNAME si está presente y no es nulo
          if (queryFilters.USERNAME !== undefined) {
            urlQuery += `USERNAME=${queryFilters.USERNAME}&`;
          }
    
          // Eliminar el último '&' si está presente
          urlQuery = urlQuery.slice(0, -1);
        }
    
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
