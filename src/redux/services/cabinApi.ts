import { Cabin } from '@/types/cabin'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cabinApi = createApi({
  reducerPath: 'cabinApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/',
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getCabins: builder.query<Cabin[], null>({
      query: () => 'cabins/',
    }),
    createCabin: builder.mutation({
      query: (body) => ({
        url: 'cabins/',
        method: 'POST',
        body,
      }),
    }),
    getCabinById: builder.query<Cabin, { id: string }>({
      query: ({ id }) => `cabins/${id}`,
    }),
    updateCabin: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `cabins/${id}`,
        method: 'PATCH',
        body: patch,
      }),
    }),
    deleteCabin: builder.mutation({
      query: ({ id }) => ({
        url: `cabins/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useGetCabinsQuery,
  useCreateCabinMutation,
  useGetCabinByIdQuery,
  useUpdateCabinMutation,
  useDeleteCabinMutation,
} = cabinApi
