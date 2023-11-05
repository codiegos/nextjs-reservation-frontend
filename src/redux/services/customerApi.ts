import { ListResponse } from '@/types'
import { Customer } from '@/types/customer'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const customerApi = createApi({
  reducerPath: 'customerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/',
    credentials: 'include',
  }),
  tagTypes: ['Customers'],
  endpoints: (builder) => ({
    getCustomers: builder.query<ListResponse, number>({
      query: (page = 1) => `customers/?page=${page}`,
      providesTags: ['Customers'],
    }),
    createCustomer: builder.mutation({
      query: (body) => ({
        url: 'customers/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Customers'],
    }),
    getCustomerById: builder.query<Customer, { id: string }>({
      query: ({ id }) => `customers/${id}/`,
    }),
    updateCustomer: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `customers/${id}/`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Customers'],
    }),
    deleteCustomer: builder.mutation({
      query: ({ id }) => ({
        url: `customers/${id}/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Customers'],
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
