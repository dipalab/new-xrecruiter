import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { type IGlobalAnimation } from '../../interfaces/IGlobalAnimation'

const RotateAnimation = ({ animationRef, scrollTriggerRef, initialValue, delayValue, durationValue }: IGlobalAnimation) => {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.fromTo(
      animationRef.current,
      {
        rotate: initialValue
      },
      {
        rotate: 0,
        duration: durationValue,
        delay: delayValue,
        scrollTrigger: scrollTriggerRef.current
      }
    )
  }, [])
}

export default RotateAnimation
