
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { type IGlobalAnimation } from '../../interfaces/IGlobalAnimation'

const BlakeDeclanPhotoAnimation = ({ animationRef, scrollTriggerRef, initialValue, delayValue, durationValue }: IGlobalAnimation) => {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.fromTo(
      animationRef.current,
      {
        opacity: 0,
        scale: initialValue
      },
      {
        opacity: 1,
        scale: 1,
        duration: durationValue,
        delay: delayValue,
        scrollTrigger: {
          trigger: scrollTriggerRef.current,
          start: 'top center'
        }
      }
    )
  }, [])
}

export default BlakeDeclanPhotoAnimation
