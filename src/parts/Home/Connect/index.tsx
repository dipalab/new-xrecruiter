import { useRef } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import { TitleText } from '../../../components'
import { FadeXAnimation } from '../../../animations/global'
import ConnectImage from '../../../assets/images/home/connect.png'
import ConnectAvaImage from '../../../assets/images/home/connect-ava.png'

const Connect = () => {
  const ImageRef = useRef(null)

  FadeXAnimation({ animationRef: ImageRef, scrollTriggerRef: ImageRef, initialValue: 500, delayValue: 0.5, durationValue: 1.5 })

  return (
    <>
      <div className="bg-white py-16 md:pt-[80px] md:pb-[88px] xl:py-[120px]">
        <div className="px-6 lg:px-10 xl:px-0 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6">
            <div className="flex flex-col justify-center">
              <TitleText classNames="!text-left">Connect <span className="inline-flex w-[58px] md:w-[72px] h-6 md:h-8 relative"><img src={ConnectAvaImage} alt="" className="absolute -bottom-2 w-auto h-8 md:h-10" /></span>, Grow and Succeed on your own terms.</TitleText>
              <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="mt-6 text-base text-neutral-60 font-cera-pro-regular pr-0 lg:pr-2 xl:pr-5">Whether you aspire to create a lifestyle business or establish a global empire, xrecruiter can aid you in realizing your goals. With xrecruiter as your ally, you can experience various benefits such as increased independence, financial gains, and improved organizational structure, culture, and community. Trust xrecruiter to be your partner in achieving success.</p>
            </div>
            <div className="w-full flex justify-end">
              <div ref={ImageRef} className="max-w-[438px] xl:max-w-[512px]">
                <LazyLoadImage
                  src={ConnectImage}
                  className="w-full h-[323px] md:h-[433px] xl:h-[506px] object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Connect
