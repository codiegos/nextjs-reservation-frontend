'use client'
import { useState } from 'react'
import { MenuIcon, UserIcon, XIcon } from '../icons'
import Link from 'next/link'
import { navItems } from '@/constants/data'
import { usePathname } from 'next/navigation'

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <aside
        className={`fixed h-full transform bg-primary text-white transition-transform duration-200 lg:static lg:col-span-3 2xl:col-span-2 ${
          !isOpen ? '-translate-x-full lg:translate-x-0' : 'translate-x-0'
        }`}
      >
        <div className='flex h-[31%] flex-col items-center justify-center gap-5'>
          <picture className='overflow-hidden rounded-full border-[2px] bg-secondary'>
            <UserIcon className='h-24 w-24 translate-y-1 object-contain' />
          </picture>
          <span className='bg-tertiary rounded-full p-2.5 px-4 text-sm'>
            Administrador
          </span>
        </div>
        <nav className='flex h-[69%] flex-col justify-between rounded-tr-[100px] bg-secondary p-8'>
          <ul className='flex h-full flex-col gap-6'>
            {navItems.map(({ href, name, icon: Icon }) => (
              <li key={name} className='last:mt-auto'>
                <Link
                  href={href}
                  className={`mx-4 flex transform items-center gap-4 whitespace-nowrap rounded-md p-2 duration-200 hover:bg-primary/40 ${
                    pathname === href && 'bg-primary/50'
                  }`}
                >
                  <Icon className='flex-none' />
                  <span className='capitalize'>{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <button
        className='fixed bottom-2 right-2 rounded-full bg-tertiary p-2 text-white lg:hidden'
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <XIcon className='h-8 w-8' />
        ) : (
          <MenuIcon className='h-8 w-8' />
        )}
      </button>
    </>
  )
}
