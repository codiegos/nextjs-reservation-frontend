import { z } from 'zod'

export const prepaidSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
})
