'use client'
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import { Lora, Kenia, Dancing_Script } from '@next/font/google'

const lora = Lora({ subsets: ['latin'] })
const dancing = Dancing_Script({ subsets: ['latin'] })
const kenia = Kenia({ weight: '400', subsets: ['latin'] })

export default function Header() {

  const [openMenu, setOpenMenu] = useState(false);
  const currPath = usePathname();
  const isActiveLink = (path: string) => {
    return currPath === path ? 'text-indigo-500' : 'text-gray-900';
  };
  const handleMenuOpen = () => { setOpenMenu(!openMenu) }


  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-lora: ${lora.style.fontFamily};
            --font-kenia: ${kenia.style.fontFamily};
            --font-dancing: ${dancing.style.fontFamily};
          }
        `}
      </style>
      <header className="z-50 border-b sticky top-0">
        <div className="bg-white bg-opacity-70 lg:mx-auto flex max-w-screen-2xl items-center justify-between">
          {/* <!-- logo - start --> */}
          <div className="bg-gradient-to-r from-blue-300 p-4 md:mr-5">
            <a href="/" className="inline-flex items-center gap-2.5 font-dancing text-xl font-bold text-black md:text-3xl md:ml-10" aria-label="logo">
              MSC Bellissima Tour
            </a>
          </div>
          {/* <!-- logo - end --> */}
          {/* <!-- nav - sm start --> */}
          <div className="lg:hidden">
            <div className="flex justify-end px-5">
              <button onClick={handleMenuOpen} type="button" className="z-10 space-y-2">
                <div
                  className={
                    openMenu
                      ? "w-7 h-0.5 bg-gray-700 translate-y-2.5 rotate-45 transition duration-500 ease-in-out"
                      : "w-7 h-0.5 bg-gray-700 transition duration-500 ease-in-out"
                  }
                />
                <div
                  className={
                    openMenu
                      ? "opacity-0 transition duration-500 ease-in-out"
                      : "w-7 h-0.5 bg-gray-700 transition duration-500 ease-in-out"
                  }
                />
                <div
                  className={
                    openMenu
                      ? "w-7 h-0.5 bg-gray-700 -rotate-45 transition duration-500 ease-in-out"
                      : "w-7 h-0.5 bg-gray-700 transition duration-500 ease-in-out"
                  }
                />
              </button>
            </div>
          </div>


          {/* <!-- nav - lg --> */}
          <nav className="hidden gap-12 lg:flex md:mr-8">
            {/* <Link className={`text-lg font-semibold ${isActiveLink('/')} transition duration-100 hover:text-indigo-500 active:text-indigo-700`} href='/'>TOP</Link> */}
            <Link className={`font-lora text-base font-semibold ${isActiveLink('/gallery')} transition duration-100 hover:text-indigo-500 active:text-indigo-700`} href='/gallery'>Gallery</Link>
            <Link className={`font-lora text-base font-semibold ${isActiveLink('/facility')} transition duration-100 hover:text-indigo-500 active:text-indigo-700`} href='/facility'>Facility</Link>
            <Link className={`font-lora text-base font-semibold ${isActiveLink('/msc-for-me')} transition duration-100 hover:text-indigo-500 active:text-indigo-700`} href='/msc-for-me'>Aplication</Link>
            <Link className={`font-lora text-base font-semibold ${isActiveLink('/built-on-aws')} transition duration-100 hover:text-indigo-500 active:text-indigo-700`} href='/built-on-aws'>Built on AWS</Link>
          </nav>
          {/* <!-- nav - end --> */}
        </div>

        <nav
          className={
            openMenu
              ? "text-left fixed bg-white right-0 top-0 w-3/5 rounded-sm flex flex-col justify-start pt-8 px-3 ease-linear duration-300"
              : "fixed right-[-100%] ease-linear duration-300"
          }
        >
          <ul className="space-y-2 font-base">
            <li>
              <a href='/gallery' className={`${isActiveLink('/gallery')} flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-100 group`}>
                <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                </svg>
                <span className="ms-3">Gallery</span>
              </a>
            </li>
            <li>
              <a href='/facility' className={`${isActiveLink('/facility')} flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-100 group`}>
                <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                </svg>
                <span className="ms-3">Facility</span>
              </a>
            </li>
            <li>
              <a href='/msc-for-me' className={`${isActiveLink('/msc-for-me')} flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-100 group`}>
                <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                </svg>
                <span className="ms-3">MSC For Me</span>
              </a>
            </li>
            <li>
              <a href='/built-on-aws' className={`${isActiveLink('/built-on-aws')} flex items-center p-2 text-gray-900 rounded-lg hover:bg-blue-100 group`}>
                <svg className="w-5 h-5 text-gray-800e" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                </svg>
                <span className="ms-3">Built on AWS</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}