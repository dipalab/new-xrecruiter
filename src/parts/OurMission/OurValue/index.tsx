import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { FadeYAnimation } from '../../../animations/global'
import { OurValueCard, TitleText } from '../../../components'
import { BetterTogether, Freedom, KeepSimple, Supportive, Think, Trust } from './Icon'
import BlakeImage from '../../../assets/images/our-mission/blake.png'

const OurValue = () => {
  gsap.registerPlugin(ScrollTrigger)
  const ImageRef = useRef(null)
  const TitleRef = useRef(null)
  const DescriptionRef = useRef(null)

  FadeYAnimation({ animationRef: TitleRef, scrollTriggerRef: TitleRef, initialValue: 90, delayValue: 0, durationValue: 1 })
  FadeYAnimation({ animationRef: DescriptionRef, scrollTriggerRef: DescriptionRef, initialValue: 90, delayValue: 0.3, durationValue: 1 })

  useEffect(() => {
    gsap.fromTo(
      ImageRef.current,
      {
        opacity: 0,
        translateY: 300,
        translateX: 300
      },
      {
        opacity: 1,
        translateY: 0,
        translateX: 0,
        duration: 2,
        delay: 0,
        scrollTrigger: ImageRef.current
      }
    )
  }, [])

  return (
    <>
      <div className="relative bg-white grid grid-cols-1">
        <div className="order-2 relative md:absolute w-full h-full flex justify-end items-end">
          <div ref={ImageRef} className="w-full h-auto pl-4 md:pl-0 md:h-[339px] xl:h-[435px] md:max-w-[333px] xl:max-w-[445px]">
            <LazyLoadImage
              src={BlakeImage}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
        <div className="relative pb-12 pt-16 md:py-24 xl:py-[120px]">
          <div className="px-6 lg:px-10 xl:px-0 mx-auto max-w-7xl">
            <div className="text-left">
              <div ref={TitleRef}>
                <TitleText classNames="!text-left">Our Values</TitleText>
              </div>
              <p ref={DescriptionRef} className="mt-4 text-base text-neutral-60 font-cera-pro-regular">At the core of our mission and vision are the values guiding us in all that we do.</p>
            </div>

            <div className="max-w-[480px] lg:max-w-[620px] xl:max-w-[865px] w-full grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-10 md:mt-14 xl:mt-16">
              <OurValueCard icon={<BetterTogether />} title="Better Together" description="Cooperation, collaboration, and unity. We’re all better when we’re working together." />
              <OurValueCard icon={<Trust />} title="Trust & Reliability" description="Become a beacon of truth and reliability. xrecruiter to be a brand name recruiters rely on." />
              <OurValueCard icon={<KeepSimple />} title="Keep it simple" description="Do the basics well and continue to serve the community in a straight forward and simple manner." />
              <OurValueCard icon={<Supportive />} title="Supportive" description="Provide family like support where all levels of experience are empowered and supported." />
              <OurValueCard icon={<Think />} title="Think Different" description="Educating recruiters to think different and expand their horizons to discover true abundance." />
              <OurValueCard icon={<Freedom />} title="Freedom & Flexibility" description="Empower our recruiters to feel the freedom and flexibility of what recruitment can provide." />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurValue
