import { LazyLoadImage } from 'react-lazy-load-image-component'
import { DescriptionText, TitleText } from '../../../components'
import LogoImage from '../../../assets/logo-white-full-original.svg'
import IndustryTalentThumb from '../../../assets/images/home/industry-talent-thumb.png'
import BlendedEmploymentThumb from '../../../assets/images/home/blended-employment-thumb.png'
import VenditoThumb from '../../../assets/images/home/vendito-thumb.png'
import HalisoftThumb from '../../../assets/images/home/halisoft-thumb.png'

const BetterTogether = () => {
  return (
    <>
      <div className="relative bg-[#4140FC]">
        <div className="relative py-16 md:py-24 xl:py-[120px]">
          <div className="text-center px-6 lg:px-10 xl:px-0 max-w-[960px] mx-auto">
            <TitleText classNames="!text-white">#BetterTogether 🚀</TitleText>
            <DescriptionText classNames="!text-base !font-cera-pro-regular !text-[#FFFFFFCC] !flex !justify-center !items-center !space-x-[8.5px] !mt-4 md:!mt-[18px]">
              <span>Brands powered by</span>
              <LazyLoadImage
                src={LogoImage}
                className="w-auto h-5"
                alt=""
              />
            </DescriptionText>
          </div>

          <div className="max-w-[1920px] mt-[44px] md:mt-14 xl:mt-16 scrollbar-hide">
            <div className="w-full flex space-x-4 md:space-x-6 overflow-x-scroll scrollbar-hide">
              <div>
                <div className="w-[215px] h-[120px] md:w-[270px] md:h-[150px] xl:w-[370px] xl:h-[208px] aspect-video bg-gray-300">
                  <LazyLoadImage
                    src={IndustryTalentThumb}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="w-[215px] h-[120px] md:w-[270px] md:h-[150px] xl:w-[370px] xl:h-[208px] aspect-video bg-gray-300">
                  <LazyLoadImage
                    src={BlendedEmploymentThumb}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="w-[215px] h-[120px] md:w-[270px] md:h-[150px] xl:w-[370px] xl:h-[208px] aspect-video bg-gray-300">
                  <LazyLoadImage
                    src={VenditoThumb}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="w-[215px] h-[120px] md:w-[270px] md:h-[150px] xl:w-[370px] xl:h-[208px] aspect-video bg-gray-300">
                  <LazyLoadImage
                    src={HalisoftThumb}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="w-[215px] h-[120px] md:w-[270px] md:h-[150px] xl:w-[370px] xl:h-[208px] aspect-video bg-gray-300">
                  <LazyLoadImage
                    src={IndustryTalentThumb}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="w-[215px] h-[120px] md:w-[270px] md:h-[150px] xl:w-[370px] xl:h-[208px] aspect-video bg-gray-300">
                  <LazyLoadImage
                    src={BlendedEmploymentThumb}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex space-x-4 md:space-x-6 overflow-x-scroll scrollbar-hide mt-[15.5px] md:mt-[23.5px] xl:mt-10">
              <div>
                <div className="w-[215px] h-[120px] md:w-[270px] md:h-[150px] xl:w-[370px] xl:h-[208px] aspect-video bg-gray-300">
                  <LazyLoadImage
                    src={IndustryTalentThumb}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="w-[215px] h-[120px] md:w-[270px] md:h-[150px] xl:w-[370px] xl:h-[208px] aspect-video bg-gray-300">
                  <LazyLoadImage
                    src={BlendedEmploymentThumb}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="w-[215px] h-[120px] md:w-[270px] md:h-[150px] xl:w-[370px] xl:h-[208px] aspect-video bg-gray-300">
                  <LazyLoadImage
                    src={VenditoThumb}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="w-[215px] h-[120px] md:w-[270px] md:h-[150px] xl:w-[370px] xl:h-[208px] aspect-video bg-gray-300">
                  <LazyLoadImage
                    src={HalisoftThumb}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="w-[215px] h-[120px] md:w-[270px] md:h-[150px] xl:w-[370px] xl:h-[208px] aspect-video bg-gray-300">
                  <LazyLoadImage
                    src={IndustryTalentThumb}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="w-[215px] h-[120px] md:w-[270px] md:h-[150px] xl:w-[370px] xl:h-[208px] aspect-video bg-gray-300">
                  <LazyLoadImage
                    src={BlendedEmploymentThumb}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BetterTogether
