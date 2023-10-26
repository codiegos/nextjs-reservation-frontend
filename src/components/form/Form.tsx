import { FormHTMLAttributes } from 'react'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
}

function Form({ children, ...props }: FormProps) {
  return (
    <form {...props} className='grid gap-6 sm:w-80 2xl:w-96' autoComplete='off'>
      {children}
    </form>
  )
}

export default Form
