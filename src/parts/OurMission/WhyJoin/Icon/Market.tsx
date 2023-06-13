import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Market = () => {
  gsap.registerPlugin(ScrollTrigger)
  const firstDotRef = useRef(null)
  const secondDotRef = useRef(null)
  const thirdDotRef = useRef(null)
  const fourthDotRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      firstDotRef.current,
      { scale: 0, x: 3, y: 25 },
      { scale: 1, x: 0, y: 0, delay: 0.2, duration: 1, scrollTrigger: firstDotRef.current }
    )
    gsap.fromTo(
      secondDotRef.current,
      { scale: 0, x: 3, y: 25 },
      { scale: 1, x: 0, y: 0, delay: 0.5, duration: 1, scrollTrigger: secondDotRef.current }
    )
    gsap.fromTo(
      thirdDotRef.current,
      { scale: 0, x: 3, y: 25 },
      { scale: 1, x: 0, y: 0, delay: 0.8, duration: 1, scrollTrigger: thirdDotRef.current }
    )
    gsap.fromTo(
      fourthDotRef.current,
      { scale: 0, x: 10, y: 25 },
      { scale: 1, x: 0, y: 0, delay: 0.7, duration: 1, scrollTrigger: thirdDotRef.current }
    )
  }, [])

  return (
    <>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path ref={fourthDotRef} d="M29.3307 29.332H2.66406C2.1174 29.332 1.66406 28.8787 1.66406 28.332C1.66406 27.7854 2.1174 27.332 2.66406 27.332H29.3307C29.8774 27.332 30.3307 27.7854 30.3307 28.332C30.3307 28.8787 29.8774 29.332 29.3307 29.332Z" fill="#1C5BFC"/>
        <path ref={secondDotRef} d="M13 5.33464V29.3346H19V5.33464C19 3.86797 18.4 2.66797 16.6 2.66797H15.4C13.6 2.66797 13 3.86797 13 5.33464Z" fill="#1C5BFC"/>
        <path ref={firstDotRef} d="M4 13.3346V29.3346H9.33333V13.3346C9.33333 11.868 8.8 10.668 7.2 10.668H6.13333C4.53333 10.668 4 11.868 4 13.3346Z" fill="#1C5BFC"/>
        <path ref={thirdDotRef} d="M22.6641 19.9987V29.332H27.9974V19.9987C27.9974 18.532 27.4641 17.332 25.8641 17.332H24.7974C23.1974 17.332 22.6641 18.532 22.6641 19.9987Z" fill="#1C5BFC"/>
      </svg>
    </>
  )
}

export default Market
