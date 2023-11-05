'use client'
import { PrimaryButton } from '@/components/button'
import { CustomerForm, DeleteForm } from '@/components/form'
import { LoaderIcon } from '@/components/icons'
import { Modal } from '@/components/modal'
import { Table, TablePagination } from '@/components/table'
import { customerHeading, modalModes } from '@/constants/data'
import { useModal } from '@/hooks/use-modal'
import { useGetCustomersQuery } from '@/redux/services/customerApi'
import { Customer, RowData } from '@/types'
import { useState } from 'react'

function CustomerPage() {
  const [pageIndex, setNumberPage] = useState<number>(1)
  const { data: customers, isLoading } = useGetCustomersQuery(pageIndex)
  const [customerRow, setCustomerRow] = useState<Customer>({
    id: 0,
    name: '',
    last_name: '',
    email: '',
    phone: '',
  })
  const { state, dispatch } = useModal()
  const { modalMode } = state

  if (isLoading)
    return (
      <div className='grid h-3/4 place-items-center'>
        <LoaderIcon className='h-16 w-16 animate-spin' />
      </div>
    )

  const handleOpenFormCustomer = () => {
    dispatch({ type: 'SET_MODAL_MODE', payload: 'create' })
    dispatch({ type: 'OPEN_MODAL' })
  }
  return (
    <section className='grid gap-6 py-2 sm:px-6 lg:px-8'>
      <PrimaryButton
        className='justify-self-end'
        onClick={handleOpenFormCustomer}
      >
        Agregar Cliente
      </PrimaryButton>
      <Table
        heading={customerHeading}
        data={customers?.results}
        setRowData={
          setCustomerRow as React.Dispatch<
            React.SetStateAction<RowData | undefined>
          >
        }
      />
      <Modal>
        {modalMode == modalModes.create && <CustomerForm />}
        {modalMode == modalModes.edit && <CustomerForm rowData={customerRow} />}
        {modalMode == modalModes.delete && <DeleteForm id={customerRow.id} />}
      </Modal>
      <div className='flex flex-wrap gap-3 py-6'>
        <TablePagination
          gotoPage={setNumberPage}
          pageIndex={pageIndex}
          totalCount={customers?.count || 0}
          canNextPage={customers?.next !== null}
          canPreviousPage={customers?.previous !== null}
        />
      </div>
    </section>
  )
}
export default CustomerPage
