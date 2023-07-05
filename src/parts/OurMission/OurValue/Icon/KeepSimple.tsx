import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const KeepSimple = () => {
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
        <path ref={firstDotRef} d="M15.9974 2.66797C8.6374 2.66797 2.66406 8.6413 2.66406 16.0013C2.66406 23.3613 8.6374 29.3346 15.9974 29.3346C23.3574 29.3346 29.3307 23.3613 29.3307 16.0013C29.3307 8.6413 23.3574 2.66797 15.9974 2.66797ZM15.9974 19.3346C14.1574 19.3346 12.6641 17.8413 12.6641 16.0013C12.6641 14.1613 14.1574 12.668 15.9974 12.668C17.8374 12.668 19.3307 14.1613 19.3307 16.0013C19.3307 17.8413 17.8374 19.3346 15.9974 19.3346Z" fill="#1C5BFC"/>
      </svg>
    </>
  )
}

export default KeepSimple
