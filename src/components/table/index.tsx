'use client'
import { RowData } from '@/types'
import { useState } from 'react'
import { PencilIcon, TrashIcon } from '../icons'
import Modal from '../modal'
import { TableCell } from './TableCell'
import WarningAlert from '../alert/WarningAlert'

interface TableProps {
  heading: RowData
  data: RowData[] | undefined
  isModalOpen: boolean
  setIsModalOpen: (isOpen: boolean) => void
}

export function Table({ heading, data }: TableProps) {
  const [rowData, setRowData] = useState<RowData>()
  const [isModalOpen, setIsModalOpen] = useState(false)

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
      <div className='inline-block min-w-full'>
        <div className='overflow-x-auto'>
          <table className='lg:text-md min-w-full text-left font-light'>
            <thead className='border-b border-primary-500 bg-primary-500 font-medium text-white dark:border-neutral-500 dark:bg-primary-900/50'>
              <tr>
                {Object.values(heading).map((head) => (
                  <th
                    scope='col'
                    className='whitespace-nowrap px-6 py-4'
                    key={head}
                  >
                    {head}
                  </th>
                ))}
                <th scope='col' className='whitespace-nowrap px-6 py-4'>
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr
                  className='border-b transition duration-150 hover:bg-primary-50 dark:border-neutral-500 dark:hover:bg-primary-900/30'
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
                      <PencilIcon className='duration-150 hover:text-primary-300' />
                    </button>
                    <button onClick={() => handleDeleteRow(row.id)}>
                      <TrashIcon className='duration-150 hover:text-primary-400' />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isModalOpen && (
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              rowData={rowData}
            />
          )}
        </div>
      </div>
    </aside>
  )
}
