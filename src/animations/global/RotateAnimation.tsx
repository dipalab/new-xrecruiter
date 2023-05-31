import { useEffect } from 'react'
import { gsap } from 'gsap'
import { type IGlobalAnimation } from '../../interfaces/IGlobalAnimation'

const RotateAnimation = ({ animationRef, scrollTriggerRef, initialValue, delayValue, durationValue }: IGlobalAnimation) => {
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
