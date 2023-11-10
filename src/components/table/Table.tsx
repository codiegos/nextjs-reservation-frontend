'use client'
import { RowData } from '@/types'
import { PencilIcon, TrashIcon } from '../icons'
import { TableCell } from './TableCell'
import { WarningAlert } from '../alert'
import { useModal } from '@/hooks/use-modal'

type Heading = {
  [key: string]: string
}

interface TableProps {
  heading: Heading
  data?: RowData[]
  setRowData: React.Dispatch<React.SetStateAction<RowData | undefined>>
}

export function Table({ heading, data, setRowData }: TableProps) {
  const { dispatch } = useModal()

  const handleEditRow = (row: RowData) => {
    setRowData(row)
    dispatch({ type: 'SET_MODAL_MODE', payload: 'edit' })
    dispatch({ type: 'OPEN_MODAL' })
  }

  const handleDeleteRow = (row: RowData) => {
    setRowData(row)
    dispatch({ type: 'SET_MODAL_MODE', payload: 'delete' })
    dispatch({ type: 'OPEN_MODAL' })
  }

  if (!data) return <WarningAlert />

  return (
    <aside className='grid place-items-center overflow-x-auto'>
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
              {data.map((row: RowData) => (
                <tr
                  className='border-b transition duration-150 hover:bg-primary-50 dark:border-neutral-500 dark:hover:bg-primary-900/30'
                  key={row.id}
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
                    <button onClick={() => handleDeleteRow(row)}>
                      <TrashIcon className='duration-150 hover:text-primary-400' />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </aside>
  )
}
