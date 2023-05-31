import { useEffect } from 'react'
import { gsap } from 'gsap'
import { type IGlobalAnimation } from '../../interfaces/IGlobalAnimation'

const FadeUpAnimation = ({ animationRef, scrollTriggerRef, initialValue, delayValue, durationValue }: IGlobalAnimation) => {
  useEffect(() => {
    gsap.fromTo(
      animationRef.current,
      {
        opacity: 0,
        translateY: initialValue
      },
      {
        opacity: 1,
        translateY: 0,
        duration: durationValue,
        delay: delayValue,
        scrollTrigger: scrollTriggerRef.current
      }
    )
  }, [])
}

export default FadeUpAnimation
