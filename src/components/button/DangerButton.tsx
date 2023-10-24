import React from 'react'

interface DangerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

function DangerButton({
  className,
  children,
  ...props
}: DangerButtonProps): JSX.Element {
  return (
    <button
      className={`rounded-md bg-red-600 p-2.5 px-4 text-white duration-150 hover:bg-red-500 dark:bg-red-700 dark:hover:bg-red-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
export default DangerButton
