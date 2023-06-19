import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { TitleText } from '../../../components'
import { useState } from 'react'

import FirstThumbnailImage from '../../../assets/images/home/thumbnail-1.png'
import SecondThumbnailImage from '../../../assets/images/home/thumbnail-2.png'

const PartnerSay = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleSlideChange = (slide: any) => {
    setCurrentIndex(slide.activeIndex)
  }

  const width = window.innerWidth
  const style = width >= 1280 ? '140px' : width >= 1024 ? '40px' : '24px'

  return (
    <>
      <div className="bg-[#FAFBFC] py-16 md:pt-24 md:pb-[93px] xl:pt-[120px] xl:pb-[118px] max-w-[1920px] mx-auto">
        <div className="text-center">
          <TitleText>What do our <br className="block md:hidden" /> partners say?</TitleText>
        </div>

        <div className="mt-12 md:mt-14 xl:mt-16">
          <Swiper
            pagination={{
              clickable: true
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
                spaceBetween: 16
              },
              1024: {
                slidesPerView: 2.2,
                spaceBetween: 21
              },
              1440: {
                slidesPerView: 2.7,
                spaceBetween: 24
              }
            }}
            freeMode={true}
            modules={[FreeMode]}
            onSlideChange={handleSlideChange}
            style={ currentIndex > 0 ? { paddingRight: style } : { paddingLeft: style } }
          >
            <SwiperSlide>
              <div className="w-[310px] sm:w-[420px] xl:w-[470px] h-[170px] sm:h-[218px] xl:h-[245px] bg-gray-300">
                <LazyLoadImage
                  src={FirstThumbnailImage}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[310px] sm:w-[420px] xl:w-[470px] h-[170px] sm:h-[218px] xl:h-[245px] bg-gray-300">
                <LazyLoadImage
                  src={SecondThumbnailImage}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[310px] sm:w-[420px] xl:w-[470px] h-[170px] sm:h-[218px] xl:h-[245px] bg-gray-300">
                <LazyLoadImage
                  src={FirstThumbnailImage}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[310px] sm:w-[420px] xl:w-[470px] h-[170px] sm:h-[218px] xl:h-[245px] bg-gray-300">
                <LazyLoadImage
                  src={SecondThumbnailImage}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default PartnerSay
