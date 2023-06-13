import { type IWhyJoinCard } from '../../../interfaces/IWhyJoinCard'

const WhyJoinCard = ({ icon, title, description }: IWhyJoinCard) => {
  return (
    <>
      <div>
        <div className="flex">
          <div className="p-4 rounded-lg bg-neutral-10">
            {icon}
          </div>
        </div>
        <p className="mt-4 text-lg text-white font-cera-pro-medium">{title}</p>
        <p className="mt-2 text-sm text-[#FFFFFFCC] font-cera-pro-regular">{description}</p>
      </div>
    </>
  )
}

export default WhyJoinCard
