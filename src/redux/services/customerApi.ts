import { Customer } from '@/types/customer'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const customerApi = createApi({
  reducerPath: 'customerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/',
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getCustomers: builder.query<Customer[], null>({
      query: () => 'customers/',
    }),
    createCustomer: builder.mutation({
      query: (body) => ({
        url: 'customers/',
        method: 'POST',
        body,
      }),
    }),
    getCustomerById: builder.query<Customer, { id: string }>({
      query: ({ id }) => `customers/${id}`,
    }),
    updateCustomer: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `customers/${id}`,
        method: 'PATCH',
        body: patch,
      }),
    }),
    deleteCustomer: builder.mutation({
      query: ({ id }) => ({
        url: `customers/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useGetCustomersQuery,
  useCreateCustomerMutation,
  useGetCustomerByIdQuery,
  useUpdateCustomerMutation,
  useDeleteCustomerMutation,
} = customerApi
