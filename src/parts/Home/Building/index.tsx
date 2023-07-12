import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

import { FadeYAnimation } from '../../../animations/global'
import { Button, ConfessionCard, TitleText } from '../../../components'

import FirstSlideImage from '../../../assets/images/home/building-1.png'
import SecondSlideImage from '../../../assets/images/home/building-2.png'
import ThirdSlideImage from '../../../assets/images/home/building-3.png'

const Building = () => {
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
        <div className="relative py-16 md:py-24 xl:py-[120px]">
          <div className="px-6 lg:px-10 xl:px-0 mx-auto max-w-7xl">
            <div ref={TitleRef} className="text-center max-w-[960px] mx-auto">
              <TitleText>Building the largest community</TitleText>
            </div>

            <div className="mt-8 md:mt-14 xl:mt-16 relative">
              {/* navigation */}
              <div className="hidden absolute w-full h-[353px] xl:h-[440px] lg:flex items-center justify-between">
                {/* prev */}
                <button type="button" className="prev relative z-10 w-[44px] h-[44px] rounded-full flex items-center justify-center -ml-5 bg-white border border-[#EAEDF0] shadow-[0px_4px_20px_rgba(0,_0,_0,_0.06)]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0013 20.6695C14.8113 20.6695 14.6213 20.5995 14.4713 20.4495L7.95125 13.9295C6.89125 12.8695 6.89125 11.1295 7.95125 10.0695L14.4713 3.54953C14.7613 3.25953 15.2413 3.25953 15.5312 3.54953C15.8212 3.83953 15.8212 4.31953 15.5312 4.60953L9.01125 11.1295C8.53125 11.6095 8.53125 12.3895 9.01125 12.8695L15.5312 19.3895C15.8212 19.6795 15.8212 20.1595 15.5312 20.4495C15.3813 20.5895 15.1912 20.6695 15.0013 20.6695Z" fill="#1E2124"/>
                  </svg>
                </button>
                {/* next */}
                <button type="button" className="next relative z-10 w-[44px] h-[44px] rounded-full flex items-center justify-center -mr-5 bg-white border border-[#EAEDF0] shadow-[0px_4px_20px_rgba(0,_0,_0,_0.06)]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.91156 20.6695C8.72156 20.6695 8.53156 20.5995 8.38156 20.4495C8.09156 20.1595 8.09156 19.6795 8.38156 19.3895L14.9016 12.8695C15.3816 12.3895 15.3816 11.6095 14.9016 11.1295L8.38156 4.60953C8.09156 4.31953 8.09156 3.83953 8.38156 3.54953C8.67156 3.25953 9.15156 3.25953 9.44156 3.54953L15.9616 10.0695C16.4716 10.5795 16.7616 11.2695 16.7616 11.9995C16.7616 12.7295 16.4816 13.4195 15.9616 13.9295L9.44156 20.4495C9.29156 20.5895 9.10156 20.6695 8.91156 20.6695Z" fill="#1E2124"/>
                  </svg>
                </button>
              </div>

              {/* swiper */}
              <div className="relative">
                <Swiper
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 16
                    },
                    640: {
                      slidesPerView: 2.2,
                      spaceBetween: 16
                    },
                    768: {
                      slidesPerView: 2.5,
                      spaceBetween: 24
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 24
                    }
                  }}
                  pagination={{ clickable: true }}
                  navigation={{
                    nextEl: '.next',
                    prevEl: '.prev'
                  }}
                  modules={[Pagination, Navigation]}
                  loop={true}
                  speed={500}
                  id="dedicate-swiper"
                  className="pb-8 md:pb-0"
                >
                  <SwiperSlide>
                    <div ref={FirstCardRef}>
                      <ConfessionCard title="Tough part of medical recruitment" description="566x views" image={FirstSlideImage} url="/" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div ref={SecondCardRef}>
                      <ConfessionCard title="With XRecruiter you have the full support Recruiting" description="566x views" image={SecondSlideImage} url="/" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div ref={ThirdCardRef}>
                      <ConfessionCard title="Recruiting for yourself is no different recruiting" description="566x views" image={ThirdSlideImage} url="/" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <div ref={ButtonRef} className="mt-10 flex justify-center">
              <a href="https://www.youtube.com/@xrecruiterAU">
                <Button classNames="!w-full md:!w-auto !py-2.5">See All</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Building
