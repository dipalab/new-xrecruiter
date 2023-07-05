import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Culture = () => {
  gsap.registerPlugin(ScrollTrigger)
  const firstDotRef = useRef(null)
  const secondDotRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      firstDotRef.current,
      { scale: 0, x: 6, y: 6 },
      { scale: 1, x: 0, y: 0, delay: 0.2, duration: 1, scrollTrigger: firstDotRef.current }
    )
    gsap.fromTo(
      secondDotRef.current,
      { scale: 0, x: 6, y: 6 },
      { scale: 1, x: 0, y: 0, delay: 0.8, duration: 1, scrollTrigger: firstDotRef.current }
    )
  }, [])

  return (
    <>
      <svg className="w-8 md:w-7 xl:w-8 h-8 md:h-7 xl:h-8" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path ref={firstDotRef} d="M25.7266 13.2148C24.2199 13.2148 22.8732 13.9482 22.0332 15.0682C21.1932 13.9482 19.8466 13.2148 18.3399 13.2148C15.7932 13.2148 13.7266 15.2948 13.7266 17.8548C13.7266 18.8415 13.8866 19.7615 14.1532 20.6015C15.4599 24.7482 19.5132 27.2415 21.5132 27.9215C21.7932 28.0148 22.2599 28.0148 22.5399 27.9215C24.5399 27.2415 28.5932 24.7615 29.8999 20.6015C30.1799 19.7482 30.3266 18.8415 30.3266 17.8548C30.3399 15.2948 28.2732 13.2148 25.7266 13.2148Z" fill="#1C5BFC"/>
        <path ref={secondDotRef} d="M28.3281 11.1234C28.3281 11.4301 28.0215 11.6301 27.7281 11.5501C25.9281 11.0834 23.9548 11.4701 22.4615 12.5367C22.1681 12.7501 21.7681 12.7501 21.4881 12.5367C20.4348 11.7634 19.1548 11.3367 17.8081 11.3367C14.3681 11.3367 11.5681 14.1501 11.5681 17.6167C11.5681 21.3767 13.3681 24.1901 15.1815 26.0701C15.2748 26.1634 15.1948 26.3234 15.0748 26.2701C11.4348 25.0301 3.32812 19.8834 3.32812 11.1234C3.32812 7.25672 6.43479 4.13672 10.2748 4.13672C12.5548 4.13672 14.5681 5.23005 15.8348 6.92339C17.1148 5.23005 19.1281 4.13672 21.3948 4.13672C25.2215 4.13672 28.3281 7.25672 28.3281 11.1234Z" fill="#1C5BFC"/>
      </svg>
    </>
  )
}

export default Culture
