import { customerSchema } from '@/libs/schemas/customerSchema'
import { z } from 'zod'

export type Customer = z.infer<typeof customerSchema>
