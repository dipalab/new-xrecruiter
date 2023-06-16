
import { useRef } from 'react'

import { FadeYAnimation } from '../../../animations/global'
import { TitleText } from '../../../components'

const Collaborate = () => {
  const TitleRef = useRef(null)
  const ButtonRef = useRef(null)
  const FirstCardRef = useRef(null)
  const SecondCardRef = useRef(null)
  const ThirdCardRef = useRef(null)

  FadeYAnimation({ animationRef: TitleRef, scrollTriggerRef: TitleRef, initialValue: 100, delayValue: 0, durationValue: 1 })
  FadeYAnimation({ animationRef: ButtonRef, scrollTriggerRef: ButtonRef, initialValue: 100, delayValue: 0.6, durationValue: 1 })
  FadeYAnimation({ animationRef: FirstCardRef, scrollTriggerRef: TitleRef, initialValue: 100, delayValue: 0.2, durationValue: 1 })
  FadeYAnimation({ animationRef: SecondCardRef, scrollTriggerRef: TitleRef, initialValue: 100, delayValue: 0.4, durationValue: 1 })
  FadeYAnimation({ animationRef: ThirdCardRef, scrollTriggerRef: TitleRef, initialValue: 100, delayValue: 0.6, durationValue: 1 })

  return (
    <>
      <div className="relative bg-white">
        <div className="relative py-16 md:py-24 xl:pb-[112px] xl:pt-[120px]">
          <div className="px-6 lg:px-10 xl:px-0 mx-auto max-w-7xl">
            <div className="text-center max-w-[830px] xl:max-w-[980px] mx-auto">
              <TitleText>Collaborate on jobs around the world</TitleText>
              <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="text-base text-neutral-60 font-cera-pro-regular mt-4">Supercharge your agency{"'"}s growth potential by diving into the XR marketplace. Gain access to an exclusive platform where you can scout live job opportunities posted by other recruiters, agree on split fees through a simple smart contract or join forces with other recruiters when submitting a bid for a preferred supplier agreement. XR marketplace allows you to find other like-minded agency owners who can complement your skillset, industry niche and recruitment style so you can start recruiting around the globe.</p>
            </div>

            <div className="mt-4 xl:mt-6 relative">
              {/* line 1 */}
              <div className="grid grid-cols-1">
                <div className="w-1/2 pl-[14px] md:pl-6">
                  <svg className="hidden xl:block" width="570" height="148" viewBox="0 0 570 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M569 0V49.4063C569 62.6611 558.255 73.4062 545 73.4062H25C11.7452 73.4062 1 84.1514 1 97.4062V148" stroke="#CBD2D9"/>
                  </svg>
                  <svg className="hidden sm:block xl:hidden" width="466" height="96" viewBox="0 0 466 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M465 0V23.6149C465 36.8697 454.255 47.6149 441 47.6149H25C11.7452 47.6149 1 58.36 1 71.6149V96" stroke="#CBD2D9"/>
                  </svg>
                  <svg className="sm:hidden" width="153" height="72" viewBox="0 0 153 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M152 0V19.7111C152 28.5477 144.837 35.7111 136 35.7111H17C8.16344 35.7111 1 42.8746 1 51.7111V72" stroke="#CBD2D9"/>
                  </svg>
                </div>
              </div>

              {/* card 1 */}
              <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-2">
                <div className="relative col-span-3 lg:col-span-1 bg-white border border-neutral-80 rounded-[14px] md:rounded-3xl py-5 px-6 shadow-[0px_4px_40px_rgba(0,_0,_0,_0.08)]">
                  <div className="flex items-center justify-between">
                    <p>Business Development Manager - Job #673459</p>
                    <span>Open</span>
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1 hidden md:flex items-center">
                  <p className="text-xs md:text-base lg:text-lg font-cera-pro-regular text-neutral-100">Help others fill vacancies or seek assistance with a difficult role you’ve landed. Discover true collaboration by leveraging the community.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 relative">
                <div className="absolute w-full h-full">
                  {/* line 2 */}
                  <div className="pl-[14px] md:pl-6">
                    <svg className="hidden xl:block" width="266" height="349" viewBox="0 0 266 349" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 0V324C1 337.255 11.7452 348 25 348H266" stroke="#CBD2D9"/>
                    </svg>
                    <svg className="hidden sm:block xl:hidden" width="215" height="349" viewBox="0 0 215 349" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 0V324C1 337.255 11.7452 348 25 348H215" stroke="#CBD2D9"/>
                    </svg>
                    <svg className="sm:hidden" width="25" height="272" viewBox="0 0 25 272" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 0V255C1 263.837 8.16344 271 17 271H25" stroke="#CBD2D9"/>
                    </svg>
                  </div>

                  {/* line 3 */}
                  <div className="absolute bottom-0 xl:-bottom-[65px] right-0 pr-[14px] md:pr-6">
                    <svg className="hidden xl:block" width="267" height="395" viewBox="0 0 267 395" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M266 394.5V281" stroke="#CBD2D9"/>
                      <path d="M0 1H242C255.255 1 266 11.7452 266 25V257" stroke="#CBD2D9"/>
                    </svg>
                    <svg className="hidden sm:block xl:hidden" width="216" height="257" viewBox="0 0 216 257" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 1H191C204.255 1 215 11.7452 215 25V257" stroke="#CBD2D9"/>
                    </svg>
                    <svg className="sm:hidden" width="25" height="203" viewBox="0 0 25 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 1H8C16.8366 1 24 8.16344 24 17V203" stroke="#CBD2D9"/>
                    </svg>
                  </div>
                </div>

                <div className="absolute w-full h-full">
                  <div className="flex items-center md:ml-1.5 mt-24 sm:mt-20 md:mt-6">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-neutral-80 mr-3"></div>
                    <p className="text-xs md:text-sm font-cera-pro-regular">Declan Kluver Submitted Proposal</p>
                  </div>
                  <div className="absolute right-0 md:right-1.5 bottom-8 xl:bottom-10 flex items-center">
                    <p className="text-xs md:text-sm font-cera-pro-regular">Declan Kluver create issued for Discussion</p>
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-neutral-80 ml-3"></div>
                  </div>
                </div>

                {/* card 2 */}
                <div className="pb-24 pt-4 md:py-[104px]">
                  <div className="ml-16 md:ml-0 md:hidden">
                    <p className="text-xs font-cera-pro-regular">Help others fill vacancies or seek assistance with a difficult role you’ve landed. Discover true collaboration by leveraging the community.</p>
                  </div>
                  <div className="relative w-full flex justify-center pt-[88px] md:pt-0">
                    <div className="bg-gray-800 border border-neutral-80 rounded-[14px] md:rounded-3xl py-5 px-6 w-full max-w-[260px] sm:max-w-[375px] md:max-w-[475px] xl:max-w-[580px] h-[236px] md:h-[354px] xl:h-[436px]"></div>
                  </div>
                </div>
              </div>

              {/* card 3 */}
              <div className="relative grid grid-cols-2 md:grid-cols-5 lg:grid-cols-2">
                <div className="col-span-2 lg:col-span-1 order-2 md:order-1 flex items-center mt-6 md:mt-0">
                  <p className="text-xs md:text-base lg:text-lg font-cera-pro-regular text-neutral-100">Help others fill vacancies or seek assistance with a difficult role you’ve landed. Discover true collaboration by leveraging the community.</p>
                </div>
                <div className="col-span-3 lg:col-span-1 order-1 md:order-2 bg-gray-800 border border-neutral-80 rounded-[14px] md:rounded-3xl py-5 px-6 h-[236px] md:h-[354px] xl:h-[436px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Collaborate
