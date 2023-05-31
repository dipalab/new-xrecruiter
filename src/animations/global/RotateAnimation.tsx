import { useEffect } from 'react'
import { gsap } from 'gsap'
import { type IGlobalAnimation } from '../../interfaces/IGlobalAnimation'

const RotateAnimation = ({ animationRef, scrollTriggerRef, initialValue, durationValue }: IGlobalAnimation) => {
  useEffect(() => {
    gsap.fromTo(
      animationRef.current,
      {
        rotate: initialValue
      },
      {
        rotate: 0,
        duration: durationValue,
        scrollTrigger: scrollTriggerRef.current
      }
    )
  }, [])
}

export default RotateAnimation
