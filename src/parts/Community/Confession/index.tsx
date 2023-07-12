import { useRef } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import { FadeXAnimation, FadeYAnimation } from '../../../animations/global'
import ConfessionImage from '../../../assets/images/community/confession-logo.png'
import SpotifyImage from '../../../assets/images/community/spotify.png'
import YoutubeImage from '../../../assets/images/community/youtube.png'
import MacbookImage from '../../../assets/images/community/macbook.png'
import IphoneImage from '../../../assets/images/community/iphone.png'
import { Button } from '../../../components'

const Confession = () => {
  const ConfessionImageRef = useRef(null)
  const TitleRef = useRef(null)
  const MediaRef = useRef(null)
  const ButtonRef = useRef(null)
  const IphoneImageRef = useRef(null)
  const MabcookImageRef = useRef(null)

  FadeYAnimation({ animationRef: ConfessionImageRef, scrollTriggerRef: ConfessionImageRef, initialValue: 90, delayValue: 0, durationValue: 1 })
  FadeYAnimation({ animationRef: TitleRef, scrollTriggerRef: TitleRef, initialValue: 90, delayValue: 0.3, durationValue: 1 })
  FadeYAnimation({ animationRef: MediaRef, scrollTriggerRef: MediaRef, initialValue: 90, delayValue: 0.6, durationValue: 1 })
  FadeYAnimation({ animationRef: ButtonRef, scrollTriggerRef: ButtonRef, initialValue: 90, delayValue: 0.9, durationValue: 1 })
  FadeXAnimation({ animationRef: MabcookImageRef, scrollTriggerRef: MabcookImageRef, initialValue: 300, delayValue: 0.8, durationValue: 1.5 })
  FadeYAnimation({ animationRef: IphoneImageRef, scrollTriggerRef: MabcookImageRef, initialValue: -100, delayValue: 1.5, durationValue: 1.5 })

  return (
    <>
      <div className="bg-[#FAFBFC] py-16 md:py-24 xl:py-[81px]">
        <div className="px-6 lg:px-10 xl:px-0 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-2">
            <div className="flex flex-col justify-center">
              <div ref={ConfessionImageRef} className="w-auto h-[88px] lg:h-[127px] mb-6 flex justify-center md:justify-start">
                <LazyLoadImage
                  src={ConfessionImage}
                  className="w-auto h-full object-cover"
                  alt=""
                />
              </div>

              <p ref={TitleRef} className="text-base text-neutral-60 font-cera-pro-regular">Subscribe to the worlds fastest growing recruitment podcast! Blake and Declan interview a guest every week and discover new ways of prospecting, interviewing, networking and how to build a successful recruitment desk.</p>

              <div ref={MediaRef} className="mt-8 xl:mt-10 text-center sm:text-left">
                <p className="text-base text-neutral-100 font-cera-pro-medium">Play on</p>
                <div className="flex items-center justify-center sm:justify-start space-x-4 mt-4">
                  <div className="w-auto h-6 md:h-8">
                    <LazyLoadImage
                      src={SpotifyImage}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="w-auto h-6 md:h-8">
                    <LazyLoadImage
                      src={YoutubeImage}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div ref={ButtonRef} className="mt-8 xl:mt-10 flex justify-center sm:justify-start">
                <a href="https://open.spotify.com/show/4d7TiqHZ6ItKuWZkMCKsyO?si=71f81dc364654708">
                  <Button classNames="!w-full sm:!w-auto">Subscribe</Button>
                </a>
              </div>
            </div>

            <div className="w-full h-full flex items-center sm:justify-end md:justify-start">
              <div className="w-auto sm:h-[404px] xl:h-[490px] relative">
                <div ref={IphoneImageRef} className="z-10 relative">
                  <div className="w-[88px] sm:w-[130px] xl:w-[160px] h-[125px] sm:h-[190px] xl:h-[230px] absolute left-20 md:left-28 xl:left-32">
                    <LazyLoadImage
                      src={IphoneImage}
                      className="w-full h-full"
                      alt=""
                    />
                  </div>
                </div>

                <div>
                  <div ref={MabcookImageRef} className="w-[401px] sm:w-[580px] xl:w-[690px] h-full sm:h-[390px] xl:h-[490px] md:absolute left-0">
                    <LazyLoadImage
                      src={MacbookImage}
                      className="w-full h-full scale-100 md:scale-105 xl:scale-100"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Confession
