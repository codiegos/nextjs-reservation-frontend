'use client'
import { useDeleteCustomerMutation } from '@/redux/services/customerApi'
import { useModal } from '@/hooks/use-modal'
import { LoaderIcon } from '../icons'
import { toast } from 'sonner'
import { DangerButton, OutlineButton } from '../button'
import { Customer } from '@/types'

interface CustomerFormProps {
  id: Customer['id']
}

function DeleteForm({ id }: CustomerFormProps) {
  const { dispatch } = useModal()

  const [
    deleteCustomer,
    { isLoading: isDeleteLoading, isSuccess: isDeleteSuccess },
  ] = useDeleteCustomerMutation()

  const handleDeleteClick = () => {
    try {
      console.log({ id })
      deleteCustomer({ id })
      dispatch({ type: 'CLOSE_MODAL' })
      toast.success('Se ha eliminado correctamente')
    } catch (error) {
      toast.error('Error al eliminar')
    }
  }

  return (
    <div className='grid gap-8 text-center sm:w-80 2xl:w-96'>
      <h2 className='text-xl font-bold'>
        ¿Estás seguro de eliminar la siguiente información?
      </h2>
      <p>Este proceso no puede ser revocado</p>
      <div className='flex items-center justify-between'>
        <DangerButton onClick={handleDeleteClick}>Eliminar</DangerButton>
        <OutlineButton onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
          Cancelar
        </OutlineButton>
      </div>
    </div>
  )
}
export default DeleteForm
