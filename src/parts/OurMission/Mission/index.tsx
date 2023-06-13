import { useRef } from 'react'
import { FadeYAnimation } from '../../../animations/global'
import DotBackground from './DotBackground'

const Mission = () => {
  const TitleRef = useRef(null)
  const DescriptionRef = useRef(null)

  FadeYAnimation({ animationRef: TitleRef, scrollTriggerRef: TitleRef, initialValue: 100, delayValue: 0, durationValue: 1 })
  FadeYAnimation({ animationRef: DescriptionRef, scrollTriggerRef: DescriptionRef, initialValue: 100, delayValue: 0.3, durationValue: 1 })

  return (
    <>
      <div className="relative bg-neutral-10">
        <div className="absolute w-full h-full">
          <DotBackground />
        </div>
        <div className="relative py-16 md:py-[88px] xl:py-[120px]">
          <div className="px-6 lg:px-10 xl:px-0 mx-auto max-w-7xl">
            <div className="text-center max-w-[960px] mx-auto">
              <p ref={TitleRef} className="text-[32px] leading-[40px] md:text-[40px] md:leading-[56px] text-neutral-100 font-cera-pro-medium">The Mission</p>
              <p ref={DescriptionRef} className="mt-6 md:mt-10 text-lg md:text-2xl text-neutral-100 font-cera-pro-regular">Our mission is to cultivate the worlds largest community of recruiters and give them the best tools, resources, and support in the industry. For the first time ever, recruiters are fully supported under their own brand, can participate in a culture of success and join a movement that’s uniting the industry for the better.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mission
