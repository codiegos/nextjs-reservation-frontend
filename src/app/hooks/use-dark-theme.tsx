import {useEffect, useState} from 'react'

export function useTheme() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    setTheme(() => {
      if (typeof window !== 'undefined') {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return 'dark'
        }
      }
      return 'light'
    })
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      return document.querySelector('html')?.classList.add('dark')
    }

    document.querySelector('html')?.classList.remove('dark')
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return {theme, toggleTheme}
}
