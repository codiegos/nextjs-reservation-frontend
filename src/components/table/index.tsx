'use client'
import { DataTypes, RowData } from '@/types'
import { useState } from 'react'
import { PencilIcon, TrashIcon } from '../icons'
import Modal from '../modal'
import { TableCell } from './TableCell'
import WarningAlert from '../alert/WarningAlert'

interface TableProps {
  heading: RowData
  data: RowData[] | undefined
}

export function Table({ heading, data }: TableProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [rowData, setRowData] = useState<RowData>()

  const handleEditRow = (row: RowData) => {
    setRowData(row)
    setIsModalOpen(true)
  }

  const handleDeleteRow = (id: RowData['id']) => {
    console.log(id)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  if (!data) return <WarningAlert />

  return (
    <aside className='grid overflow-x-auto'>
      <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
        <div className='overflow-x-auto'>
          <table className='lg:text-md min-w-full text-left font-light'>
            <thead className='bg-tertiary border-b font-medium dark:border-neutral-500'>
              <tr>
                {Object.values(heading).map((head) => (
                  <th
                    scope='col'
                    className='whitespace-nowrap px-6 py-4 text-white'
                    key={head}
                  >
                    {head}
                  </th>
                ))}
                <th
                  scope='col'
                  className='whitespace-nowrap px-6 py-4 text-white'
                >
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr
                  className='border-b transition duration-150 hover:bg-indigo-500/10 dark:border-neutral-500'
                  key={i}
                >
                  {Object.keys(heading).map((head) => (
                    <td className='whitespace-nowrap px-6 py-4' key={head}>
                      <TableCell
                        value={row[head as keyof RowData]}
                        type={head}
                      />
                    </td>
                  ))}

                  <td className='flex items-center gap-4 whitespace-nowrap px-6 py-4'>
                    <button onClick={() => handleEditRow(row)}>
                      <PencilIcon className='duration-150 hover:text-indigo-400' />
                    </button>
                    <button onClick={() => handleDeleteRow(row.id)}>
                      <TrashIcon className='duration-150 hover:text-red-400' />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Modal isOpen={isModalOpen} onClose={closeModal} rowData={rowData} />
        </div>
      </div>
    </aside>
  )
}
