import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { DescriptionText, TitleText } from '../../../components'
import CircleProgressBarAnimation from '../../../animations/home/CircleProgressBarAnimation'

const Work = () => {
  gsap.registerPlugin(ScrollTrigger)
  const circlePercentageRef = useRef(null)
  const [percentage, setPercentage] = useState(1)

  CircleProgressBarAnimation({ animationRef: circlePercentageRef, scrollTriggerRef: circlePercentageRef, initialValue: 1000, durationValue: 7 })

  // TODO: tigger useEffect agar run ketika sampai ke view
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (percentage < 95) setPercentage(percentage + 1)
    }, 19)

    return () => { clearTimeout(timeout) }
  }, [percentage, circlePercentageRef])

  return (
    <>
      <div className="overflow-hidden bg-white pb-[104px] xl:pb-[170px]">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8 xl:px-0">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:grid-cols-2 lg:items-start">
            <div className="relative flex justify-center lg:justify-start">
              <div className="w-[280px] sm:w-[406px] xl:w-[470px] h-[240px] sm:h-[346px] xl:h-[400px] px-6 sm:px-[34px] xl:px-10 flex lg:items-center">
                <div>
                  <svg className="absolute w-[230px] sm:w-[336px] xl:w-[384px] h-[242px]" viewBox="0 0 384 242" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path ref={circlePercentageRef} d="M30.4962 234C30.4962 234 14.4347 179.237 43.9976 120C64.5302 78.8578 107.568 26.4994 186.5 26.5C267.471 26.5006 318.003 75.5807 339.5 120C352.96 147.813 356.713 175.246 357.039 196" stroke="#0074D9" strokeWidth="52"/>
                  </svg>
                  <svg className="w-[230px] sm:w-[336px] xl:w-[384px] h-[242px]" viewBox="0 0 384 242" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.4962 234C30.4962 234 14.4347 179.237 43.9976 120C64.5302 78.8578 107.568 26.4994 186.5 26.5C267.471 26.5006 318.003 75.5807 339.5 120C352.96 147.813 356.713 175.246 357.039 196C357.378 217.625 353.995 232 353.995 232" stroke="#F0F7FD" strokeWidth="52"/>
                  </svg>
                  <div className="text-center -mt-32 xl:-mt-28">
                    <p className="text-[38px] sm:text-[55px] xl:text-[64px] leading-[50px] sm:leading-[74px] xl:leading-[86px] font-cera-pro-bold text-[#0074D9]">{ percentage }%</p>
                    <p className="mt-3.5 sm:mt-[19px] xl:mt-[26px] text-base sm:text-[24px] xl:text-[32px] sm:leading-[36px] xl:leading-[40px] font-cera-pro-medium text-neutral-100">Earn up to</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 lg:px-0 flex items-center h-full">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <TitleText classNames="lg:!text-left">Work for yourself, <br /> not by yourself</TitleText>
                <DescriptionText classNames="lg:!text-left mt-4 md:mt-6">XRecruiter provides everything you need to feel confident to launch and manage your own recruitment agency, regardless of experience.</DescriptionText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work
