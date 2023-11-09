import { ListResponse } from '@/types'
import { Reservation } from '@/types/reservation'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const reservationApi = createApi({
  reducerPath: 'reservationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/api/',
    credentials: 'include',
  }),
  tagTypes: ['Reservations'],
  endpoints: (builder) => ({
    getReservations: builder.query<ListResponse, number>({
      query: (page = 1) => `reservations/?page=${page}`,
      providesTags: ['Reservations'],
    }),
    createReservation: builder.mutation({
      query: (body) => ({
        url: 'reservations/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Reservations'],
    }),
    getReservationById: builder.query<Reservation, { id: string }>({
      query: ({ id }) => `reservations/${id}/`,
    }),
    updateReservation: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `reservations/${id}/`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Reservations'],
    }),
    deleteReservation: builder.mutation({
      query: ({ id }) => ({
        url: `reservations/${id}/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Reservations'],
    }),
  }),
})

export const {
  useCreateReservationMutation,
  useDeleteReservationMutation,
  useGetReservationByIdQuery,
  useGetReservationsQuery,
  useUpdateReservationMutation,
} = reservationApi
