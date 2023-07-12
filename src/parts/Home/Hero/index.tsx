import { useRef } from 'react'
import { Button } from '../../../components'
import { RotateAnimation, FadeYAnimation } from '../../../animations/global'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import XrVideo from '../../../assets/videos/xr_introductory_video.mp4'

const Hero = () => {
  const TagLineRef = useRef(null)
  const HeroButtonRef = useRef(null)
  const VideoRef = useRef(null)
  const LogoRotateAnimationRef = useRef(null)

  RotateAnimation({ animationRef: LogoRotateAnimationRef, scrollTriggerRef: LogoRotateAnimationRef, initialValue: 360, delayValue: 1, durationValue: 10 })
  FadeYAnimation({ animationRef: TagLineRef, scrollTriggerRef: TagLineRef, initialValue: 90, delayValue: 0.5, durationValue: 0.8 })
  FadeYAnimation({ animationRef: HeroButtonRef, scrollTriggerRef: HeroButtonRef, initialValue: 90, delayValue: 1, durationValue: 0.8 })
  FadeYAnimation({ animationRef: VideoRef, scrollTriggerRef: VideoRef, initialValue: 90, delayValue: 1.5, durationValue: 0.8 })

  return (
    <>
      <div className="relative overflow-hidden bg-[#00081D]">
        {/* xr logo background */}
        <div className="absolute flex justify-end w-full h-full pt-[245px] md:pt-[136px] xl:pt-[150px]">
          <svg ref={LogoRotateAnimationRef} className="absolute z-10 -right-[140px] md:-right-[220px] xl:-right-[255px] w-[230px] h-[260px] md:w-[413px] md:h-[461px] xl:w-[519px] xl:h-[579px]" viewBox="0 0 519 579" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <div className="relative mx-auto max-w-7xl text-center pb-[130px] md:pb-[280px] lg:pb-[305px] xl:pb-[340px] pt-[112px] md:pt-[168px] xl:pt-[226px] px-11 lg:px-10 xl:px-0">
          <div className="mx-auto">
            <p ref={TagLineRef} className="text-white text-[32px] md:text-[48px] xl:text-[56px] leading-[40px] md:leading-[64px] xl:leading-[72px] font-cera-pro-medium tracking-[1px]">Powering the next <br className="hidden md:block" /> generation of recruiters</p>
            <div ref={HeroButtonRef} className="mt-8 md:mt-10">
              <a href="https://apply.xrecruiter.io/form-1">
                <Button>Apply Now</Button>
              </a>
            </div>
          </div>

          {/* gradient background */}
          <div className="relative mt-[120px] md:mt-[88px] xl:mt-[104px]">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full xl:w-[1144px] h-[80px] md:h-[260px]">
              <div className="w-full h-full bg-red-300" id="hero-gradient"></div>
            </div>
          </div>
        </div>

        {/* video */}
        <div className="relative z-10 flow-root bg-[#FAFBFC] pb-[55px] md:pb-24 lg:pb-[112px] xl:pb-[120px]">
          <div className="-mt-[130px] md:-mt-[280px] lg:-mt-[305px] xl:-mt-[340px]">
            <div className="mx-auto max-w-7xl px-6 md:px-10 xl:px-0">
              <div ref={VideoRef} className="flex flex-col justify-between rounded-[7px] md:rounded-2xl lg:rounded-3xl bg-white p-2 shadow-[0px_16px_48px_rgba(127,_137,_149,_0.24)] w-full h-[200px] md:h-[400px] lg:h-[512px] xl:h-[614px]">
                <LazyLoadComponent>
                  <video controls className="w-full h-full object-cover rounded-[5px] md:rounded-xl lg:rounded-2xl" width="100%">
                    <source src={XrVideo} type="video/mp4" className="object-cover" />
                    Sorry, your browser doesnt support videos.
                  </video>
                </LazyLoadComponent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
