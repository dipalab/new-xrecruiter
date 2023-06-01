import clsx from 'clsx'
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../../assets/logo-white-full.svg'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Our Mission', to: '#', current: true },
  { name: 'Community', to: '/comunity', current: false }
]

const Header = () => {
  return (
    <>
      <Disclosure as="nav" className="bg-[#00081D] relative">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-[1280px] px-6 lg:px-10 xl:px-0 py-5 xl:py-[29px]">
              <div className="relative flex items-center justify-between">
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center">
                    <Link to="/">
                      <img
                        className="block h-8 w-auto"
                        src={Logo}
                        alt="Your Company"
                      />
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-[48px]">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          className={clsx(
                            item.current ? 'text-white' : 'text-white',
                            'rounded-md text-sm font-cera-pro-regular'
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}

                      <Link to={''} className="text-white rounded-md text-sm font-cera-pro-regular">
                        Login
                      </Link>
                      <Link to={''} className="text-white rounded-md text-sm font-cera-pro-regular">
                        Login
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Mobile menu button */}
                <div className="flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    {open
                      ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    }
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={clsx(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  )
}

export default Header
