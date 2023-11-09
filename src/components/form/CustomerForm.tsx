'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Customer } from '@/types'
import { InputForm } from '../input'
import { customerSchema } from '@/libs/schemas/customerSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  useCreateCustomerMutation,
  useUpdateCustomerMutation,
} from '@/redux/services/customerApi'
import { useModal } from '@/hooks/use-modal'
import { LoaderIcon } from '../icons'
import { toast } from 'sonner'
import { Form } from '.'

interface CustomerFormProps {
  rowData?: Customer
}

function CustomerForm({ rowData }: CustomerFormProps) {
  const { dispatch } = useModal()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Customer>({
    resolver: zodResolver(customerSchema),
  })

  const [
    updateCustomer,
    { isLoading: isUpdateLoading, isSuccess: isUpdateSuccess },
  ] = useUpdateCustomerMutation()
  const [
    createCustomer,
    { isLoading: isCreateLoading, isSuccess: isCreateSuccess },
  ] = useCreateCustomerMutation()

  const onSubmit: SubmitHandler<Customer> = (data) => {
    try {
      if (rowData) {
        console.log(rowData)
        data.id = rowData.id
        updateCustomer(data)
        toast.success('Cliente actualizado con éxito')
      } else {
        createCustomer(data)
        toast.success('Cliente creado con éxito')
      }

      dispatch({ type: 'CLOSE_MODAL' })
    } catch (err) {
      toast.error('Ha ocurrido un error')
    }
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
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
        className='flex items-center justify-center whitespace-nowrap rounded-md bg-primary-900 p-2.5 text-white duration-150 hover:bg-primary-500'
      >
        Guardar{' '}
        {(isUpdateLoading || isCreateLoading) && (
          <LoaderIcon className='h-4 w-4 animate-spin' />
        )}
      </button>
    </Form>
  )
}
export default CustomerForm
