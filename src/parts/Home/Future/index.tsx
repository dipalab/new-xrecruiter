import { useRef } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import { FadeUpAnimation, FadeXAnimation } from '../../../animations/global'
import DashboardImage from '../../../assets/images/home/dashboard-1.svg'

const Future = () => {
  const ImageRef = useRef(null)
  const TitleRef = useRef(null)
  const DescriptionRef = useRef(null)

  FadeXAnimation({ animationRef: ImageRef, scrollTriggerRef: ImageRef, initialValue: 500, delayValue: 1, durationValue: 1.5 })
  FadeUpAnimation({ animationRef: TitleRef, scrollTriggerRef: TitleRef, initialValue: 90, delayValue: 0, durationValue: 0.8 })
  FadeUpAnimation({ animationRef: DescriptionRef, scrollTriggerRef: DescriptionRef, initialValue: 90, delayValue: 0.5, durationValue: 0.8 })

  return (
    <>
      <div className="relative grid grid-cols-1 md:block py-[64px] md:py-0 2xl:w-full 2xl:mx-auto 2xl:max-w-[1920px]">
        <div className="relative md:absolute w-full h-full flex justify-end items-center order-2 md:order-none">
          <div ref={ImageRef} className="w-full h-full">
            <LazyLoadImage
              src={DashboardImage}
              className="scale-[1.07] md:scale-100 md:absolute md:-right-24 xl:right-0 object-cover w-full md:w-[65%] lg:w-[57%] xl:w-1/2 h-[300px] sm:h-full"
              alt=""
            />
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl md:grid md:grid-cols-12 md:py-[88px] lg:py-[128px] xl:py-[183px] mb-12 md:mb-0">
          <div className="px-6 lg:px-10 xl:px-0 md:col-span-7 lg:col-span-8 xl:col-span-6">
            <div className="mx-auto lg:mx-0">
              <p ref={TitleRef} className="max-w-[505px] xl:max-w-[540px] text-2xl lg:text-[40px] leading-[36px] lg:leading-[56px] font-cera-pro-medium text-neutral-100">The future of recruitment is becoming decentralised, Independant and Co-Op.</p>
              <div ref={DescriptionRef} className="max-w-[350px] lg:max-w-[490px] xl:max-w-[540px] font-cera-pro-regular">
                <p className="mt-4 md:mt-6 text-base text-neutral-60">xrecruiter is more than just a platform - it{"'"}s a community. With our unique approach to agency ownership, you{"'"}ll have the freedom to build your own brand while benefiting from the support and collaboration of like-minded professionals.</p>
                <p className="mt-4 md:mt-6 text-base text-neutral-60">Work independently, scale your empire, or join forces with the community on exciting new projects, xrecruiter gives you the freedom and flexibility to pursue your dreams on your own terms.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Future
