import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import SetUpImage from '../../../assets/images/home/recruit/setup.svg'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Recruit = () => {
  return (
    <>
      <div className="overflow-hidden bg-white py-24 lg:py-[120px]">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8 xl:px-0">
          <div className="px-6 lg:px-0">
            <div className="text-center">
              <p className="text-[40px] leading-[56px] font-cera-pro-medium tracking-wider text-neutral-100">You recruit, we take care of the rest</p>
              <div>
                <nav className="flex justify-center space-x-2 mt-16">
                  <a href="#" className="bg-[#FF47A7] text-white rounded-full px-8 py-3 text-sm font-cera-pro-medium">Set Up</a>
                  <a href="#" className="text-neutral-60 rounded-full px-8 py-3 text-sm font-cera-pro-medium">Branding</a>
                  <a href="#" className="text-neutral-60 rounded-full px-8 py-3 text-sm font-cera-pro-medium">Technology</a>
                  <a href="#" className="text-neutral-60 rounded-full px-8 py-3 text-sm font-cera-pro-medium">Resources</a>
                  <a href="#" className="text-neutral-60 rounded-full px-8 py-3 text-sm font-cera-pro-medium">Admin</a>
                </nav>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start mt-[72px]">
            <div className="px-6 lg:px-0">
              <div className="">
                <p className="text-[40px] leading-[56px] font-cera-pro-medium tracking-wider text-neutral-100">Set up</p>
                <p className="mt-6 text-base font-cera-pro-regular text-neutral-100">The start of the process – We hold your hand and walk you through how to set your agency up, what structure and processes need to be in place to ensure a smooth launch</p>
                <ul className="mt-6">
                  <li className="flex items-center space-x-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#02AB91]" />
                    <span className="text-base font-cera-pro-medium text-neutral-100">Business Registration</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sm:px-6 lg:px-0 w-full h-full flex justify-end">
              <LazyLoadImage
                src={SetUpImage}
                effect="blur"
                className="w-[515px] h-[435px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Recruit
