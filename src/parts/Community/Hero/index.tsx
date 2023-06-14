import { useRef } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import { Button } from '../../../components'
import { FadeYAnimation } from '../../../animations/global'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import DiscordScreenshootImage from '../../../assets/images/community/discord-screenshoot.png'
import Discord3DtImage from '../../../assets/images/community/discord-3d.png'
import DiscordLogoAnimation from '../../../animations/community/DiscordLogoAnimation'

const Hero = () => {
  const TagLineRef = useRef(null)
  const DescriptionRef = useRef(null)
  const ButtonRef = useRef(null)
  const DiscordScreenRef = useRef(null)
  const Discord3DtRef = useRef(null)

  FadeYAnimation({ animationRef: TagLineRef, scrollTriggerRef: TagLineRef, initialValue: 90, delayValue: 0, durationValue: 0.8 })
  FadeYAnimation({ animationRef: DescriptionRef, scrollTriggerRef: DescriptionRef, initialValue: 90, delayValue: 0.3, durationValue: 0.8 })
  FadeYAnimation({ animationRef: ButtonRef, scrollTriggerRef: ButtonRef, initialValue: 90, delayValue: 0.6, durationValue: 0.8 })
  FadeYAnimation({ animationRef: DiscordScreenRef, scrollTriggerRef: DiscordScreenRef, initialValue: 90, delayValue: 0.8, durationValue: 0.8 })
  DiscordLogoAnimation({ animationRef: Discord3DtRef, scrollTriggerRef: Discord3DtRef, initialValue: -25, delayValue: 0, durationValue: 1 })

  return (
    <>
      <div className="relative isolate">
        <div className="px-6 lg:px-10 xl:px-0 pb-16 pt-[112px] sm:py-32 lg:pb-24 lg:pt-[168px] xl:pb-[120px] xl:pt-[226px]">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-5xl text-center">
              <h1 ref={TagLineRef} className="text-[40px] md:text-[48px] xl:text-[56px] leading-[56px] md:leading-[64px] xl:leading-[72px] text-neutral-100 font-cera-pro-medium">The home for <br className="md:block hidden" /> Recruitment Communities</h1>
              <p ref={DescriptionRef} className="mt-4 text-base text-neutral-60 font-cera-pro-regular">Ask questions, share ideas and build connections with eachother - all in the once place. <br className="md:block hidden" /> XR House enables healthy and productive recruitment collaboration.</p>
              <div ref={ButtonRef} className="mt-8 md:mt-10 flex items-center justify-center">
                <a href="https://discord.gg/Y36yZxdZWh" target="_blank" rel="noreferrer" className="w-full">
                  <Button classNames="!w-full md:!w-auto">
                    Join XR House
                    <ChevronRightIcon className="w-5 h-5 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-24 flow-root sm:mt-20 xl:mt-24 relative max-w-7xl mx-auto">
            <div className="absolute -top-12 md:-top-24 lg:-top-28 xl:-top-36 left-5 md:left-20 z-10">
              <div ref={Discord3DtRef}>
                <LazyLoadImage
                  src={Discord3DtImage}
                  className="w-[62px] md:w-[120px] lg:w-[150px] xl:w-[180px] h-[62px] md:h-[120px] lg:h-[150px] xl:h-[180px]"
                  alt="App screenshot"
                />
              </div>
            </div>

            <div ref={DiscordScreenRef}>
              <LazyLoadImage
                src={DiscordScreenshootImage}
                className="w-full h-auto xl:h-[664px] rounded-lg shadow-[0px_16px_48px_rgba(127,_137,_149,_0.24)]"
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
