import { ReduxProvider } from '@/redux/provider'
import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/contexts/theme-context'
import { Toast } from '@/components/toast'
import { GeistSans } from 'geist/font'

export const metadata: Metadata = {
  title: 'Admin Reservas',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body
        className={`${GeistSans.className} bg-primary-50 font-sans dark:bg-primary-950`}
      >
        <ReduxProvider>
          <ThemeProvider>
            {children}
            <Toast />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
