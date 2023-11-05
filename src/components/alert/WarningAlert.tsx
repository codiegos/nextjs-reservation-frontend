import { InfoIcon } from '../icons'

function WarningAlert() {
  return (
    <aside
      className='mb-4 flex items-center gap-4 rounded-lg bg-yellow-50 p-4 text-sm text-yellow-800 dark:bg-primary-900 dark:text-yellow-300'
      role='alert'
    >
      <InfoIcon className='h-6 w-6 flex-none text-yellow-400' />
      <p>
        <span className='font-medium'>Alerta!</span> No se han encontrado datos.
      </p>
    </aside>
  )
}
export default WarningAlert
