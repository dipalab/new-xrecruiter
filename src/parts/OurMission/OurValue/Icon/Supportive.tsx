import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Supportive = () => {
  gsap.registerPlugin(ScrollTrigger)
  const firstDotRef = useRef(null)
  const secondDotRef = useRef(null)
  const thirdDotRef = useRef(null)
  const fourthDotRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      [firstDotRef.current, secondDotRef.current],
      { scale: 0, x: 6, y: 6 },
      { scale: 1, x: 0, y: 0, delay: 0, duration: 0.8, scrollTrigger: firstDotRef.current }
    )
    gsap.fromTo(
      [thirdDotRef.current, fourthDotRef.current],
      { scale: 0, x: 6, y: 6 },
      { scale: 1, x: 0, y: 0, delay: 0.5, duration: 0.8, scrollTrigger: thirdDotRef.current }
    )
  }, [])

  return (
    <>
      <svg className="w-8 md:w-7 xl:w-8 h-8 md:h-7 xl:h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path ref={firstDotRef} d="M11.9974 2.66797C8.50406 2.66797 5.66406 5.50797 5.66406 9.0013C5.66406 12.428 8.34406 15.2013 11.8374 15.3213C11.9441 15.308 12.0507 15.308 12.1307 15.3213C12.1574 15.3213 12.1707 15.3213 12.1974 15.3213C12.2107 15.3213 12.2107 15.3213 12.2241 15.3213C15.6374 15.2013 18.3174 12.428 18.3307 9.0013C18.3307 5.50797 15.4907 2.66797 11.9974 2.66797Z" fill="#1C5BFC"/>
        <path ref={secondDotRef} d="M18.7772 18.8639C15.0572 16.3839 8.99052 16.3839 5.24385 18.8639C3.55052 19.9972 2.61719 21.5306 2.61719 23.1706C2.61719 24.8106 3.55052 26.3306 5.23052 27.4506C7.09719 28.7039 9.55052 29.3306 12.0039 29.3306C14.4572 29.3306 16.9105 28.7039 18.7772 27.4506C20.4572 26.3172 21.3905 24.7972 21.3905 23.1439C21.3772 21.5039 20.4572 19.9839 18.7772 18.8639Z" fill="#1C5BFC"/>
        <path ref={thirdDotRef} d="M26.6525 9.7842C26.8658 12.3709 25.0258 14.6375 22.4792 14.9442C22.4658 14.9442 22.4658 14.9442 22.4525 14.9442H22.4125C22.3325 14.9442 22.2525 14.9442 22.1858 14.9709C20.8925 15.0375 19.7058 14.6242 18.8125 13.8642C20.1858 12.6375 20.9725 10.7975 20.8125 8.79753C20.7192 7.71753 20.3458 6.73086 19.7858 5.89086C20.2925 5.63753 20.8792 5.47753 21.4792 5.4242C24.0925 5.19753 26.4258 7.1442 26.6525 9.7842Z" fill="#1C5BFC"/>
        <path ref={fourthDotRef} d="M29.3229 22.1218C29.2163 23.4152 28.3896 24.5352 27.0029 25.2952C25.6696 26.0285 23.9896 26.3752 22.3229 26.3352C23.2829 25.4685 23.8429 24.3885 23.9496 23.2418C24.0829 21.5885 23.2963 20.0018 21.7229 18.7352C20.8296 18.0285 19.7896 17.4685 18.6562 17.0552C21.6029 16.2018 25.3096 16.7752 27.5896 18.6152C28.8163 19.6018 29.4429 20.8418 29.3229 22.1218Z" fill="#1C5BFC"/>
      </svg>
    </>
  )
}

export default Supportive
