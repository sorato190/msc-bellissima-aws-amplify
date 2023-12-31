'use client'
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {

  const [openMenu, setOpenMenu] = useState(false);
  const currPath = usePathname();
  const isActiveLink = (path: string) => {
    return currPath === path ? 'text-indigo-500' : 'text-gray-900';
  };
  const handleMenuOpen = () => { setOpenMenu(!openMenu) }


  return (
    <header className="bg-gray-100 z-50 border-b sticky top-0">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-8">
        {/* <!-- logo - start --> */}
        <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
          <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-6 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M96 0V47L48 94H0V47L48 0H96Z" />
          </svg>
          MSC Bellissima Tour
        </a>
        {/* <!-- logo - end --> */}

        {/* <!-- nav - sm start --> */}
        <button onClick={handleMenuOpen} type="button" className="z-10 ml-32 space-y-2 lg:hidden">
          <div
            className={
              openMenu
                ? "w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 transition duration-500 ease-in-out"
                : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
            }
          />
          <div
            className={
              openMenu
                ? "opacity-0 transition duration-500 ease-in-out"
                : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
            }
          />
          <div
            className={
              openMenu
                ? "w-8 h-0.5 bg-gray-600 -rotate-45 transition duration-500 ease-in-out"
                : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
            }
          />
        </button>
        <nav
          className={
            openMenu
              ? "text-left fixed bg-slate-50 right-0 top-0 w-8/12 h-screen flex flex-col justify-start pt-8 px-3 ease-linear duration-300"
              : "fixed right-[-100%] ease-linear duration-300"
          }
        >
          <ul className="mt-6">
            <li>
              <Link className={`text-lg font-semibold ${isActiveLink('/gallery')} transition duration-100 hover:text-indigo-500 active:text-indigo-700`} href='/gallery'>Gallery</Link>
            </li>
            <li>
              <Link className={`text-lg font-semibold ${isActiveLink('/facility')} transition duration-100 hover:text-indigo-500 active:text-indigo-700`} href='/facility'>Facility</Link>
            </li>
            <li>
              <Link className={`text-lg font-semibold ${isActiveLink('/msc-for-me')} transition duration-100 hover:text-indigo-500 active:text-indigo-700`} href='/msc-for-me'>Aplication</Link>
            </li>
            <li>
              <Link className={`text-lg font-semibold ${isActiveLink('/built-on-aws')} transition duration-100 hover:text-indigo-500 active:text-indigo-700`} href='/built-on-aws'>Built on AWS</Link>
            </li>
          </ul>
        </nav>

        {/* <!-- nav - lg --> */}
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {/* <Link className={`text-lg font-semibold ${isActiveLink('/')} transition duration-100 hover:text-indigo-500 active:text-indigo-700`} href='/'>TOP</Link> */}
          <Link className={`text-lg font-semibold ${isActiveLink('/gallery')} transition duration-100 hover:text-indigo-500 active:text-indigo-700`} href='/gallery'>Gallery</Link>
          <Link className={`text-lg font-semibold ${isActiveLink('/facility')} transition duration-100 hover:text-indigo-500 active:text-indigo-700`} href='/facility'>Facility</Link>
          <Link className={`text-lg font-semibold ${isActiveLink('/msc-for-me')} transition duration-100 hover:text-indigo-500 active:text-indigo-700`} href='/msc-for-me'>Aplication</Link>
          <Link className={`text-lg font-semibold ${isActiveLink('/built-on-aws')} transition duration-100 hover:text-indigo-500 active:text-indigo-700`} href='/built-on-aws'>Built on AWS</Link>
        </nav>
        {/* <!-- nav - end --> */}

        {/* <!-- buttons - start --> */}
        <div className="flex divide-x border-r sm:border-l invisible">
          <a href="#" className="hidden h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:flex sm:h-20 sm:w-20 md:h-24 md:w-24">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>

            <span className="hidden text-xs font-semibold text-gray-500 sm:block">Wishlist</span>
          </a>

          <a href="#" className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>

            <span className="hidden text-xs font-semibold text-gray-500 sm:block">Account</span>
          </a>

          <a href="#" className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>

            <span className="hidden text-xs font-semibold text-gray-500 sm:block">Cart</span>
          </a>

          <button type="button" className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>

            <span className="hidden text-xs font-semibold text-gray-500 sm:block">Menu</span>
          </button>
        </div>
        {/* <!-- buttons - end --> */}
      </div>
    </header>
  )
}