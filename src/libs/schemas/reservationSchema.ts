import { z } from 'zod'
import { cabinSchema } from './cabinSchema'
import { customerSchema } from './customerSchema'

export const reservationSchema = z.object({
  id: z.number(),
  cabin: cabinSchema,
  customer: customerSchema,
  startDate: z.date(),
  endDate: z.date(),
  tinaja: z.boolean(),
  amount: z.number(),
  discount: z.number(),
  message: z.string(),
  createdAt: z.date(),
})
