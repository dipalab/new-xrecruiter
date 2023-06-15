
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { type IGlobalAnimation } from '../../interfaces/IGlobalAnimation'

const HeroAnimation = ({ animationRef, scrollTriggerRef, initialValue, delayValue, durationValue }: IGlobalAnimation) => {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.fromTo(
      animationRef.current,
      {
        opacity: 0.5,
        scale: initialValue
      },
      {
        opacity: 1,
        scale: 1,
        duration: durationValue,
        delay: delayValue,
        scrollTrigger: scrollTriggerRef.current
      }
    )
  }, [])
}

export default HeroAnimation
