import React from 'react'

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

function PrimaryButton({
  className,
  children,
  ...props
}: PrimaryButtonProps): JSX.Element {
  return (
    <button
      className={`rounded-md border border-primary-700 p-2.5 px-4 duration-150 hover:bg-primary-500 hover:text-white dark:bg-primary-500 dark:text-white dark:hover:bg-primary-900 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
export default PrimaryButton
