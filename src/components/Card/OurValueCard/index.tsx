import { type IOurValueCard } from '../../../interfaces/IOurValueCard'

const OurValueCard = ({ icon, title, description }: IOurValueCard) => {
  return (
    <>
      <div>
        <div className="flex">
          <div className="w-[64px] md:w-[56px] xl:w-[64px] h-[64px] md:h-[56px] xl:h-[64px] flex justify-center items-center rounded-lg bg-neutral-10">
            {icon}
          </div>
        </div>
        <p className="mt-4 text-lg text-neutral-100 font-cera-pro-medium">{title}</p>
        <p className="mt-2 text-sm text-neutral-60 font-cera-pro-regular">{description}</p>
      </div>
    </>
  )
}

export default OurValueCard
