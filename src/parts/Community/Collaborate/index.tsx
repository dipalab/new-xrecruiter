
import { useRef } from 'react'

import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { FadeYAnimation } from '../../../animations/global'
import { CheckedBadge, TitleText } from '../../../components'

import CommentCard from './CommentCard'
import Reaction from './Reaction'
import BlackeAvaImage from '../../../assets/images/community/collaborate/blake.png'
import DeclanAvaImage from '../../../assets/images/community/collaborate/declan.png'
import FirstAvaImage from '../../../assets/images/community/collaborate/ava-1.png'
import SecondAvaImage from '../../../assets/images/community/collaborate/ava-2.png'
import ThirdAvaImage from '../../../assets/images/community/collaborate/ava-3.png'
import FirstCandidateAvaImage from '../../../assets/images/community/collaborate/candidate-1.png'
import SecondCandidateAvaImage from '../../../assets/images/community/collaborate/candidate-2.png'
import ThirdCandidateAvaImage from '../../../assets/images/community/collaborate/candidate-3.png'
import IdeaImage from '../../../assets/images/community/collaborate/idea.png'

const CommentList = [
  {
    id: 1,
    author: {
      name: 'Blake Thompson',
      ava: BlackeAvaImage
    },
    body: 'Hey Guys, Struggling to fill this job. Anyone have candidates that might be suitable? Let’s split fee.',
    like: 3,
    rocket: 5,
    created_at: 'Commented 10 min ago'
  },
  {
    id: 2,
    author: {
      name: 'Declan Kluver',
      ava: DeclanAvaImage
    },
    body: 'I filled a few roles just recently with a similar requirement, I should have a few candidates for you!',
    like: 2,
    rocket: 4,
    created_at: 'Commented 8 min ago'
  }
]

const Collaborate = () => {
  const TitleRef = useRef(null)
  const ButtonRef = useRef(null)
  const FirstCardRef = useRef(null)
  const SecondCardRef = useRef(null)
  const ThirdCardRef = useRef(null)

  FadeYAnimation({ animationRef: TitleRef, scrollTriggerRef: TitleRef, initialValue: 100, delayValue: 0, durationValue: 1 })
  FadeYAnimation({ animationRef: ButtonRef, scrollTriggerRef: ButtonRef, initialValue: 100, delayValue: 0.6, durationValue: 1 })
  FadeYAnimation({ animationRef: FirstCardRef, scrollTriggerRef: TitleRef, initialValue: 100, delayValue: 0.2, durationValue: 1 })
  FadeYAnimation({ animationRef: SecondCardRef, scrollTriggerRef: TitleRef, initialValue: 100, delayValue: 0.4, durationValue: 1 })
  FadeYAnimation({ animationRef: ThirdCardRef, scrollTriggerRef: TitleRef, initialValue: 100, delayValue: 0.6, durationValue: 1 })

  return (
    <>
      <div className="relative bg-white">
        <div className="relative py-16 md:py-24 xl:pb-[112px] xl:pt-[120px]">
          <div className="px-6 lg:px-10 xl:px-0 mx-auto max-w-7xl">
            <div className="text-center max-w-[830px] xl:max-w-[980px] mx-auto">
              <TitleText>Collaborate on jobs around the world</TitleText>
              <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="text-base text-neutral-60 font-cera-pro-regular mt-4">Supercharge your agency{"'"}s growth potential by diving into the XR marketplace. Gain access to an exclusive platform where you can scout live job opportunities posted by other recruiters, agree on split fees through a simple smart contract or join forces with other recruiters when submitting a bid for a preferred supplier agreement. XR marketplace allows you to find other like-minded agency owners who can complement your skillset, industry niche and recruitment style so you can start recruiting around the globe.</p>
            </div>

            <div className="mt-4 xl:mt-6 relative">
              {/* line 1 */}
              <div className="grid grid-cols-1">
                <div className="w-1/2 pl-[14px] md:pl-6">
                  <svg className="hidden xl:block" width="570" height="148" viewBox="0 0 570 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M569 0V49.4063C569 62.6611 558.255 73.4062 545 73.4062H25C11.7452 73.4062 1 84.1514 1 97.4062V148" stroke="#CBD2D9"/>
                  </svg>
                  <svg className="hidden sm:block xl:hidden" width="466" height="96" viewBox="0 0 466 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M465 0V23.6149C465 36.8697 454.255 47.6149 441 47.6149H25C11.7452 47.6149 1 58.36 1 71.6149V96" stroke="#CBD2D9"/>
                  </svg>
                  <svg className="sm:hidden" width="153" height="72" viewBox="0 0 153 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M152 0V19.7111C152 28.5477 144.837 35.7111 136 35.7111H17C8.16344 35.7111 1 42.8746 1 51.7111V72" stroke="#CBD2D9"/>
                  </svg>
                </div>
              </div>

              {/* card 1 */}
              <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-2 md:gap-6">
                <div className="relative col-span-3 lg:col-span-1 bg-white divide-y divide-neutral-30 border border-neutral-30 rounded-[14px] md:rounded-3xl shadow-[0px_4px_40px_rgba(0,_0,_0,_0.08)]">
                  {/* heading */}
                  <div className="pb-2 md:pb-3.5 xl:pb-4 pt-2.5 md:pt-4 xl:pt-5">
                    <div className="flex items-center justify-between px-[14px] md:px-5 xl:px-6">
                      <p className="text-[9.5px] leading-[13px] md:text-[13px] md:leading-5 xl:text-base xl:leading-6 font-cera-pro-medium text-neutral-100">Business Development Manager - Job #673459</p>
                      <CheckedBadge title="Open" />
                    </div>
                  </div>

                  {/* comment */}
                  {CommentList.map((item) => (
                    <CommentCard comment={item} key={item.id} />
                  ))}
                </div>

                <div className="col-span-2 lg:col-span-1 hidden md:flex items-center">
                  <div className="mr-4">
                    <ArrowRightIcon className="w-6 h-6 text-blue-primary-main" />
                  </div>
                  <p className="text-xs md:text-base lg:text-lg font-cera-pro-regular text-neutral-100">Help others fill vacancies or seek assistance with a difficult role you’ve landed. Discover true collaboration by leveraging the community.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 relative">
                <div className="absolute w-full h-full">
                  {/* line 2 */}
                  <div className="pl-[14px] md:pl-6">
                    <svg className="hidden xl:block" width="266" height="349" viewBox="0 0 266 349" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 0V324C1 337.255 11.7452 348 25 348H266" stroke="#CBD2D9"/>
                    </svg>
                    <svg className="hidden sm:block xl:hidden" width="215" height="349" viewBox="0 0 215 349" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 0V324C1 337.255 11.7452 348 25 348H215" stroke="#CBD2D9"/>
                    </svg>
                    <svg className="sm:hidden" width="25" height="272" viewBox="0 0 25 272" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 0V255C1 263.837 8.16344 271 17 271H25" stroke="#CBD2D9"/>
                    </svg>
                  </div>

                  {/* line 3 */}
                  <div className="absolute bottom-0 xl:-bottom-[65px] right-0 pr-[14px] md:pr-6">
                    <svg className="hidden xl:block" width="267" height="395" viewBox="0 0 267 395" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M266 394.5V281" stroke="#CBD2D9"/>
                      <path d="M0 1H242C255.255 1 266 11.7452 266 25V257" stroke="#CBD2D9"/>
                    </svg>
                    <svg className="hidden sm:block xl:hidden" width="216" height="257" viewBox="0 0 216 257" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 1H191C204.255 1 215 11.7452 215 25V257" stroke="#CBD2D9"/>
                    </svg>
                    <svg className="sm:hidden" width="25" height="203" viewBox="0 0 25 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 1H8C16.8366 1 24 8.16344 24 17V203" stroke="#CBD2D9"/>
                    </svg>
                  </div>
                </div>

                <div className="absolute w-full h-full">
                  <div className="flex items-center md:ml-1.5 mt-24 sm:mt-20 md:mt-6">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-neutral-30 bg-white flex items-center justify-center mr-3">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3333 18.9596H6.66667C3.625 18.9596 1.875 17.2096 1.875 14.168V5.83464C1.875 2.79297 3.625 1.04297 6.66667 1.04297H13.3333C16.375 1.04297 18.125 2.79297 18.125 5.83464V14.168C18.125 17.2096 16.375 18.9596 13.3333 18.9596ZM6.66667 2.29297C4.28333 2.29297 3.125 3.4513 3.125 5.83464V14.168C3.125 16.5513 4.28333 17.7096 6.66667 17.7096H13.3333C15.7167 17.7096 16.875 16.5513 16.875 14.168V5.83464C16.875 3.4513 15.7167 2.29297 13.3333 2.29297H6.66667Z" fill="#98A5B3"/>
                        <path d="M15.4193 7.70833H13.7526C12.4859 7.70833 11.4609 6.68333 11.4609 5.41667V3.75C11.4609 3.40833 11.7443 3.125 12.0859 3.125C12.4276 3.125 12.7109 3.40833 12.7109 3.75V5.41667C12.7109 5.99167 13.1776 6.45833 13.7526 6.45833H15.4193C15.7609 6.45833 16.0443 6.74167 16.0443 7.08333C16.0443 7.425 15.7609 7.70833 15.4193 7.70833Z" fill="#98A5B3"/>
                        <path d="M9.9974 11.457H6.66406C6.3224 11.457 6.03906 11.1737 6.03906 10.832C6.03906 10.4904 6.3224 10.207 6.66406 10.207H9.9974C10.3391 10.207 10.6224 10.4904 10.6224 10.832C10.6224 11.1737 10.3391 11.457 9.9974 11.457Z" fill="#98A5B3"/>
                        <path d="M13.3307 14.793H6.66406C6.3224 14.793 6.03906 14.5096 6.03906 14.168C6.03906 13.8263 6.3224 13.543 6.66406 13.543H13.3307C13.6724 13.543 13.9557 13.8263 13.9557 14.168C13.9557 14.5096 13.6724 14.793 13.3307 14.793Z" fill="#98A5B3"/>
                      </svg>
                    </div>
                    <p className="text-xs md:text-sm font-cera-pro-regular">Declan Kluver Submitted Proposal</p>
                  </div>

                  <div className="absolute right-0 md:right-1.5 bottom-8 xl:bottom-10 flex items-center">
                    <p className="text-xs md:text-sm font-cera-pro-regular">Declan Kluver create issued for Discussion</p>
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-neutral-30 bg-white flex items-center justify-center ml-3">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3333 18.9596H6.66667C3.625 18.9596 1.875 17.2096 1.875 14.168V5.83464C1.875 2.79297 3.625 1.04297 6.66667 1.04297H13.3333C16.375 1.04297 18.125 2.79297 18.125 5.83464V14.168C18.125 17.2096 16.375 18.9596 13.3333 18.9596ZM6.66667 2.29297C4.28333 2.29297 3.125 3.4513 3.125 5.83464V14.168C3.125 16.5513 4.28333 17.7096 6.66667 17.7096H13.3333C15.7167 17.7096 16.875 16.5513 16.875 14.168V5.83464C16.875 3.4513 15.7167 2.29297 13.3333 2.29297H6.66667Z" fill="#98A5B3"/>
                        <path d="M15.4193 7.70833H13.7526C12.4859 7.70833 11.4609 6.68333 11.4609 5.41667V3.75C11.4609 3.40833 11.7443 3.125 12.0859 3.125C12.4276 3.125 12.7109 3.40833 12.7109 3.75V5.41667C12.7109 5.99167 13.1776 6.45833 13.7526 6.45833H15.4193C15.7609 6.45833 16.0443 6.74167 16.0443 7.08333C16.0443 7.425 15.7609 7.70833 15.4193 7.70833Z" fill="#98A5B3"/>
                        <path d="M9.9974 11.457H6.66406C6.3224 11.457 6.03906 11.1737 6.03906 10.832C6.03906 10.4904 6.3224 10.207 6.66406 10.207H9.9974C10.3391 10.207 10.6224 10.4904 10.6224 10.832C10.6224 11.1737 10.3391 11.457 9.9974 11.457Z" fill="#98A5B3"/>
                        <path d="M13.3307 14.793H6.66406C6.3224 14.793 6.03906 14.5096 6.03906 14.168C6.03906 13.8263 6.3224 13.543 6.66406 13.543H13.3307C13.6724 13.543 13.9557 13.8263 13.9557 14.168C13.9557 14.5096 13.6724 14.793 13.3307 14.793Z" fill="#98A5B3"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* card 2 */}
                <div className="pb-24 pt-4 md:py-[104px]">
                  <div className="ml-14 md:ml-0 md:hidden flex items-center">
                    <div className="mr-4">
                      <ArrowRightIcon className="w-5 h-5 text-blue-primary-main" />
                    </div>
                    <p className="text-xs font-cera-pro-regular">Help others fill vacancies or seek assistance with a difficult role you’ve landed. Discover true collaboration by leveraging the community.</p>
                  </div>
                  <div className="relative w-full flex justify-center pt-[88px] md:pt-0">
                    <div className="bg-white border border-neutral-30 rounded-[14px] md:rounded-3xl py-2.5 md:py-4 xl:py-5 px-[11px] sm:px-[14px] md:px-5 xl:px-6 w-full max-w-[260px] sm:max-w-[375px] md:max-w-[475px] xl:max-w-[580px]">
                      {/* badge */}
                      <div className="flex justify-end">
                        <CheckedBadge title="Proposal Accepted" />
                      </div>

                      {/* ilustation */}
                      <div className="mt-3.5 md:mt-6 xl:mt-8 flex justify-center">
                        <div className="w-[43px] h-[43px] md:w-[76px] md:h-[76px] xl:w-24 xl:h-24 rounded-full flex justify-center items-center bg-neutral-10">
                          <img src={IdeaImage} alt="" className="w-[30px] h-[30px] md:w-[52px] md:h-[52px] xl:w-16 xl:h-16" />
                        </div>
                      </div>

                      {/* title */}
                      <div className="mt-1.5 md:mt-2.5 xl:mt-3 text-center">
                        <p className="text-[9px] md:text-sm xl:text-lg font-cera-pro-medium text-neutral-100">Recruitment Collaboration Project Agreement</p>
                      </div>

                      {/* list */}
                      <ul className="mt-2.5 md:mt-4 xl:mt-5 space-y-1.5 xl:space-y-2">
                        {['Fee split 60/40', 'Lock out period 12 months', '25% clawback upon replacement', 'Deadline 13 days'].map((item) => (
                          <li className="flex items-center text-[7px] leading-[10px] md:text-[13px] md:leading-5 xl:text-base xl:leading-6 font-cera-pro-regular text-neutral-100" key={item}>
                            <div className="mr-1.5 md:mr-2 xl:mr-3">
                              <CheckCircleIcon className="w-2.5 md:w-4 xl:w-5 h-2.5 md:h-4 xl:h-5 text-[#00A38C]" />
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* reaction */}
                      <div className="mt-2.5 md:mt-4 xl:mt-5 flex justify-between">
                        <Reaction likeCount={2} rocketCount={4} />

                        <div className="flex space-x-2 items-center">
                          <div className="flex -space-x-1 md:-space-x-2 overflow-hidden">
                            {[FirstAvaImage, SecondAvaImage, ThirdAvaImage].map((item) => (
                              <img key={item} className="inline-block h-2.5 md:h-5 xl:h-6 w-2.5 md:w-5 xl:w-6 rounded-full ring-[1px] md:ring-[1.5px] ring-white" src={item} alt=""/>
                            ))}
                          </div>
                          <p className="text-[6px] md:text-xs xl:text-sm font-cera-pro-regular text-neutral-100">20 comments</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* card 3 */}
              <div className="relative grid grid-cols-2 md:grid-cols-5 lg:grid-cols-2 md:gap-6">
                <div className="col-span-2 lg:col-span-1 order-2 md:order-1 flex items-center mt-6 md:mt-0">
                  <div className="mr-4">
                    <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6 text-[#FF47A7]" />
                  </div>
                  <p className="text-xs md:text-base lg:text-lg font-cera-pro-regular text-neutral-100">Increase your placement rate by 37% through collaboration and working together</p>
                </div>

                <div className="col-span-3 lg:col-span-1 order-1 md:order-2 bg-white divide-y divide-neutral-30 border border-neutral-30 rounded-[14px] md:rounded-3xl">
                  {/* heading */}
                  <div className="pb-2 md:pb-3.5 xl:pb-4 pt-2.5 md:pt-4 xl:pt-5">
                    <div className="flex items-center justify-between px-[14px] md:px-5 xl:px-6">
                      <p className="text-[9.5px] leading-[13px] md:text-[13px] md:leading-5 xl:text-base xl:leading-6 font-cera-pro-medium text-neutral-100">Project Activated - In Progress</p>
                      <CheckedBadge title="Open" />
                    </div>
                  </div>

                  <div className="py-[11px] md:py-4 xl:py-5 px-[14px] md:px-5 xl:px-6">
                    {/* author */}
                    <div className="flex space-x-2 xl:space-x-3">
                      <div className="w-6 md:w-8 xl:w-10 h-6 md:h-8 xl:h-10">
                        <img src={DeclanAvaImage} alt="" className="w-full h-full" />
                      </div>
                      <div>
                        <p className="font-cera-pro-medium text-[8px] leading-[11px] md:text-[11.5px] md:leading-4 xl:text-sm xl:leading-5 text-neutral-100">Declan Kluver</p>
                        <p className="font-cera-pro-regular text-[7px] leading-[9px] md:text-[10px] md:leading-[13px] xl:text-xs xl:leading-4 text-neutral-60 mt-0.5">Commented 8 min ago</p>
                      </div>
                    </div>

                    <div className="mt-3">
                      <p className="text-[10px] md:text-sm xl:text-lg font-cera-pro-medium text-neutral-100">Here’s 3 candidates I’ve found</p>

                      {/* candidate list */}
                      <ul className="mt-2 mb-2 md:mb-3 space-y-1 md:space-y-1.5 xl:space-y-2">
                        {[FirstCandidateAvaImage, SecondCandidateAvaImage, ThirdCandidateAvaImage].map((item, index) => (
                          <li className="text-[9px] leading-[13px] md:text-[13px] md:leading-5 xl:text-base xl:leading-6 flex items-center font-cera-pro-regular text-neutral-100" key={item}>
                            <div className="w-5 h-5 md:w-7 md:h-7 xl:w-8 xl:h-8 mr-1.5 md:mr-2 xl:mr-3">
                              <img src={item} alt="" className="w-full h-full" />
                            </div>
                            <span>Candidate {index + 1}</span>
                          </li>
                        ))}
                      </ul>

                      {/* reaction */}
                      <Reaction likeCount={2} rocketCount={4} />
                    </div>
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

export default Collaborate
