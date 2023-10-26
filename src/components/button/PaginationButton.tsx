interface ButtonProps {
  content: React.ReactNode
  onClick: () => void
  active?: boolean
  disabled?: boolean
}

export default function PaginationButton({
  content,
  onClick,
  active,
  disabled,
}: ButtonProps) {
  return (
    <button
      className={`flex h-9 w-9 cursor-pointer flex-col items-center justify-center rounded-full text-sm font-normal shadow-[0_4px_10px_rgba(0,0,0,0.03)] transition-colors
      ${
        active
          ? 'bg-primary-500 text-white hover:bg-primary-500'
          : 'text-primary-500  dark:text-white'
      }
      ${
        !disabled
          ? ' hover:bg-primary-50 dark:hover:bg-primary-500/50'
          : 'cursor-no-drop text-primary-300'
      }
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  )
}
