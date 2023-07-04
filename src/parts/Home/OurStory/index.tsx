import { useRef } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import { TitleText } from '../../../components'
import CardName from './CardName'

import BlakeNDeclanImage from '../../../assets/images/home/blake-and-declan.png'
import BlakeDeclanPhotoAnimation from '../../../animations/home/BlakeDeclanPhotoAnimation'
import DotBackground from './DotBackground'

const OurStory = () => {
  const BlakeDeclanPhotoRef = useRef(null)

  BlakeDeclanPhotoAnimation({ animationRef: BlakeDeclanPhotoRef, scrollTriggerRef: BlakeDeclanPhotoRef, initialValue: 1.5, delayValue: 0, durationValue: 1 })

  return (
    <>
      <div className="bg-[#FAFBFC] relative">
        <div className="absolute w-full h-full">
          <DotBackground />
        </div>

        <div className="relative py-16 md:py-24 xl:py-[120px] max-w-[1920px] mx-auto">
          <div className="px-6 lg:px-10 mx-auto max-w-7xl">
            <div className="text-center">
              <TitleText>Our Story</TitleText>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 font-cera-pro-regular xl:px-0.5">
              <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="text-base text-neutral-60">Blake and Declan started their own recruitment agencies and became direct competitors. For a few years, they didn{"'"}t communicate as is the norm in the recruitment industry where competitors are considered enemies. However, the outbreak of Covid in March 2020 led them to rekindle their conversation about their agencies{"'"} operations and the challenges they were facing. After a few weeks of collaboration, they discovered that they were facing the same challenges and wondered why they hadn{"'"}t learned from each other sooner.</p>
              <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="text-base text-neutral-60">This collaboration proved to be a turning point as their recruitment agencies flourished, fees increased, made less mistakes and improved their quality of life. <br className="block xl:hidden" /> After learning that over 80% of the worlds recruitment industry comprises micro-agencies under 15 staff, they quickly realized that many other agency owners and recruiters were experiencing similar pain points and if we worked together, we could truly unite a once-fragmented industry.</p>
            </div>
          </div>

          <div ref={BlakeDeclanPhotoRef} className="w-full h-full lg:h-[515px] xl:h-[726px] 2xl:h-[766px] mt-[52px] md:mt-[72px] xl:mt-[88px]">
            <LazyLoadImage
              src={BlakeNDeclanImage}
              className="w-full h-full"
              alt=""
            />
          </div>

          <div className="mx-auto max-w-2xl mt-6 md:mt-10 px-6 md:px-0">
            <div className="grid grid-cols-2 font-cera-pro-regular">
              <CardName name="Declan Kluver" linkedin="https://www.linkedin.com/in/declan-kluver/" />
              <CardName name="Blake Thompson" linkedin="https://www.linkedin.com/in/blakethompson92/" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurStory
