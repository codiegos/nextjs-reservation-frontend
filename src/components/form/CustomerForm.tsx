import { SubmitHandler, useForm } from 'react-hook-form'
import { Customer } from '@/types'
import { InputForm } from '../input'
import { customerSchema } from '@/libs/schemas/customerSchema'
import { zodResolver } from '@hookform/resolvers/zod'

interface CustomerFormProps {
  rowData?: Customer
}

function CustomerForm({ rowData }: CustomerFormProps) {
  console.log(rowData)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Customer>({
    resolver: zodResolver(customerSchema),
  })
  const onSubmit: SubmitHandler<Customer> = (data) => {
    console.log(data)
  }

  return (
    <form
      className='grid gap-6 sm:w-80 2xl:w-96'
      onSubmit={handleSubmit(onSubmit)}
      autoComplete='off'
    >
      <InputForm
        label='Nombre'
        placeholder='Juan Alberto'
        type='text'
        htmlFor='name'
        maxLength={255}
        defaultValue={rowData?.name}
        register={{ ...register('name') }}
        error={errors.name?.message}
      />
      <InputForm
        label='Apellido'
        placeholder='Pérez'
        type='text'
        htmlFor='last_name'
        maxLength={255}
        defaultValue={rowData?.last_name}
        register={{ ...register('last_name') }}
        error={errors.last_name?.message}
      />
      <InputForm
        label='Correo Electrónico'
        placeholder='juan_ap@ejemplo.com'
        type='email'
        htmlFor='email'
        maxLength={255}
        defaultValue={rowData?.email}
        register={{ ...register('email') }}
        error={errors.email?.message}
      />
      <InputForm
        label='Teléfono'
        placeholder='+56912345678'
        type='tel'
        htmlFor='phone'
        maxLength={12}
        defaultValue={rowData?.phone}
        register={{
          ...register('phone'),
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            let value = e.target.value
            if (value.length < 4) {
              e.target.value = '+569'
            }
            if (!value.match(/^[0-9+]+$/)) {
              e.target.value = value.slice(0, -1)
            }
          },
        }}
        error={errors.phone?.message}
      />

      <button
        type='submit'
        className='w-full rounded-md bg-primary-900 p-2.5 text-white'
      >
        Guardar
      </button>
    </form>
  )
}
export default CustomerForm
