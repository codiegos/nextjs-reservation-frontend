import React from 'react'

interface OutlineButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

function OutlineButton({
  className,
  children,
  ...props
}: OutlineButtonProps): JSX.Element {
  return (
    <button
      className={`rounded-md border border-gray-300 bg-gray-300/10 p-2.5 px-4 duration-150 hover:bg-gray-500/20 dark:border-gray-700 dark:bg-gray-700/40 dark:hover:bg-gray-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
export default OutlineButton
