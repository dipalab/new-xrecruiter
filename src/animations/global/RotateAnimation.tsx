import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { type IGlobalAnimation } from '../../interfaces/IGlobalAnimation'

const RotateAnimation = ({ animationRef, scrollTriggerRef, initialValue, delayValue, durationValue }: IGlobalAnimation) => {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.to(
      animationRef.current,
      {
        rotate: initialValue,
        duration: durationValue,
        delay: delayValue,
        ease: 'none',
        repeat: -1,
        scrollTrigger: scrollTriggerRef.current
      }
    )
  }, [])
}

export default RotateAnimation
