import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import { Button } from '../../../components'
import { FadeYAnimation } from '../../../animations/global'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import DiscordScreenshootImage from '../../../assets/images/community/discord-screenshoot.png'
import Discord3DtImage from '../../../assets/images/community/discord-3d.png'

const Hero = () => {
  const TagLineRef = useRef(null)
  const DescriptionRef = useRef(null)
  const ButtonRef = useRef(null)
  const Discord3DtRef = useRef(null)

  FadeYAnimation({ animationRef: TagLineRef, scrollTriggerRef: TagLineRef, initialValue: 90, delayValue: 0, durationValue: 0.8 })
  FadeYAnimation({ animationRef: DescriptionRef, scrollTriggerRef: DescriptionRef, initialValue: 90, delayValue: 0.3, durationValue: 0.8 })
  FadeYAnimation({ animationRef: ButtonRef, scrollTriggerRef: ButtonRef, initialValue: 90, delayValue: 0.6, durationValue: 0.8 })

  useEffect(() => {
    gsap.to(
      Discord3DtRef.current,
      {
        y: 70,
        duration: 1,
        delay: 0,
        ease: 'none',
        repeat: 0.5
      }
    )
  }, [])

  return (
    <>
      <div className="relative isolate pt-14">
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 xl:px-0">
            <div className="mx-auto max-w-5xl text-center">
              <h1 ref={TagLineRef} className="text-[40px] md:text-[48px] xl:text-[56px] leading-[56px] md:leading-[64px] xl:leading-[72px] text-neutral-100 font-cera-pro-medium">The home for <br className="md:block hidden" /> Recruitment Communities</h1>
              <p ref={DescriptionRef} className="mt-4 text-base text-neutral-60 font-cera-pro-regular">Ask questions, share ideas and build connections with eachother - all in the once place. <br /> XR House enables healthy and productive recruitment collaboration.</p>
              <div ref={ButtonRef} className="mt-10 flex items-center justify-center">
                <a href="https://discord.gg/Y36yZxdZWh" target="_blank" rel="noreferrer">
                  <Button>
                    Join XR House
                    <ChevronRightIcon className="w-5 h-5 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-16 flow-root sm:mt-24 relative max-w-7xl mx-auto">
            <div className="absolute -top-40 left-20">
              <div ref={Discord3DtRef}>
                <LazyLoadImage
                  src={Discord3DtImage}
                  className="w-[180px] h-[180px]"
                  alt="App screenshot"
                />
              </div>
            </div>
            <LazyLoadImage
              src={DiscordScreenshootImage}
              className="w-full h-[664px] rounded-lg shadow-[0px_16px_48px_rgba(127,_137,_149,_0.24)]"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
