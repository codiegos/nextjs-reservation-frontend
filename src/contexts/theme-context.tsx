'use client'
import { ThemeProvider as TP } from 'next-themes'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <TP attribute='class'>{children}</TP>
}
