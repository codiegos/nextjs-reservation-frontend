'use client'
import { ButtonHTMLAttributes } from 'react'
import { useTheme } from '@/hooks/use-dark-theme'
import { MoonIcon, SunIcon } from './Icons'

export function ThemeButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { theme, toggleTheme } = useTheme()

  return (
    <button {...props} onClick={toggleTheme}>
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}
