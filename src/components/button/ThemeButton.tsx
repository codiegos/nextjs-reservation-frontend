'use client'
import { ButtonHTMLAttributes, useState, useEffect } from 'react'
import { useTheme } from '@/hooks/use-dark-theme'
import { MoonIcon, SunIcon } from '../icons'

function ThemeButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { theme, toggleTheme } = useTheme()

  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(true)
  }, [setLoaded])

  return (
    <button {...props} onClick={toggleTheme}>
      {loaded && (theme === 'light' ? <MoonIcon /> : <SunIcon />)}
    </button>
  )
}

export default ThemeButton
