import { XIcon } from './Icons'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  data: { [key: string]: string }[]
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <div
      className={`fixed inset-0 z-50 grid place-items-center transition-colors lg:pl-64 ${
        isOpen ? 'bg-black bg-opacity-50' : 'invisible'
      }`}
      onClick={onClose}
    >
      <div
        className={`max-w-2xl rounded-lg bg-white p-6 shadow transition-all dark:bg-gray-800 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
        }`}
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <button onClick={onClose} className='absolute right-0 top-0'>
          <XIcon className='h-8 w-8 duration-150 hover:scale-105' />
        </button>
        {children}
      </div>
    </div>
  )
}
export default Modal
