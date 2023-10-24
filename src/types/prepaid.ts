import { prepaidSchema } from '@/libs/schemas/prepaidSchema'
import { z } from 'zod'

export type Prepaid = z.infer<typeof prepaidSchema>
