'use client'
import { useState } from 'react'
import { MenuIcon, UserIcon, XIcon } from './Icons'
import Link from 'next/link'
import { navItems } from '@/constants/data'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <aside
        className={`fixed h-full w-fit transform bg-pink-900 text-white transition-transform duration-300 dark:bg-pink-950 lg:static ${
          !isOpen ? '-translate-x-full lg:translate-x-0' : 'translate-x-0'
        }`}
      >
        <div className='flex h-1/4 flex-col items-center justify-center gap-5'>
          <div className='overflow-hidden rounded-full border-[2px] bg-pink-200'>
            <UserIcon className='h-32 w-32 translate-y-1 object-contain text-black' />
          </div>
          <span className='rounded-full bg-pink-600 p-2 px-4 text-sm dark:bg-pink-800'>
            ADMINISTRADOR
          </span>
        </div>
        <nav className='flex h-3/4 flex-col justify-between rounded-tr-[100px] bg-pink-600 p-8 dark:bg-pink-800'>
          <ul className='flex h-full flex-col gap-6'>
            {navItems.map(({ href, name, icon: Icon }) => (
              <li key={name} className='last:mt-auto'>
                <Link
                  href={href}
                  className='mx-4 flex transform items-center gap-4 whitespace-nowrap rounded-md p-2 duration-200 hover:bg-pink-700 dark:hover:bg-pink-900'
                >
                  <Icon /> {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <button
        className='fixed bottom-2 right-2 rounded-full bg-pink-700 p-2 text-white lg:hidden'
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

export default Navbar
