'use client'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
<<<<<<< HEAD
  { name: 'Products', href: 'products' },
  { name: 'Features', href: '/' },
  { name: 'Marketplace', href: '/' },
  { name: 'Admin', href: '/admin' },
]

=======
    { name: "Products", href: "products" },
    { name: "Features", href: "/" },
    { name: "Services", href: "/" },
    { name: "Admin", href: "/admin" },
  ];
  
>>>>>>> 1c5e735fe8cb84c6450d3f2bbcbf8ef5bfcc9375
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <section className="p-4 shadow md:px-6 md:py-4 bg-gray-900">
        <div className="container px-6 m-auto">
          <nav className="flex items-center justify-between" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="/">
                <img
                  className="h-8"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item, id) => (
                <a
                  key={id}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-100 keychainify-checked"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-100 keychainify-checked"
              >
                Log in
              </a>
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto p-4 shadow bg-gray-900 md:px-6 md:py-8 lg:hidden">
              <div className="flex items-center justify-between">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-400/10 keychainify-checked"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-100 hover:bg-gray-400/10 keychainify-checked"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </section>
    </>
  )
}
