
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { type IGlobalAnimation } from '../../interfaces/IGlobalAnimation'

const LineAnimation = ({ animationRef, scrollTriggerRef, initialValue, delayValue, durationValue }: IGlobalAnimation) => {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.fromTo(
      animationRef.current,
      { strokeDasharray: initialValue, strokeDashoffset: initialValue },
      {
        strokeDashoffset: 0,
        duration: durationValue,
        scrollTrigger: scrollTriggerRef.current
      }
    )
  }, [])
}

export default LineAnimation
