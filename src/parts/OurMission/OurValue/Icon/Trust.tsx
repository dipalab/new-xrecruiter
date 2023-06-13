import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Trust = () => {
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
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path ref={firstDotRef} d="M15.9583 2.66797C8.59833 2.66797 2.625 8.6413 2.625 16.0013C2.625 23.3613 8.59833 29.3346 15.9583 29.3346C23.3183 29.3346 29.2917 23.3613 29.2917 16.0013C29.2917 8.6413 23.3317 2.66797 15.9583 2.66797ZM23.1983 21.908C21.5583 24.268 18.865 25.668 15.9983 25.668C13.1317 25.668 10.4383 24.268 8.79833 21.908C8.47833 21.4546 8.59833 20.828 9.05167 20.5213C9.505 20.2013 10.1317 20.3213 10.4383 20.7746C11.705 22.588 13.785 23.6813 15.9983 23.6813C18.2117 23.6813 20.2917 22.6013 21.5583 20.7746C21.8783 20.3213 22.4917 20.2146 22.945 20.5213C23.4117 20.828 23.5183 21.4546 23.1983 21.908Z" fill="#1C5BFC"/>
      </svg>
    </>
  )
}

export default Trust
