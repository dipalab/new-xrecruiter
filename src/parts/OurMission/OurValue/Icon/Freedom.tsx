import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Freedom = () => {
  gsap.registerPlugin(ScrollTrigger)
  const firstDotRef = useRef(null)
  const secondDotRef = useRef(null)
  const thirdDotRef = useRef(null)
  const fourthDotRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      firstDotRef.current,
      { scale: 0, x: 6, y: 6 },
      { scale: 1, x: 0, y: 0, delay: 0, duration: 0.8, scrollTrigger: firstDotRef.current }
    )
    gsap.fromTo(
      secondDotRef.current,
      { scale: 0, x: 6, y: 6 },
      { scale: 1, x: 0, y: 0, delay: 0.3, duration: 0.8, scrollTrigger: secondDotRef.current }
    )
    gsap.fromTo(
      thirdDotRef.current,
      { scale: 0, x: 6, y: 6 },
      { scale: 1, x: 0, y: 0, delay: 0.6, duration: 0.8, scrollTrigger: thirdDotRef.current }
    )
    gsap.fromTo(
      fourthDotRef.current,
      { scale: 0, x: 6, y: 6 },
      { scale: 1, x: 0, y: 0, delay: 0.8, duration: 0.8, scrollTrigger: fourthDotRef.current }
    )
  }, [])

  return (
    <>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path ref={firstDotRef} d="M22.0182 6.6774L19.4049 4.06406C17.5382 2.1974 14.4716 2.1974 12.6049 4.06406L9.99156 6.6774C9.47156 7.1974 9.47156 8.05073 9.99156 8.57073L15.0716 13.6507C15.5916 14.1707 16.4316 14.1707 16.9516 13.6507L22.0316 8.57073C22.5382 8.05073 22.5382 7.1974 22.0182 6.6774Z" fill="#1C5BFC"/>
        <path ref={fourthDotRef} d="M6.68521 9.98766L4.07187 12.601C2.20521 14.4677 2.20521 17.5343 4.07187 19.401L6.68521 22.0143C7.20521 22.5343 8.04521 22.5343 8.56521 22.0143L13.6452 16.9343C14.1652 16.4143 14.1652 15.5743 13.6452 15.0543L8.57854 9.98766C8.05854 9.46766 7.20521 9.46766 6.68521 9.98766Z" fill="#1C5BFC"/>
        <path ref={secondDotRef} d="M27.9399 12.601L25.3266 9.98766C24.8066 9.46766 23.9666 9.46766 23.4466 9.98766L18.3666 15.0677C17.8466 15.5877 17.8466 16.4277 18.3666 16.9477L23.4466 22.0277C23.9666 22.5477 24.8066 22.5477 25.3266 22.0277L27.9399 19.4143C29.8066 17.5343 29.8066 14.4677 27.9399 12.601Z" fill="#1C5BFC"/>
        <path ref={thirdDotRef} d="M9.99325 25.3148L12.6066 27.9282C14.4732 29.7948 17.5399 29.7948 19.4066 27.9282L22.0199 25.3148C22.5399 24.7948 22.5399 23.9548 22.0199 23.4348L16.9399 18.3548C16.4199 17.8348 15.5799 17.8348 15.0599 18.3548L9.97991 23.4348C9.47325 23.9415 9.47325 24.7948 9.99325 25.3148Z" fill="#1C5BFC"/>
      </svg>
    </>
  )
}

export default Freedom
