import { useRef } from 'react'
import { Button } from '../../../components'
import { RotateAnimation, FadeUpAnimation } from '../../../animations/global'

const Hero = () => {
  const TagLineRef = useRef(null)
  const HeroButtonRef = useRef(null)
  const VideoRef = useRef(null)
  const LogoRotateAnimationRef = useRef(null)

  RotateAnimation({ animationRef: LogoRotateAnimationRef, scrollTriggerRef: LogoRotateAnimationRef, initialValue: -90, delayValue: 0, durationValue: 1.5 })
  FadeUpAnimation({ animationRef: TagLineRef, scrollTriggerRef: TagLineRef, initialValue: 90, delayValue: 0.5, durationValue: 0.8 })
  FadeUpAnimation({ animationRef: HeroButtonRef, scrollTriggerRef: HeroButtonRef, initialValue: 90, delayValue: 1, durationValue: 0.8 })
  FadeUpAnimation({ animationRef: VideoRef, scrollTriggerRef: VideoRef, initialValue: 90, delayValue: 1.5, durationValue: 0.8 })

  return (
    <>
      <div className="relative overflow-hidden bg-[#00081D]">
        {/* xr logo background */}
        <div className="absolute flex justify-end w-full h-full pt-[60px]">
          <svg ref={LogoRotateAnimationRef} className="absolute -right-[255px] z-10" width="519" height="579" viewBox="0 0 519 579" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M410.571 118.832L36.9614 335.195M108.863 460.121L482.472 243.757M482.472 335.195L108.863 118.832M36.9614 243.757L410.571 460.121M187.836 505.848C187.836 545.679 220.027 577.969 259.737 577.969C299.447 577.969 331.638 545.679 331.638 505.848C331.638 466.016 299.447 433.726 259.737 433.726C220.027 433.726 187.836 466.016 187.836 505.848ZM187.836 73.1213C187.836 112.953 220.027 145.243 259.737 145.243C299.447 145.243 331.638 112.953 331.638 73.1213C331.638 33.2898 299.447 1 259.737 1C220.027 1 187.836 33.2898 187.836 73.1213ZM1 397.667C1 437.499 33.1912 469.788 72.9011 469.788C112.611 469.788 144.802 437.499 144.802 397.667C144.802 357.836 112.611 325.546 72.9011 325.546C33.1912 325.546 1 357.836 1 397.667ZM374.604 181.305C374.604 221.137 406.795 253.426 446.505 253.426C486.215 253.426 518.406 221.137 518.406 181.305C518.406 141.474 486.215 109.184 446.505 109.184C406.795 109.184 374.604 141.474 374.604 181.305ZM1 181.305C1 221.137 33.1912 253.426 72.9011 253.426C112.611 253.426 144.802 221.137 144.802 181.305C144.802 141.474 112.611 109.184 72.9011 109.184C33.1912 109.184 1 141.474 1 181.305ZM374.604 397.667C374.604 437.499 406.795 469.788 446.505 469.788C486.215 469.788 518.406 437.499 518.406 397.667C518.406 357.836 486.215 325.546 446.505 325.546C406.795 325.546 374.604 357.836 374.604 397.667Z" stroke="url(#paint0_linear_36600_5275)"/>
            <defs>
              <linearGradient id="paint0_linear_36600_5275" x1="238" y1="577.984" x2="81.5" y2="41.9844" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0074D9" stopOpacity="0.8"/>
                <stop offset="0.366655" stopColor="#413FFF" stopOpacity="0.6"/>
                <stop offset="0.626095" stopColor="#8738FF" stopOpacity="0.6"/>
                <stop offset="1" stopColor="#FF9A5C" stopOpacity="0.2"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* hero content */}
        <div className="relative mx-auto max-w-7xl text-center pb-[340px] pt-[136px] px-6 lg:px-8 xl:px-0">
          <div className="mx-auto">
            <p ref={TagLineRef} className="text-white text-4xl sm:text-[56px] font-cera-pro-medium leading-[72px] tracking-[1px]">Powering the next <br />generation of recruiters</p>
            <div ref={HeroButtonRef} className="mt-10">
              <Button>Apply Now</Button>
            </div>
          </div>
          <div className="relative mt-[104px]">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 sm:-top-12 md:-top-20 lg:-top-12 xl:top-0 w-[1144px] h-[260px]">
              <div className="w-full h-full bg-red-300" id="hero-gradient"></div>
            </div>
          </div>
        </div>

        {/* video */}
        <div ref={VideoRef} className="relative z-10 flow-root bg-white pb-24 lg:pb-[180px]">
          <div className="-mt-80">
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col justify-between rounded-3xl bg-white p-2 shadow-[0px_16px_48px_rgba(127,_137,_149,_0.24);] w-[1160px] h-[630px]">
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
