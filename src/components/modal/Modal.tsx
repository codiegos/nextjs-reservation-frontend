'use client'
import { XIcon } from '../icons'
import { useModal } from '@/hooks/use-modal'

interface ModalProps {
  children?: React.ReactNode
}

function Modal({ children }: ModalProps) {
  const { state, dispatch } = useModal()
  const { isModalOpen } = state

  const onClose = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  return (
    <section
      className={`fixed inset-0 z-50 grid place-items-center transition-colors lg:pl-64 ${
        isModalOpen ? 'bg-black bg-opacity-50' : 'invisible'
      }`}
    >
      <article
        className={`max-w-2xl rounded-lg border bg-white p-14 shadow transition-all dark:border-slate-800 dark:bg-slate-900 ${
          isModalOpen ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
        }`}
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <button onClick={onClose} className='absolute right-4 top-4'>
          <XIcon className='h-8 w-8 duration-150 hover:scale-105' />
        </button>

        {children}
      </article>
    </section>
  )
}
export default Modal
