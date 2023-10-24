import { settingSchema } from '@/libs/schemas/settingSchema'
import { z } from 'zod'

export type Setting = z.infer<typeof settingSchema>
