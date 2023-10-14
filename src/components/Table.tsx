'use client'
import { DataTypes } from '@/types'
import { useState } from 'react'
import { PencilIcon, TrashIcon } from './Icons'
import Modal from './Modal'
import { TableCell } from './TableCell'

interface TableProps {
  heading: { [key: string]: keyof DataTypes }
  data: DataTypes[keyof DataTypes][]
}

export function Table({ heading, data }: TableProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <div className='flex min-w-full flex-col overflow-hidden overflow-x-auto py-2 sm:px-6 lg:px-8'>
      <table className='lg:text-md min-w-full text-left font-light'>
        <thead className='border-b bg-secondary/90 font-medium dark:border-neutral-500'>
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
            <th scope='col' className='whitespace-nowrap px-6 py-4 text-white'>
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              className='border-b transition duration-150 hover:bg-secondary/25 dark:border-neutral-500'
              key={i}
            >
              {Object.keys(heading).map((head) => (
                <td className='whitespace-nowrap px-6 py-4' key={head}>
                  <TableCell
                    value={row[head as keyof DataTypes[keyof DataTypes]]}
                    type={head}
                  />
                </td>
              ))}

              <td className='flex items-center gap-4 whitespace-nowrap px-6 py-4'>
                <button onClick={() => openModal()}>
                  <PencilIcon className='duration-150 hover:text-indigo-400' />
                </button>
                <button>
                  <TrashIcon className='duration-150 hover:text-red-400' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={isModalOpen} onClose={closeModal} rowData={''}>
        HOLA
      </Modal>
    </div>
  )
}
