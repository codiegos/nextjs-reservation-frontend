'use client'
import { ButtonHTMLAttributes, useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '../icons'

function ThemeButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { theme, setTheme } = useTheme()

  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(true)
  }, [setLoaded])

  const handleClickTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <button {...props} onClick={handleClickTheme}>
        {loaded && (theme === 'light' ? <MoonIcon /> : <SunIcon />)}
      </button>
    </>
  )
}

export default ThemeButton
