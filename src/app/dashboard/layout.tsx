import Navbar from '@/components/Navbar'
import { ThemeButton } from '@/components/ThemeButton'
interface DashboardLayoutProps {
  children: React.ReactNode
}
function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className='grid min-h-screen lg:grid-cols-4 xl:grid-cols-6'>
      <Navbar />
      <main className='h-[100vh] p-16 lg:col-span-3 lg:px-20 xl:col-span-5'>
        {children}
      </main>
      <ThemeButton className='fixed right-4 top-[3.8rem] rounded-md p-2 duration-200 hover:bg-pink-200 dark:hover:bg-pink-800 lg:right-12' />
    </div>
  )
}
export default DashboardLayout
