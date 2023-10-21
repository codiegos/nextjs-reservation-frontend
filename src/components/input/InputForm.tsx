import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  htmlFor: string
  error: string | undefined
  register?: any
}

function InputForm({ label, htmlFor, register, error, ...props }: InputProps) {
  return (
    <div className='grid gap-1.5'>
      <label htmlFor={htmlFor}>{label}:</label>
      <input
        {...register}
        className={`rounded-md p-2.5 pr-4 outline-none ring-1 focus:ring-[1.5px] dark:bg-primary-950/50 ${
          error
            ? 'ring-red-500 focus:ring-red-500'
            : 'ring-primary-900 focus:ring-primary-500'
        }`}
        {...props}
      />
      {<span className='h-3 text-sm text-red-500 2xl:text-base'>{error}</span>}
    </div>
  )
}
export default InputForm
