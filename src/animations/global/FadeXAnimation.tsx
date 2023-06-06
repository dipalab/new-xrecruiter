import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { type IGlobalAnimation } from '../../interfaces/IGlobalAnimation'

const FadeXAnimation = ({ animationRef, scrollTriggerRef, initialValue, delayValue, durationValue }: IGlobalAnimation) => {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.fromTo(
      animationRef.current,
      {
        translateX: initialValue,
        opacity: 0
      },
      {
        translateX: 0,
        opacity: 1,
        duration: durationValue,
        delay: delayValue,
        scrollTrigger: scrollTriggerRef.current
      }
    )
  }, [])
}

export default FadeXAnimation
