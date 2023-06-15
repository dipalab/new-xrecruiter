import { useRef } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import { FadeYAnimation } from '../../../animations/global'
import HeroAnimation from '../../../animations/our-mission/HeroAnimation'
import HeroImage from '../../../assets/images/our-mission/hero.png'
import HeroMobileImage from '../../../assets/images/our-mission/hero-mobile.png'
import IndustryTalentLogo from '../../../assets/images/partner-logo/industry-talent-white-logo.svg'

const Hero = () => {
  const ImageRef = useRef(null)
  const TagLineRef = useRef(null)
  const LogoRef = useRef(null)

  FadeYAnimation({ animationRef: TagLineRef, scrollTriggerRef: TagLineRef, initialValue: 90, delayValue: 1, durationValue: 1 })
  FadeYAnimation({ animationRef: LogoRef, scrollTriggerRef: LogoRef, initialValue: 90, delayValue: 1.3, durationValue: 1 })
  HeroAnimation({ animationRef: ImageRef, scrollTriggerRef: ImageRef, initialValue: 1.5, delayValue: 0, durationValue: 1 })

  return (
    <>
      <div className="relative isolate overflow-hidden h-[700px] md:h-[600px] xl:h-[854px] max-w-[1920px] mx-auto">
        {/* desktop background image */}
        <div ref={ImageRef} className="hidden sm:block absolute inset-0 -z-10 h-full w-full">
          <LazyLoadImage
            src={HeroImage}
            className="h-full w-full object-right object-cover"
            alt=""
          />
        </div>

        {/* mobile background image */}
        <div className="sm:hidden absolute inset-0 -z-10">
          <LazyLoadImage
            src={HeroMobileImage}
            className="h-full w-full object-right object-cover"
            alt=""
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl pt-[88px] md:pt-[136px] xl:pt-[210px]">
          <div className="text-left max-w-3xl px-6 md:px-10 xl:px-0">
            <h1 ref={TagLineRef} className="text-[40px] md:text-[48px] xl:text-[56px] leading-[56px] md:leading-[64px] xl:leading-[72px] text-white font-cera-pro-medium">Building a new era <br className="md:block hidden" /> of empowered recruiters</h1>
            <div ref={LogoRef} className="mt-6">
              <p className="text-lg leading-8 text-gray-300">Krystal Smithers</p>
              <div className="flex justify-start">
                <LazyLoadImage
                  src={IndustryTalentLogo}
                  className="w-auto h-10"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
