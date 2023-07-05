import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const BetterTogether = () => {
  gsap.registerPlugin(ScrollTrigger)
  const firstDotRef = useRef(null)
  const secondDotRef = useRef(null)
  const thirdDotRef = useRef(null)
  const firstLineRef = useRef(null)
  const secondLineRef = useRef(null)
  const thirdLineRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      firstDotRef.current,
      { scale: 0, x: 4, y: 4 },
      { scale: 1, x: 0, y: 0, delay: 0, duration: 0.6, scrollTrigger: firstDotRef.current }
    )

    gsap.fromTo(
      secondDotRef.current,
      { scale: 0, x: 4, y: 4 },
      { scale: 1, x: 0, y: 0, delay: 0.3, duration: 0.6, scrollTrigger: secondDotRef.current }
    )

    gsap.fromTo(
      thirdDotRef.current,
      { scale: 0, x: 4, y: 4 },
      { scale: 1, x: 0, y: 0, delay: 0.6, duration: 0.6, scrollTrigger: thirdDotRef.current }
    )

    gsap.fromTo(
      firstLineRef.current,
      { scale: 0, x: 4, y: 4 },
      { scale: 1, x: 0, y: 0, delay: 0.8, duration: 0.6, scrollTrigger: firstLineRef.current }
    )

    gsap.fromTo(
      secondLineRef.current,
      { scale: 0, x: 4, y: 4 },
      { scale: 1, x: 0, y: 0, delay: 1, duration: 0.6, scrollTrigger: secondLineRef.current }
    )

    gsap.fromTo(
      thirdLineRef.current,
      { scale: 0, x: 4, y: 4 },
      { scale: 1, x: 0, y: 0, delay: 1.2, duration: 0.6, scrollTrigger: thirdLineRef.current }
    )
  }, [])

  return (
    <>
      <svg className="w-8 md:w-7 xl:w-8 h-8 md:h-7 xl:h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path ref={firstLineRef} d="M27.1403 16.9754C26.6469 16.9754 26.2336 16.602 26.1803 16.1087C25.8603 13.1754 24.2869 10.5354 21.8603 8.85538C21.4203 8.54872 21.3136 7.94872 21.6203 7.50872C21.9269 7.06872 22.5269 6.96205 22.9669 7.26872C25.8603 9.28205 27.7269 12.4287 28.1136 15.9087C28.1669 16.4421 27.7803 16.922 27.2469 16.9754C27.2069 16.9754 27.1803 16.9754 27.1403 16.9754Z" fill="#1C5BFC"/>
        <path ref={thirdLineRef} d="M4.98835 17.0403C4.96169 17.0403 4.92169 17.0403 4.89502 17.0403C4.36169 16.9869 3.97502 16.5069 4.02835 15.9736C4.38835 12.4936 6.22835 9.34694 9.09502 7.32027C9.52169 7.0136 10.135 7.12027 10.4417 7.54694C10.7484 7.98694 10.6417 8.58694 10.215 8.8936C7.81502 10.6003 6.25502 13.2403 5.96169 16.1603C5.90835 16.6669 5.48169 17.0403 4.98835 17.0403Z" fill="#1C5BFC"/>
        <path ref={secondLineRef} d="M21.3182 28.1351C19.6782 28.9217 17.9182 29.3217 16.0782 29.3217C14.1582 29.3217 12.3315 28.8951 10.6248 28.0284C10.1448 27.8017 9.95818 27.2151 10.1982 26.7351C10.4248 26.2551 11.0115 26.0684 11.4915 26.2951C12.3315 26.7217 13.2248 27.0151 14.1315 27.1884C15.3582 27.4284 16.6115 27.4417 17.8382 27.2284C18.7448 27.0684 19.6382 26.7884 20.4648 26.3884C20.9582 26.1617 21.5448 26.3484 21.7582 26.8417C21.9982 27.3217 21.8115 27.9084 21.3182 28.1351Z" fill="#1C5BFC"/>
        <path ref={firstDotRef} d="M16.0647 2.68359C13.998 2.68359 12.3047 4.36359 12.3047 6.44359C12.3047 8.52359 13.9847 10.2036 16.0647 10.2036C18.1447 10.2036 19.8247 8.52359 19.8247 6.44359C19.8247 4.36359 18.1447 2.68359 16.0647 2.68359Z" fill="#1C5BFC"/>
        <path ref={thirdDotRef} d="M6.72875 18.4961C4.66208 18.4961 2.96875 20.1761 2.96875 22.2561C2.96875 24.3361 4.64875 26.0161 6.72875 26.0161C8.80875 26.0161 10.4887 24.3361 10.4887 22.2561C10.4887 20.1761 8.79542 18.4961 6.72875 18.4961Z" fill="#1C5BFC"/>
        <path ref={secondDotRef} d="M25.2678 18.4961C23.2011 18.4961 21.5078 20.1761 21.5078 22.2561C21.5078 24.3361 23.1878 26.0161 25.2678 26.0161C27.3478 26.0161 29.0278 24.3361 29.0278 22.2561C29.0278 20.1761 27.3478 18.4961 25.2678 18.4961Z" fill="#1C5BFC"/>
      </svg>
    </>
  )
}

export default BetterTogether
