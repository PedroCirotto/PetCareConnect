'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import User from "@/components/common/User"
import { Button } from './ui/button'

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const user = localStorage.getItem('user')
  const token = localStorage.getItem('token')

  return (
    <header className="bg-[#00A651]">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-6">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="imgs/echo (3).svg"
              className="h-28 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-8" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-base  text-white">
            Home
          </a>
          <a href="#" className="text-base  text-white">
            About
          </a>
          <a href="#" className="text-base  text-white">
            Services
          </a>
          <a href="#" className="text-base  text-white">
            Contact
          </a>
        </PopoverGroup>
        {
          user && token ?
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <div className='flex gap-4 flex-row-reverse'>
                <User />
                <Button className="bg-white text-[#00A651]"><a href="/agendar">Agende uma consulta!</a></Button>
              </div>
            </div>
            :
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="/login"
                className="text-sm/6 font-semibold bg-white text-[#00A651] py-2 px-4 rounded-md hover:transform hover:scale-105 transition-all"
              >
                Logar / Cadastrar
              </a>
            </div>

        }

        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/login"
            className="text-sm/6 font-semibold bg-white text-[#00A651] py-2 px-4 rounded-md hover:transform hover:scale-105 transition-all"
          >
            Logar / Cadastrar
          </a>
        </div> */}
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-all">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="imgs/echo (3) copy.svg"
                className="h-24 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-8" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  About
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </a>
              </div>
              <div className="py-6">
                {
                  user && token ? (
                    <div className="flex justify-start">
                        <div className='flex gap-4 flex-row-reverse'>
                        <User />
                        <Button className="bg-[#00A651] text-white"><a href="/agendar">Agende uma consulta!</a></Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-start">
                      <a href="/login" className="text-sm font-semibold bg-[#00A651] text-white py-2 px-4 rounded-md hover:transform hover:scale-105 transition-all">
                        Logar / Cadastrar
                      </a>
                    </div>
                  )
                }

              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
