import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { FadeYAnimation } from '../../../animations/global'
import { FaqCard, TitleText } from '../../../components'

const Faq = () => {
  gsap.registerPlugin(ScrollTrigger)
  const TitleRef = useRef(null)
  const FirstCardRef = useRef(null)
  const SecondCardRef = useRef(null)
  const ThirdCardRef = useRef(null)
  const FourthCardRef = useRef(null)
  const FifthCardRef = useRef(null)
  const SixthCardRef = useRef(null)

  FadeYAnimation({ animationRef: TitleRef, scrollTriggerRef: TitleRef, initialValue: 90, delayValue: 0, durationValue: 1 })
  FadeYAnimation({ animationRef: FirstCardRef, scrollTriggerRef: FirstCardRef, initialValue: 90, delayValue: 0, durationValue: 1 })
  FadeYAnimation({ animationRef: SecondCardRef, scrollTriggerRef: SecondCardRef, initialValue: 90, delayValue: 0.5, durationValue: 1 })
  FadeYAnimation({ animationRef: ThirdCardRef, scrollTriggerRef: ThirdCardRef, initialValue: 90, delayValue: 0, durationValue: 1 })
  FadeYAnimation({ animationRef: FourthCardRef, scrollTriggerRef: FourthCardRef, initialValue: 90, delayValue: 0.5, durationValue: 1 })
  FadeYAnimation({ animationRef: FifthCardRef, scrollTriggerRef: FifthCardRef, initialValue: 90, delayValue: 0, durationValue: 1 })
  FadeYAnimation({ animationRef: SixthCardRef, scrollTriggerRef: SixthCardRef, initialValue: 90, delayValue: 0.5, durationValue: 1 })

  return (
    <>
      <div className="relative bg-white">
        <div className="relative py-16 md:py-24 xl:py-[120px]">
          <div className="px-6 lg:px-10 xl:px-0 mx-auto max-w-7xl">
            <div className="text-center flex flex-col">
              <div ref={TitleRef} className="flex items-center justify-center space-x-4">
                <TitleText>Frequently Asked Questions</TitleText>
              </div>
            </div>

            <div className="mt-[70px] md:mt-16 grid grid-cols-1 gap-6">
              <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6">
                <div ref={FirstCardRef} className="md:col-span-7 bg-neutral-10 p-6 md:p-10 rounded-[20px] md::rounded-3xl">
                  <FaqCard title="Does xrecruiter have ownership or equity stake in my new agency?" titleColor="text-[#1C5BFC]" description="Absolutely not. You own your business 100% - Put simply, we are a service provider to help recruiters launch and manage their agency at the highest level. (Think of it as a franchise model, but building your own brand instead of someone else's)" />
                </div>
                <div ref={SecondCardRef} className="md:col-span-5 bg-neutral-10 p-6 md:p-10 rounded-[20px] md::rounded-3xl">
                  <FaqCard title="Are there any costs to get started?" titleColor="text-[#8738FF]" description="Yes, there are basic legal and accounting costs to register you as a director of your new business. We will set all of this up for you and hold your hand through the whole process." />
                </div>
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6">
                <div ref={ThirdCardRef} className="md:col-span-5 bg-neutral-10 p-6 md:p-10 rounded-[20px] md::rounded-3xl">
                  <FaqCard title='I have no "business" experience. Am I suitable?' titleColor="text-[#FF47A7]" description="As long as you know how to recruit, then the rest is a walk in the park. We'll walk you through the process and ensure you feel confident and excited to take the next step in your career!" />
                </div>
                <div ref={FourthCardRef} className="md:col-span-7 bg-neutral-10 p-6 md:p-10 rounded-[20px] md::rounded-3xl">
                  <FaqCard title="I already have my own agency - Can I still be an xrecruiter partner?" titleColor="text-[#FF9A5C]" description="Absolutely! We can help refresh your brand, implement best practices in your current agency and give you access to unlimited resources and technology. We support existing agencies up to 15 staff." />
                </div>
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6">
                <div ref={FifthCardRef} className="md:col-span-7 bg-neutral-10 p-6 md:p-10 rounded-[20px] md::rounded-3xl">
                  <FaqCard title="I have a non compete clause in my contract. Can I still start my own agency?" titleColor="text-[#00A38C]" description="No one can stop you from registering a business, regardless of what a contract says. Feel welcome to send across your employment contract and we'll have our legal team provide you formal legal advice." />
                </div>
                <div ref={SixthCardRef} className="md:col-span-5 bg-neutral-10 p-6 md:p-10 rounded-[20px] md::rounded-3xl">
                  <FaqCard title="When is xrecruiter not a good fit?" titleColor="text-[#4140FC]" description="If you bill under $300,000 per annum, or do not have agency recruitment experience then unfortunately we can't support your skillset at this time. Check back later though as this might change!" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq
