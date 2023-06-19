import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Earn = () => {
  gsap.registerPlugin(ScrollTrigger)
  const firstDotRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      firstDotRef.current,
      { scale: 0, x: 0, y: 10 },
      { scale: 1, x: 0, y: 0, delay: 0.2, duration: 1, scrollTrigger: firstDotRef.current }
    )
  }, [])

  return (
    <>
      <svg ref={firstDotRef} width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.6641 21.2258H18.5307C19.3974 21.2258 20.1174 20.4524 20.1174 19.5191C20.1174 18.3591 19.7041 18.1324 19.0241 17.8924L17.6774 17.4258V21.2258H17.6641Z" fill="#1C5BFC"/>
        <path d="M16.6215 2.53127C9.26155 2.55794 3.30155 8.54461 3.32821 15.9046C3.35488 23.2646 9.34155 29.2246 16.7015 29.1979C24.0615 29.1713 30.0215 23.1846 29.9949 15.8246C29.9682 8.46461 23.9815 2.51794 16.6215 2.53127ZM19.6749 15.9979C20.7149 16.3579 22.1149 17.1313 22.1149 19.5179C22.1149 21.5713 20.5015 23.2246 18.5282 23.2246H17.6615V23.9979C17.6615 24.5446 17.2082 24.9979 16.6615 24.9979C16.1149 24.9979 15.6615 24.5446 15.6615 23.9979V23.2246H15.1815C12.9949 23.2246 11.2215 21.3846 11.2215 19.1179C11.2215 18.5713 11.6749 18.1179 12.2215 18.1179C12.7682 18.1179 13.2215 18.5713 13.2215 19.1179C13.2215 20.2779 14.1015 21.2246 15.1815 21.2246H15.6615V16.7179L13.6482 15.9979C12.6082 15.6379 11.2082 14.8646 11.2082 12.4779C11.2082 10.4246 12.8215 8.77127 14.7949 8.77127H15.6615V7.99794C15.6615 7.45127 16.1149 6.99794 16.6615 6.99794C17.2082 6.99794 17.6615 7.45127 17.6615 7.99794V8.77127H18.1415C20.3282 8.77127 22.1015 10.6113 22.1015 12.8779C22.1015 13.4246 21.6482 13.8779 21.1015 13.8779C20.5549 13.8779 20.1015 13.4246 20.1015 12.8779C20.1015 11.7179 19.2215 10.7713 18.1415 10.7713H17.6615V15.2779L19.6749 15.9979Z" fill="#1C5BFC"/>
        <path d="M13.2266 12.4895C13.2266 13.6495 13.6399 13.8762 14.3199 14.1162L15.6666 14.5829V10.7695H14.7999C13.9332 10.7695 13.2266 11.5429 13.2266 12.4895Z" fill="#1C5BFC"/>
      </svg>
    </>
  )
}

export default Earn