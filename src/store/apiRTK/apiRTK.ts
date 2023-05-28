import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiRTK = createApi({
  reducerPath: "apiRTK",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5500/" }),
  tagTypes: ["Todos", "Products"],
  endpoints: (build) => ({
    getTodos: build.query<ITodo[], void>({
      query: () => ({
        url: "todos",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Todos", id } as const)),
              { type: "Todos", id: "LIST-Todos" },
            ]
          : [{ type: "Todos", id: "LIST-Todos" }],
    }),

    addTodo: build.mutation<any, Omit<ITodo, "id">>({
      query: (data) => ({
        url: "todos",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Todos", id: "LIST-Todos" }],
    }),

    deleteTodo: build.mutation<any, number>({
      query: (id) => ({
        url: `todos/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: [{ type: "Todos", id: "LIST-Todos" }],
    }),

    editTodo: build.mutation<any, ITodo>({
      query: (editedData) => ({
        url: `todos/${editedData.id}`,
        method: "PUT",
        body: editedData,
      }),
      invalidatesTags: [{ type: "Todos", id: "LIST-Todos" }],
    }),

    // ===================================================

    getProducts: build.query<IProduct[], void>({
      query: () => ({
        url: "products",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Products", id } as const)),
              { type: "Products", id: "LIST-Products" },
            ]
          : [{ type: "Products", id: "LIST-Products" }],
    }),

    getProduct: build.query<IProduct, string>({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      providesTags: (result) => [{ type: "Products", id: "LIST-Products" }],
    }),

    addProduct: build.mutation<any, Omit<IProduct, "id">>({
      query: (data) => ({
        url: "products",
        method: "POST",
        body: data,
      }),

      invalidatesTags: [{ type: "Products", id: "LIST-Products" }],
    }),

    deleteProduct: build.mutation<any, string | number>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: [{ type: "Products", id: "LIST-Products" }],
    }),

    editProduct: build.mutation<any, IProduct>({
      query: (editedData) => ({
        url: `products/${editedData.id}`,
        method: "PUT",
        body: editedData,
      }),

      invalidatesTags: [{ type: "Products", id: "LIST-Products" }],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useEditTodoMutation,
  useGetProductsQuery,
  useGetProductQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useEditProductMutation,
} = apiRTK;
