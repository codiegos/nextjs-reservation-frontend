export interface Setting {
  id: number
  key: string
  value: string
}

import { z } from 'zod'

export const settingSchema = z.object({
  id: z.number(),
  key: z.string(),
  value: z.string(),
})
