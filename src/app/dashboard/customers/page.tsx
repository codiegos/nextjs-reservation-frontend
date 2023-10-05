'use client'
import { LoaderIcon } from '@/components/Icons'
import { Table } from '@/components/Table'
import { useGetCustomersQuery } from '@/redux/services/customerApi'

function CustomerPage() {
  const { data: customers = [], isLoading } = useGetCustomersQuery(null)

  if (isLoading)
    return (
      <div className='grid h-full place-items-center'>
        <LoaderIcon className='h-16 w-16 animate-spin' />
      </div>
    )

  return (
    <section>
      <Table
        heading={{
          id: '#',
          name: 'Nombre',
          last_name: 'Apellido',
          email: 'Correo',
          phone: 'Teléfono',
        }}
        data={customers || []}
      />
    </section>
  )
}
export default CustomerPage
