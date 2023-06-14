import clsx from 'clsx'
import { useRef, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import { TitleText } from '../../../components'
import { FadeYAnimation } from '../../../animations/global'
import { TestimoniList, TestimoniTabList } from '../../../utils/constants/data/TestimoniList'
import TestimoniTabName from '../../../utils/constants/variable/TestimoniTabName'

const Testimonial = () => {
  const CardRef = useRef(null)
  const FirstCardRef = useRef(null)
  const SecondCardRef = useRef(null)
  const ThirdCardRef = useRef(null)

  const [openTab, setOpenTab] = useState(TestimoniTabName.INDUSTRY_TALENT)

  FadeYAnimation({ animationRef: FirstCardRef, scrollTriggerRef: CardRef, initialValue: -90, delayValue: 0, durationValue: 0.8, animateTrigger: openTab })
  FadeYAnimation({ animationRef: SecondCardRef, scrollTriggerRef: CardRef, initialValue: -70, delayValue: 0.3, durationValue: 0.8, animateTrigger: openTab })
  FadeYAnimation({ animationRef: ThirdCardRef, scrollTriggerRef: CardRef, initialValue: -70, delayValue: 0.6, durationValue: 0.8, animateTrigger: openTab })

  return (
    <>
      <div className="bg-[#8738FF] h-[892px]">
        <div className="relative py-16 md:py-24 xl:pb-12 xl:pt-[120px] h-full mx-auto max-w-7xl">
          <div className="relative h-full">
            {/* tabs */}
            <div className="absolute z-10 bottom-0 w-full">
              <div className="flex justify-center">
                <div className="w-[327px] md:w-[290px] xl:w-[400px] border-b-2 border-[#FFFFFF33]">
                  <nav className="-mb-px flex justify-between space-x-8">
                    {TestimoniTabList.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => { setOpenTab(item.id) }}
                        type="button"
                        className={clsx(
                          item.id === openTab ? 'border-white-500' : 'border-transparent',
                          'border-b-2 pb-3'
                        )}
                      >
                        <div className="h-6 xl:h-8">
                          <LazyLoadImage
                            src={item.brand}
                            className="w-full h-full"
                            alt=""
                          />
                        </div>
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            <div className="px-6 lg:px-10 xl:px-0">
              {/* title */}
              <div className="text-center">
                <TitleText classNames="!text-white">Testimonial</TitleText>
              </div>

              {/* card */}
              <div className="relative mt-12 md:mt-14 xl:mt-16">
                {TestimoniList.map((item) => (
                  <div key={item.id}>
                    {openTab === item.id &&
                      <div ref={CardRef} className="relative w-full h-full max-w-[622px] xl:max-w-[766px] mx-auto">
                        <div ref={ThirdCardRef} className="absolute -bottom-[33px] xl:-bottom-12 w-full h-[400px] flex justify-center px-8 md:px-16 xl:px-[72px]">
                          <div className="w-full h-full p-6 md:p-8 xl:p-10 rounded-[24px] bg-white"></div>
                        </div>

                        <div ref={SecondCardRef} className="absolute -bottom-[17px] xl:-bottom-6 w-full h-[400px] flex justify-center px-4 md:px-8 xl:px-10">
                          <div className="w-full h-full p-6 md:p-8 xl:p-10 rounded-[24px] bg-white shadow-[0px_4px_40px_rgba(0,_0,_0,_0.12)]"></div>
                        </div>

                        <div ref={FirstCardRef} className="relative p-6 md:p-8 xl:p-10 w-full bg-white rounded-[32px] xl:rounded-[40px] shadow-[0px_4px_40px_rgba(0,_0,_0,_0.12)]">
                          <svg width="42" height="32" viewBox="0 0 42 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.937 0L10.262 14.2689C12.66 14.4087 14.6348 15.353 16.1864 17.1016C17.8086 18.7803 18.6196 20.8087 18.6196 23.1869C18.6196 25.7049 17.738 27.8033 15.9748 29.482C14.2116 31.1607 12.0252 32 9.41562 32C6.80605 32 4.58438 31.1607 2.75063 29.482C0.916876 27.8033 0 25.5301 0 22.6623C0 21.1235 0.387909 19.4098 1.16373 17.5213C1.93955 15.6328 3.1738 13.3945 4.8665 10.8066C6.62972 8.14863 8.88665 4.93115 11.6373 1.1541L12.3778 0H18.937ZM42 0L33.2191 14.2689C35.6877 14.4087 37.6977 15.353 39.2494 17.1016C40.801 18.7803 41.5768 20.8087 41.5768 23.1869C41.5768 25.7049 40.6952 27.8033 38.932 29.482C37.2393 31.1607 35.0882 32 32.4786 32C29.7985 32 27.5416 31.1607 25.7078 29.482C23.9446 27.8033 23.063 25.5301 23.063 22.6623C23.063 21.1235 23.4509 19.4098 24.2267 17.5213C25.0025 15.6328 26.2368 13.3945 27.9295 10.8066C29.6222 8.14863 31.8438 4.93115 34.5945 1.1541L35.4408 0H42Z" fill="#1C5BFC"/>
                          </svg>

                          <div className="my-8 xl:my-10">
                            <p className="font-cera-pro-bold text-2xl xl:text-[32px] xl:leading-[40px] text-neutral-100">{ item.title }</p>
                            <p className="mt-4 font-cera-pro-regular text-sm xl:text-base text-neutral-60" dangerouslySetInnerHTML={{ __html: item.body }}></p>
                          </div>

                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between mt-2 sm:mt-0">
                            <div className="flex space-x-3 xl:space-x-4 items-center">
                              <div className="w-14 md:w-[45px] xl:w-14 h-14 md:h-[45px] xl:h-14 rounded-full">
                                <LazyLoadImage
                                  src={item.author_ava}
                                  className="w-full h-full"
                                  alt=""
                                />
                              </div>
                              <div>
                                <p className="font-cera-pro-medium text-sm xl:text-base text-neutral-100">{ item.author_name }</p>
                                <p className="mt-1 font-cera-pro-regular text-xs xl:text-sm text-neutral-60">{ item.author_position }</p>
                              </div>
                            </div>
                            <div className="h-6 md:h-8 xl:h-10 mt-6 sm:mt-0">
                              <LazyLoadImage
                                src={item.brand}
                                className="w-full h-full"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial
