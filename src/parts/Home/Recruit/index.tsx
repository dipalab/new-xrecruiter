import clsx from 'clsx'
import { useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import RecruitList from '../../../utils/constants/data/RecruitList'
import RecruitTabName from '../../../utils/constants/variable/RecruitTabName'
import { TitleText } from '../../../components'

const Recruit = () => {
  const [openTab, setOpenTab] = useState(RecruitTabName.SETUP)

  return (
    <>
      <div className="overflow-hidden bg-white py-24 lg:py-[120px]">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8 xl:px-0">
          <div className="px-6 lg:px-0">
            <div className="text-center">
              <TitleText>You recruit, we take care of the rest</TitleText>
              <nav className="flex justify-center space-x-2 mt-16">
                <button
                  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"
                  type="button"
                  onClick={() => { setOpenTab(RecruitTabName.SETUP) }}
                  className={clsx(
                    openTab === RecruitTabName.SETUP ? 'bg-[#FF47A7] text-white' : 'bg-white text-neutral-60 hover:text-neutral-80',
                    'rounded-full px-8 py-3 text-sm font-cera-pro-medium'
                  )}
                >Set Up
                </button>
                <button
                  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"
                  type="button"
                  onClick={() => { setOpenTab(RecruitTabName.BRANDING) }}
                  className={clsx(
                    openTab === RecruitTabName.BRANDING ? 'bg-[#1C5BFC] text-white' : 'bg-white text-neutral-60 hover:text-neutral-80',
                    'rounded-full px-8 py-3 text-sm font-cera-pro-medium'
                  )}
                >Branding
                </button>
                <button
                  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400"
                  type="button"
                  onClick={() => { setOpenTab(RecruitTabName.TECHNOLOGY) }}
                  className={clsx(
                    openTab === RecruitTabName.TECHNOLOGY ? 'bg-[#8738FF] text-white' : 'bg-white text-neutral-60 hover:text-neutral-80',
                    'rounded-full px-8 py-3 text-sm font-cera-pro-medium'
                  )}
                >Technology
                </button>
                <button
                  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"
                  type="button"
                  onClick={() => { setOpenTab(RecruitTabName.RESOURCES) }}
                  className={clsx(
                    openTab === RecruitTabName.RESOURCES ? 'bg-[#FF9A5C] text-white' : 'bg-white text-neutral-60 hover:text-neutral-80',
                    'rounded-full px-8 py-3 text-sm font-cera-pro-medium'
                  )}
                >Resources
                </button>
                <button
                  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600"
                  type="button"
                  onClick={() => { setOpenTab(RecruitTabName.ADMIN) }}
                  className={clsx(
                    openTab === RecruitTabName.ADMIN ? 'bg-[#00A38C] text-white' : 'bg-white text-neutral-60 hover:text-neutral-80',
                    'rounded-full px-8 py-3 text-sm font-cera-pro-medium'
                  )}
                >Admin
                </button>
              </nav>
            </div>
          </div>

          {RecruitList.map((item) => (
            item.id === openTab &&
              <div key={item.id} className="grid grid-cols-1 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start mt-[72px]">
                <div className="px-6 lg:px-0 xl:pl-10 max-w-[533px]">
                  <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" className="text-[40px] leading-[56px] font-cera-pro-medium tracking-wider text-neutral-100">{ item.title }</p>
                  <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="mt-6 text-base font-cera-pro-regular text-neutral-100">{ item.description }</p>
                  <ul className="mt-6 space-y-5">
                    {item.features.map((feature) => (
                      <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" key={feature} className="flex items-center space-x-3">
                        <CheckCircleIcon className="w-6 h-6 text-[#02AB91]" />
                        <span className="text-base font-cera-pro-medium text-neutral-100">{ feature }</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600" className="sm:px-6 lg:px-0 w-full h-full flex justify-end">
                  <LazyLoadImage
                    src={item.image_url}
                    effect="blur"
                    className="w-[515px] h-[435px]"
                    alt=""
                  />
                </div>
              </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Recruit
