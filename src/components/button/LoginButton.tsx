import { LogInIcon } from '../icons'

interface LoginButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

function LoginButton({
  className,
  children,
  ...props
}: LoginButtonProps): JSX.Element {
  return (
    <button className='group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-primary-500/20 bg-white p-4 px-6 py-3 font-medium text-primary-600 shadow-md transition duration-200 ease-out'>
      <span className='ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-primary-500 text-white duration-200 group-hover:translate-x-0'>
        <LogInIcon className='h-8 w-8' />
      </span>
      <span className='ease absolute flex h-full w-full transform items-center justify-center text-primary-500 transition-all duration-300 group-hover:translate-x-full'>
        {children}
      </span>
      <span className='invisible relative'>Button Text</span>
    </button>
  )
}
export default LoginButton
