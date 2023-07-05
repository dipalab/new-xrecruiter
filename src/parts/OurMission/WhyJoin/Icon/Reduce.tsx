import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Reduce = () => {
  gsap.registerPlugin(ScrollTrigger)
  const firstDotRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      firstDotRef.current,
      { scale: 0, x: -10, y: -10 },
      { scale: 1, x: 0, y: 0, delay: 0.2, duration: 1, scrollTrigger: firstDotRef.current }
    )
  }, [])

  return (
    <>
      <svg ref={firstDotRef} className="w-8 md:w-7 xl:w-8 h-8 md:h-7 xl:h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.5841 2.66797H10.4107C5.5574 2.66797 2.66406 5.5613 2.66406 10.4146V21.5746C2.66406 26.4413 5.5574 29.3346 10.4107 29.3346H21.5707C26.4241 29.3346 29.3174 26.4413 29.3174 21.588V10.4146C29.3307 5.5613 26.4374 2.66797 21.5841 2.66797ZM22.5041 19.108C22.5041 19.228 22.4774 19.348 22.4374 19.468C22.3441 19.6946 22.1574 19.8813 21.9307 19.9746C21.8107 20.028 21.6907 20.0413 21.5707 20.0413H19.0907C18.5707 20.0413 18.1574 19.628 18.1574 19.108C18.1574 18.588 18.5707 18.1746 19.0907 18.1746H19.3307L16.5174 15.3613L15.1574 17.388C14.9974 17.6146 14.7574 17.7746 14.4774 17.8013C14.1974 17.828 13.9307 17.7346 13.7307 17.5346L9.7574 13.5613C9.3974 13.2013 9.3974 12.6146 9.7574 12.2413C10.1174 11.868 10.7041 11.8813 11.0774 12.2413L14.2507 15.4146L15.6107 13.388C15.7707 13.1613 16.0107 13.0013 16.2907 12.9746C16.5841 12.948 16.8374 13.0413 17.0374 13.2413L20.6641 16.868V16.628C20.6641 16.108 21.0774 15.6946 21.5974 15.6946C22.1174 15.6946 22.5307 16.108 22.5307 16.628V19.108H22.5041Z" fill="#1C5BFC"/>
      </svg>
    </>
  )
}

export default Reduce
