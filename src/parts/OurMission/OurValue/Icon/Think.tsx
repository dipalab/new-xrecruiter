import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Think = () => {
  gsap.registerPlugin(ScrollTrigger)
  const firstDotRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      firstDotRef.current,
      { scale: 0, x: 12, y: 12 },
      { scale: 1, x: 0, y: 0, delay: 0.2, duration: 1.2, scrollTrigger: firstDotRef.current }
    )
  }, [])

  return (
    <>
      <svg className="w-8 md:w-7 xl:w-8 h-8 md:h-7 xl:h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path ref={firstDotRef} d="M23.8859 14.2958H19.7659V4.6958C19.7659 2.4558 18.5525 2.00247 17.0725 3.68247L16.0059 4.8958L6.97921 15.1625C5.73921 16.5625 6.25921 17.7091 8.12587 17.7091H12.2459V27.3091C12.2459 29.5491 13.4592 30.0025 14.9392 28.3225L16.0059 27.1091L25.0325 16.8425C26.2725 15.4425 25.7525 14.2958 23.8859 14.2958Z" fill="#1C5BFC"/>
      </svg>
    </>
  )
}

export default Think
