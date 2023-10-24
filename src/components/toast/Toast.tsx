'use client'
import { useTheme } from 'next-themes'
import { Toaster } from 'sonner'

function Toast() {
  const { theme } = useTheme()
  return <Toaster richColors theme={theme === 'light' ? 'light' : 'dark'} />
}
export default Toast
