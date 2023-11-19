import { Sidebar } from '@/components/sidebar'
import { ThemeButton } from '@/components/button'
import { ModalProvider } from '@/contexts/modal-context'
interface DashboardLayoutProps {
  children: React.ReactNode
}
function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <ModalProvider>
      <div className='grid lg:grid-cols-12'>
        <Sidebar />
        <main className='m-8 rounded-3xl bg-white px-8 shadow dark:bg-slate-900 dark:shadow-slate-800 lg:col-span-9 2xl:col-span-10'>
          <span className='flex justify-end py-8 pb-16 lg:-mr-4'>
            <ThemeButton className='fixed rounded-md p-2 duration-200 hover:bg-primary-50 dark:hover:bg-primary-900' />
          </span>
          {children}
        </main>
      </div>
    </ModalProvider>
  )
}
export default DashboardLayout
