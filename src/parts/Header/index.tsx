import clsx from 'clsx'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'
import { Button, Logo } from '../../components'
import { type IHeader } from '../../interfaces/IHeader'
import HeaderTheme from '../../utils/constants/variable/HeaderTheme'
import NavigationList from '../../utils/constants/data/NavigationList'

const Header = ({ headerTheme }: IHeader) => {
  const currentLocation = useLocation().pathname

  const navigationStyle = (path: string) => {
    let classes = ''
    if (path === currentLocation && headerTheme === HeaderTheme.DARK) {
      classes += 'font-cera-pro-medium text-white'
    } else if (path !== currentLocation && headerTheme === HeaderTheme.DARK) {
      classes += 'font-cera-pro-regular text-white'
    } else if (path === currentLocation && headerTheme === HeaderTheme.LIGHT) {
      classes += 'font-cera-pro-medium text-blue-primary-main'
    } else if (path !== currentLocation && headerTheme === HeaderTheme.LIGHT) {
      classes += 'font-cera-pro-regular text-neutral-100'
    }

    return classes
  }

  return (
    <>
      <Disclosure as="nav" className="w-full h-[64px] md:h-20 xl:h-[90px] absolute top-0 z-10 bg-transparent">
        {({ open }) => (
          <>
            <div className="relative w-full h-full">
              <div className="mx-auto max-w-[1280px] h-full px-6 lg:px-10 xl:px-0 flex items-center w-full">
                <div className="relative w-full flex items-center justify-between">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center">
                      <Link to="/" className="block h-8 w-auto">
                        <Logo headerTheme={headerTheme} />
                      </Link>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex items-center space-x-[48px]">
                        {NavigationList.map((item) => (
                          <Link
                            key={item.name}
                            to={item.to}
                            className={clsx(
                              navigationStyle(item.to),
                              'rounded-md text-sm'
                            )}
                          >
                            {item.name}
                          </Link>
                        ))}

                        <Link to={''}>
                          <Button classNames="!px-6 !py-[13px] !text-sm !leading-5 md:!text-sm md:!leading-5 !font-cera-pro-medium">Apply Now</Button>
                        </Link>
                        <Link to={''} className={clsx(
                          headerTheme === HeaderTheme.DARK ? 'text-white' : 'text-neutral-100',
                          'text-sm font-cera-pro-regular'
                        )}>
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
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {NavigationList.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={clsx(
                      item.to === currentLocation ? 'font-cera-pro-medium' : 'font-cera-pro-regular',
                      'block rounded-md px-3 py-2 text-base text-gray-800'
                    )}
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
