import { Input, Label, Select, TitleText } from '../../../components'
import LogoXRImage from '../../../assets/logo.svg'
import LineChart from './LineChart'
import { useEffect, useState } from 'react'

const Earn = () => {
  const [bill, setBill] = useState(null)
  const [income, setIncome] = useState(null)
  const [country, setCountry] = useState(null)

  useEffect(() => {
    console.log(bill)
    console.log(income)
    console.log(country)
  }, [bill])

  return (
    <>
      <div className="overflow-hidden bg-[#FAFBFC] py-16 md:py-[96px] xl:py-[120px]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 xl:px-0">
          <div className="text-center max-w-[280px] md:max-w-lg mx-auto">
            <TitleText>How much would you earn with xrecruiter</TitleText>
          </div>

          <div className="bg-white rounded-2xl xl:rounded-3xl px-4 md:px-10 lg:px-[80px] xl:px-[99px] py-6 md:py-[52px] xl:py-[64px] mt-8 md:mt-[56px] xl:mt-[64px]">
            <div className="grid grid-cols-1 gap-8 md:gap-2.5 xl:gap-4">
              {/* inputs */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 xl:gap-6">
                <div>
                  <div className="text-center">
                    <Label>Annual Billings</Label>
                  </div>
                  <Input
                    placeholder="Annual Billings"
                    classNames="mt-[5px] xl:mt-[6px]"
                    type="number"
                    onInput={(e: any) => { setBill(e.target.value) }}
                  />
                </div>
                <div>
                  <div className="text-center">
                    <Label>Annual Income</Label>
                  </div>
                  <Input
                    placeholder="Annual Income"
                    classNames="mt-[5px] xl:mt-[6px]"
                    type="number"
                    onInput={(e: any) => { setIncome(e.target.value) }}
                  />
                </div>
                <div>
                  <div className="text-center">
                    <Label>Country</Label>
                  </div>
                  <Select
                    classNames="mt-[5px] xl:mt-[6px]"
                    onChange={(e: any) => { setCountry(e.target.value) }}
                  >
                    <option value="">Australia</option>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:gap-3.5 xl:gap-4">
                {/* You Currently */}
                <div>
                  <Label>You Currently</Label>
                  <div className="flex items-center md:space-x-[23px] xl:space-x-7 mt-1.5 xl:mt-2">
                    <div className="hidden md:block">
                      <div className="w-8 xl:w-10 h-8 xl:h-10 bg-neutral-20 rounded-full"></div>
                    </div>
                    <div className="w-full h-12 md:h-[39px] xl:h-12 border border-neutral-20 rounded-lg overflow-hidden flex">
                      <div className="flex-shrink-0 w-[20%] md:w-[105px] lg:w-[125px] xl:w-[154px] h-full bg-gradient-to-r from-[#FF5A5099] to-[#FF5A50] flex justify-center items-center">
                        <span className="font-cera-pro-regular text-[10px] md:text-xs xl:text-sm text-white">38% Tax</span>
                      </div>
                      <div className="flex-shrink-0 w-[40%] md:w-[240px] lg:w-[290px] xl:w-[360px] h-full bg-gradient-to-r from-[#74747499] to-[#747474] flex justify-center items-center">
                        <span className="font-cera-pro-regular text-[10px] md:text-xs xl:text-sm text-white">125.000 Income</span>
                      </div>
                      <div className="w-[40%] md:w-full h-full bg-neutral-10 flex justify-center items-center">
                        <span className="font-cera-pro-regular text-[10px] md:text-xs xl:text-sm text-neutral-100">{(!bill || bill === '') ? 0 : bill} Billings</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Powered by xrecruiter */}
                <div>
                  <Label>Powered by xrecruiter</Label>
                  <div className="flex items-center md:space-x-[23px] xl:space-x-7 mt-1.5 xl:mt-2">
                    <div className="hidden md:block">
                      <div className="w-8 xl:w-10 h-8 xl:h-10 rounded-full">
                        <img src={LogoXRImage} alt="" className="w-full h-full" />
                      </div>
                    </div>
                    <div className="w-full h-12 md:h-[39px] xl:h-12 border border-neutral-20 rounded-lg overflow-hidden flex">
                      <div className="flex-shrink-0 w-[20%] md:w-[105px] lg:w-[125px] xl:w-[154px] h-full bg-gradient-to-r from-[#FF9A5C99] to-[#FF9A5C] flex justify-center items-center">
                        <span className="font-cera-pro-regular text-[10px] md:text-xs xl:text-sm text-white">38% Tax</span>
                      </div>
                      <div className="flex-shrink-0 w-[40%] md:w-[240px] lg:w-[290px] xl:w-[360px] h-full bg-gradient-to-r from-[#00A38C80] to-[#00A38C] flex justify-center items-center">
                        <span className="font-cera-pro-regular text-[10px] md:text-xs xl:text-sm text-white">125.000 Income</span>
                      </div>
                      <div className="w-[40%] md:w-full h-full bg-neutral-10 flex justify-center items-center">
                        <span className="font-cera-pro-regular text-[10px] md:text-xs xl:text-sm text-neutral-100">{(!bill || bill === '') ? 0 : bill} Billings</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* chart */}
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 border border-[#EAEDF0] rounded-2xl">
                  <p className="font-cera-pro-medium text-neutral-100 text-lg mb-6 text-center">Earnings you’re missing!</p>
                  <LineChart />
                  <div className="flex justify-center items-center space-x-4 mt-4">
                    <div className="flex items-center">
                      <span className="w-2.5 h-2.5 bg-[#FF5A50] rounded-full mr-1.5"></span>
                      <p className="text-xs text-neutral-100 font-cera-pro-regular">Currently</p>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2.5 h-2.5 bg-[#00A38C] rounded-full mr-1.5"></span>
                      <p className="text-xs text-neutral-100 font-cera-pro-regular">XRecruiter</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 border border-[#EAEDF0] rounded-2xl">
                  <p className="font-cera-pro-medium text-neutral-100 text-lg mb-6 text-center">Earnings you’re missing!</p>
                  <LineChart />
                  <div className="flex justify-center items-center space-x-4 mt-4">
                    <div className="flex items-center">
                      <span className="w-2.5 h-2.5 bg-[#FF5A50] rounded-full mr-1.5"></span>
                      <p className="text-xs text-neutral-100 font-cera-pro-regular">Currently</p>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2.5 h-2.5 bg-[#00A38C] rounded-full mr-1.5"></span>
                      <p className="text-xs text-neutral-100 font-cera-pro-regular">XRecruiter</p>
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

export default Earn
