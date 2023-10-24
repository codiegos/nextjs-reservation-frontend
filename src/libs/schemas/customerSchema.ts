import { z } from 'zod'

export const customerSchema = z.object({
  id: z.number(),
  name: z
    .string()
    .min(2, { message: 'El nombre debe tener al menos 2 carácteres.' })
    .max(255, { message: 'El nombre no puede tener más de 255 carácteres.' })
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/, {
      message: 'El nombre solo puede contener letras.',
    }),
  last_name: z
    .string()
    .min(2, { message: 'El apellido debe tener al menos 2 carácteres.' })
    .max(255, { message: 'El apellido no puede tener más de 255 carácteres.' })
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/, {
      message: 'El apellido solo puede contener letras.',
    }),
  email: z
    .string()
    .email({ message: 'El correo electrónico debe ser válido.' })
    .max(255, {
      message: 'El correo electrónico no puede tener más de 255 carácteres.',
    }),
  phone: z
    .string()
    .max(255, { message: 'El teléfono no puede tener más de 255 carácteres.' })
    .regex(/^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/, {
      message: 'El teléfono debe ser válido.',
    }),
})
