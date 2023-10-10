'use client'
import { useState } from 'react'
import { PencilIcon, TrashIcon } from './Icons'
import Modal from './Modal'

interface TableProps {
  heading: { [key: string]: string }
  data: { [key: string]: string }[]
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
    <div className='mt-20 flex flex-col'>
      <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full overflow-hidden py-2 sm:px-6 lg:px-8'>
          <table className='lg:text-md min-w-full text-left font-light '>
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
                  className='border-b transition duration-150 hover:bg-secondary/25 dark:border-neutral-500'
                  key={i}
                >
                  {Object.keys(heading).map((key, j) => (
                    <td className='whitespace-nowrap px-6 py-4' key={j}>
                      {row[key]}
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
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} data={data}>
        HOLA
      </Modal>
    </div>
  )
}
