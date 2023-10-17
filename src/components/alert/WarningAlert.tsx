import { InfoIcon } from '../icons'

function WarningAlert() {
  return (
    <aside
      className='dark:bg-tertiary mb-4 flex items-center gap-4 rounded-lg bg-yellow-50 p-4 text-sm text-yellow-800 dark:text-yellow-300'
      role='alert'
    >
      <InfoIcon className='h-6 w-6 flex-none text-yellow-400' />
      <p>
        <span className='font-medium'>Warning alert!</span> Change a few things
        up and try submitting again.
      </p>
    </aside>
  )
}
export default WarningAlert
