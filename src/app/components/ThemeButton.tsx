'use client'
import Image from 'next/image'
import {useTheme} from '../hooks/use-dark-theme'

export function ThemeButton() {
  const {theme, toggleTheme} = useTheme()

  return (
    <button
      className=''
      onClick={toggleTheme}
    >
      {theme === 'light' ? (
        <Image
          src='/icons/moon.svg'
          width={24}
          height={24}
          alt='moon'
        />
      ) : (
        <Image
          src='/icons/light.svg'
          width={24}
          height={24}
          alt='light'
        />
      )}
    </button>
  )
}
