import { cabinSchema } from '@/libs/schemas/cabinSchema'
import { z } from 'zod'

export type Cabin = z.infer<typeof cabinSchema>
