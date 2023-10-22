'use client'
import { usePathname } from 'next/navigation'
import { XIcon } from '../icons'
import { RowData } from '@/types'
import Form from '../form'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  rowData?: RowData
}

function Modal({ isOpen, onClose, rowData }: ModalProps) {
  const pathname = usePathname().split('/').pop()

  return (
    <section
      className={`fixed inset-0 z-50 grid place-items-center transition-colors lg:pl-64 ${
        isOpen ? 'bg-black bg-opacity-50' : 'invisible'
      }`}
    >
      <article
        className={`max-w-2xl rounded-lg border bg-white p-14 shadow transition-all dark:border-slate-800 dark:bg-slate-900 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
        }`}
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <button onClick={onClose} className='absolute right-4 top-4'>
          <XIcon className='h-8 w-8 duration-150 hover:scale-105' />
        </button>

        {rowData ? (
          <Form type={pathname} rowData={rowData} />
        ) : (
          <Form type={pathname} />
        )}
      </article>
    </section>
  )
}
export default Modal
