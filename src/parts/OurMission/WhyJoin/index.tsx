import { useRef } from 'react'
import { gsap } from 'gsap'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { FadeYAnimation } from '../../../animations/global'
import { WhyJoinCard, TitleText } from '../../../components'
import { Culture, Earn, Learning, Market, Reduce, Scale } from './Icon'
import XRLogoImage from '../../../assets/images/our-mission/xr-logo.png'
import LineAnimation from '../../../animations/our-mission/LineAnimation'

const WhyJoin = () => {
  gsap.registerPlugin(ScrollTrigger)
  const firstLineDesktopRef = useRef(null)
  const secondLineDesktopRef = useRef(null)
  const firstLineMobileRef = useRef(null)
  const secondLineMobileRef = useRef(null)
  const TitleRef = useRef(null)
  const DescriptionRef = useRef(null)

  FadeYAnimation({ animationRef: TitleRef, scrollTriggerRef: TitleRef, initialValue: 90, delayValue: 0, durationValue: 1 })
  FadeYAnimation({ animationRef: DescriptionRef, scrollTriggerRef: DescriptionRef, initialValue: 90, delayValue: 0.3, durationValue: 1 })

  LineAnimation({ animationRef: firstLineDesktopRef, scrollTriggerRef: TitleRef, initialValue: 800, durationValue: 8 })
  LineAnimation({ animationRef: secondLineDesktopRef, scrollTriggerRef: TitleRef, initialValue: 800, durationValue: 7 })
  LineAnimation({ animationRef: firstLineMobileRef, scrollTriggerRef: TitleRef, initialValue: 800, durationValue: 8 })
  LineAnimation({ animationRef: secondLineMobileRef, scrollTriggerRef: TitleRef, initialValue: 800, durationValue: 7 })

  return (
    <>
      <div className="relative bg-[#4140FC]">
        <div className="absolute right-0 md:-right-20 xl:right-0 w-full h-full flex justify-end items-end">
          {/* dekstop/tab */}
          <svg className="hidden md:block" width="231" height="523" viewBox="0 0 231 523" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect ref={firstLineDesktopRef} x="370.12" y="521.292" width="398.129" height="398.129" rx="199.064" transform="rotate(-157.724 370.12 521.292)" stroke="url(#paint0_radial_36181_770)" strokeWidth="2.61927"/>
            <path ref={secondLineDesktopRef} d="M390.306 261.51C390.306 332.634 332.649 390.29 261.526 390.29C190.403 390.29 132.746 332.634 132.746 261.51C132.746 190.387 190.403 132.73 261.526 132.73C332.649 132.73 390.306 190.387 390.306 261.51Z" stroke="url(#paint1_radial_36181_770)" strokeWidth="1.78861"/>
            <defs>
              <radialGradient id="paint0_radial_36181_770" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(882.081 945.753) rotate(-140.869) scale(524.463)">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="white" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="paint1_radial_36181_770" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(163 96) rotate(72.5499) scale(266.778)">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="white" stopOpacity="0"/>
              </radialGradient>
            </defs>
          </svg>
          {/* mobile */}
          <svg className="md:hidden" width="197" height="260" viewBox="0 0 197 260" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect ref={firstLineMobileRef} x="252.542" y="355.292" width="271.062" height="271.062" rx="135.531" transform="rotate(-157.724 252.542 355.292)" stroke="url(#paint0_radial_36322_19381)" strokeWidth="2.61927"/>
            <path ref={secondLineMobileRef} d="M266.268 178.421C266.268 226.837 227.02 266.085 178.605 266.085C130.19 266.085 90.9412 226.837 90.9412 178.421C90.9412 130.006 130.19 90.7576 178.605 90.7576C227.02 90.7576 266.268 130.006 266.268 178.421Z" stroke="url(#paint1_radial_36322_19381)" strokeWidth="1.78861"/>
            <defs>
              <radialGradient id="paint0_radial_36322_19381" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(602.4 645.709) rotate(-140.869) scale(358.169)">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="white" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="paint1_radial_36322_19381" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(111.319 65.39) rotate(72.5499) scale(182.189)">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="white" stopOpacity="0"/>
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="relative pb-[72px] pt-16 md:pb-[84px] md:pt-24 xl:py-[120px]">
          <div className="px-6 lg:px-10 xl:px-0 mx-auto max-w-7xl">
            <div className="text-center flex flex-col">
              <div ref={TitleRef} className="flex items-center justify-center space-x-4">
                <TitleText classNames="!text-white">Why join</TitleText>
                <div>
                  <LazyLoadImage
                    src={XRLogoImage}
                    className="w-auto h-9 object-cover"
                    alt=""
                  />
                </div>
              </div>
              <p ref={DescriptionRef} className="mt-4 max-w-[500px] mx-auto text-base text-[#FFFFFF8F] font-cera-pro-regular">If it’s not obvious already let us outline a few of the thousands of reasons to join xrecruiter.</p>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-y-10 md:gap-x-6 xl:gap-6 mt-12 md:mt-16">
              <WhyJoinCard icon={<Market />} title="Market Credibility" description="xrecruiter provides agencies with improved market credibility, enabling them to secure more clients, win larger contracts, charge premium fees." />
              <WhyJoinCard icon={<Culture />} title="Culture" description="Join a culture of high performers and elevate your skillset and knowledge" />
              <WhyJoinCard icon={<Learning />} title="Learning & Support" description="Hands on support, Ongoing training and development and much more." />
              <WhyJoinCard icon={<Reduce />} title="Reduce Risk" description="Leverage the wisdom of xrecruiter and avoid making common mistakes that cost time and money." />
              <WhyJoinCard icon={<Earn />} title="Earn More" description="Start earning from day one and overcome significant opportunity cost of trying alone." />
              <WhyJoinCard icon={<Scale />} title="Scale Effortlessly" description="Time to scale? Our industry leading network will help you get there." />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyJoin
