import { useRef } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../../components'
import LineAnimation from '../../animations/footer/LineAnimation'
import Logo from '../../assets/logo-white-full.svg'

const Footer = () => {
  const ctaRef = useRef(null)
  const firstLine = useRef(null)
  const secondLine = useRef(null)

  LineAnimation({ animationRef: firstLine, scrollTriggerRef: ctaRef, initialValue: 800, durationValue: 6 })
  LineAnimation({ animationRef: secondLine, scrollTriggerRef: ctaRef, initialValue: 800, durationValue: 5 })

  return (
    <>
      <footer className="bg-[#00081D] rounded-t-[40px] lg:rounded-t-[80px] relative overflow-hidden max-w-[1920px] mx-auto">
        <div className="absolute w-full h-full">
          <div className="absolute -top-20 -left-[104px] md:-top-9 md:-left-9 xl:top-0 xl:left-0">
            <svg className="scale-[0.8] md:scale-95 xl:scale-100 w-[211px] h-[245px]" viewBox="0 0 211 245" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect ref={firstLine} x="-94" y="-60" width="304" height="304" rx="152" stroke="url(#paint0_radial_36119_5532)" strokeWidth="2"/>
              <defs>
                <radialGradient id="paint0_radial_36119_5532" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(248.207 288.466) rotate(-121.131) scale(408.261)">
                  <stop stopColor="#0074D9"/>
                  <stop offset="1" stopColor="#0074D9" stopOpacity="0"/>
                </radialGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute top-[50px] md:top-[40px] xl:top-[86px] -right-28 md:-right-10 xl:right-0">
            <svg className="scale-[0.8] xl:scale-100 w-[173px] h-[290px]" viewBox="0 0 173 290" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path ref={secondLine} d="M289 145C289 224.529 224.529 289 145 289C65.471 289 1 224.529 1 145C1 65.471 65.471 1 145 1C224.529 1 289 65.471 289 145Z" stroke="url(#paint0_radial_36119_5502)" strokeWidth="2"/>
              <defs>
                <radialGradient id="paint0_radial_36119_5502" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-27.0227 -19.4432) rotate(57.0948) scale(346.985)">
                  <stop stopColor="#6CE99F"/>
                  <stop offset="1" stopColor="#6CE99F" stopOpacity="0"/>
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div ref={ctaRef} className="relative mx-auto max-w-7xl px-6 md:px-10 xl:px-0 py-16 md:pb-12 md:pt-[96px] xl:pb-10 xl:pt-[120px]">
          <div className="text-center">
            <p className="text-2xl leading-9 md:text-[32px] xl:text-[40px] md:leading-[40px] xl:leading-[56px] font-cera-pro-medium text-white mb-8 md:mb-10">The smartest recruiters are partnering with <br className="hidden md:block" /> xrecruiter and so should you.</p>
            <Button>Apply Now</Button>
          </div>

          <div className="pt-8 md:pt-14 xl:pt-16 mt-12 md:mt-16 xl:mt-20 border-t border-[#FFFFFF33] flex flex-col items-center md:items-start md:flex-row md:justify-between">
            <div className="flex flex-col items-center md:items-start">
              <img
                className="block h-8 w-auto"
                src={Logo}
                alt="Your Company"
                loading="lazy"
              />
              <p className="mt-3 md:mt-6 text-xs md:text-sm text-white font-cera-pro-regular">Powering the Next Generation of Recruiters</p>
            </div>

            <div className="flex space-x-6 md:space-x-10 mt-4 md:mt-0">
              <Link to="">
                <span className="text-sm md:text-base text-white font-cera-pro-regular">Our Mission</span>
              </Link>
              <Link to="">
                <span className="text-sm md:text-base text-white font-cera-pro-regular">Community</span>
              </Link>
            </div>
          </div>

          <div className="mt-8 md:mt-14 xl:mt-20 md:flex md:items-center md:justify-start text-center md:text-left">
            <p className="text-sm md:text-base font-cera-pro-regular text-[#FFFFFFCC]">&copy; { new Date().getFullYear() }, Xrecruiter, All right reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
