'use client'
import { XIcon } from '../icons'
import { RowData } from '@/types'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  rowData: RowData | undefined
}

function Modal({ isOpen, onClose, rowData }: ModalProps) {
  return (
    <div
      className={`fixed inset-0 z-50 grid place-items-center transition-colors lg:pl-64 ${
        isOpen ? 'bg-black bg-opacity-50' : 'invisible'
      }`}
      onClick={onClose}
    >
      <div
        className={`max-w-2xl rounded-lg bg-white p-8 shadow transition-all dark:bg-gray-800 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
        }`}
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <button onClick={onClose} className='absolute right-2 top-2'>
          <XIcon className='h-8 w-8 duration-150 hover:scale-105' />
        </button>
        {/* <div>ROW DATA CONTENT</div> */}
      </div>
    </div>
  )
}
export default Modal
