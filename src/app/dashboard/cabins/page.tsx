'use client'
import { LoaderIcon } from '@/components/icons'
import { Table } from '@/components/table'
import { useGetCabinsQuery } from '@/redux/services/cabinApi'
import { cabinHeading } from '@/constants/data'
import { Cabin, RowData } from '@/types'
import { useState } from 'react'

function CabinPage() {
  const { data: cabins, isLoading } = useGetCabinsQuery(null)
  const [rowCabin, setCabinRow] = useState<Cabin>()

  if (isLoading)
    return (
      <div className='grid h-full place-items-center'>
        <LoaderIcon className='h-16 w-16 animate-spin' />
      </div>
    )

  return (
    <section>
      <Table
        heading={cabinHeading}
        data={cabins?.results}
        setRowData={
          setCabinRow as React.Dispatch<
            React.SetStateAction<RowData | undefined>
          >
        }
      />
    </section>
  )
}
export default CabinPage
