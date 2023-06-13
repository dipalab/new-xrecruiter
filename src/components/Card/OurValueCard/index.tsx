import { type IOurValueCard } from '../../../interfaces/IOurValueCard'

const OurValueCard = ({ icon, title, description }: IOurValueCard) => {
  return (
    <>
      <div>
        <div className="flex">
          <div className="p-4 rounded-lg bg-neutral-10">
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
