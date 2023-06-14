
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { type IGlobalAnimation } from '../../interfaces/IGlobalAnimation'

const DiscordLogoAnimation = ({ animationRef, scrollTriggerRef, initialValue, delayValue, durationValue }: IGlobalAnimation) => {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.to(
      animationRef.current,
      {
        translateY: initialValue,
        duration: durationValue,
        delay: delayValue,
        ease: 'ease-out',
        repeat: -1,
        yoyo: true,
        scrollTrigger: scrollTriggerRef.current
      }
    )
  }, [])
}

export default DiscordLogoAnimation
