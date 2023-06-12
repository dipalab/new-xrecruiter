import { useRef } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import { FadeXAnimation } from '../../../animations/global'
import VisionImage from '../../../assets/images/our-mission/vision.png'

const Vision = () => {
  const ImageRef = useRef(null)
  const TitleRef = useRef(null)

  FadeXAnimation({ animationRef: ImageRef, scrollTriggerRef: ImageRef, initialValue: -500, delayValue: 0.5, durationValue: 1.5 })
  FadeXAnimation({ animationRef: TitleRef, scrollTriggerRef: TitleRef, initialValue: 500, delayValue: 0.5, durationValue: 1.5 })

  return (
    <>
      <div className="bg-white py-16 md:py-24 xl:py-[120px]">
        <div className="px-6 lg:px-10 xl:px-0 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-0">
            <div className="w-full flex justify-start">
              <div ref={ImageRef} className="w-full h-[418px] md:h-[485px] xl:h-[600px] md:max-w-[380px] xl:max-w-[470px]">
                <LazyLoadImage
                  src={VisionImage}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col justify-center md:-ml-3.5 xl:-ml-0">
              <p ref={TitleRef} className="text-[32px] leading-[40px] text-neutral-100 font-cera-pro-medium">We believe that hard work should pay off and it’s our vision to build a future where the next generation of recruiters can connect, grow and succeed, on their own terms.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Vision
