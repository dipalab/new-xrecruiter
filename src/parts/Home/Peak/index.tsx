import { useRef } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import { TitleText } from '../../../components'
import { FadeXAnimation } from '../../../animations/global'
import RSCAImage from '../../../assets/images/home/rcsa.png'
import RSCAMobileImage from '../../../assets/images/home/rcsa-mobile.png'

const Peak = () => {
  const ImageRef = useRef(null)

  FadeXAnimation({ animationRef: ImageRef, scrollTriggerRef: ImageRef, initialValue: -500, delayValue: 0.5, durationValue: 1.5 })

  return (
    <>
      <div className="bg-white py-16 md:pt-[104px] md:pb-24 xl:py-[120px]">
        <div className="px-6 lg:px-10 xl:px-0 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-9 mt-4">
            <div className="w-full flex justify-start">
              <div ref={ImageRef} className="max-w-[460px] xl:max-w-[512px]">
                <LazyLoadImage
                  src={RSCAImage}
                  className="w-full h-full hidden md:block"
                  alt=""
                />
                <LazyLoadImage
                  src={RSCAMobileImage}
                  className="w-full h-full block md:hidden"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <TitleText classNames="!text-left">Peak body for the recruitment, staffing and workforce industry</TitleText>
              <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="mt-6 text-base text-neutral-60 font-cera-pro-regular md:pr-2 xl:pr-0">At xrecruiter, compliance is a top priority for us. We maintain a close working relationship with industry bodies to ensure that our network of recruiters upholds the highest standards of integrity and adheres to best practices. By keeping up-to-date with the ever-evolving landscape of our industry, we equip our recruiters with the necessary expertise and guidance to thrive. Rest assured that with xrecruiter, you can expect nothing but excellence.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Peak
