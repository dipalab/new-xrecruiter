import { useRef } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import { FadeYAnimation, FadeXAnimation } from '../../../animations/global'
import DashboardImage from '../../../assets/images/home/dashboard-2.svg'

const Pioneer = () => {
  const ImageRef = useRef(null)
  const TitleRef = useRef(null)
  const DescriptionRef = useRef(null)

  FadeXAnimation({ animationRef: ImageRef, scrollTriggerRef: ImageRef, initialValue: -500, delayValue: 1, durationValue: 1.5 })
  FadeYAnimation({ animationRef: TitleRef, scrollTriggerRef: TitleRef, initialValue: 90, delayValue: 0, durationValue: 0.8 })
  FadeYAnimation({ animationRef: DescriptionRef, scrollTriggerRef: DescriptionRef, initialValue: 90, delayValue: 0.5, durationValue: 0.8 })

  return (
    <>
      <div className="relative grid grid-cols-1 md:block py-[64px] md:py-0 2xl:w-full 2xl:mx-auto 2xl:max-w-[1920px]">
        <div className="relative z-10 md:absolute w-full h-full flex justify-start items-center order-2 md:order-none">
          <div ref={ImageRef} className="w-full h-full">
            <LazyLoadImage
              src={DashboardImage}
              className="scale-[1.07] md:scale-100 md:absolute md:-left-28 xl:left-0 object-cover w-full md:w-[65%] lg:w-[57%] xl:w-1/2 h-[300px] sm:h-full"
              alt=""
            />
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl md:grid md:grid-cols-12 md:py-[88px] lg:py-[128px] xl:py-[183px] mb-12 md:mb-0">
          <div className="px-6 lg:px-10 xl:px-0 md:col-span-5 lg:col-span-4 xl:col-span-6"></div>
          <div className="px-6 lg:px-10 xl:px-0 md:col-span-7 lg:col-span-8 xl:col-span-6">
            <div className="mx-auto lg:mx-0 lg:pl-32 xl:pl-10">
              <p ref={TitleRef} className="max-w-[505px] xl:max-w-[540px] text-2xl lg:text-[40px] leading-[36px] lg:leading-[56px] font-cera-pro-medium text-neutral-100">Pioneering an industry first approach to the future of recruitment</p>
              <div ref={DescriptionRef} className="max-w-[350px] lg:max-w-[435px] xl:max-w-[530px] font-cera-pro-regular">
                <p className="mt-4 md:mt-6 text-base text-neutral-60">xrecruiter is uniting the recruitment industry like never before. By bringing together micro agencies from around the world, we{"'"}re creating a new future where recruiters have unprecedented access to resources, technology, branding and a community that collaborate and co-operate.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pioneer
