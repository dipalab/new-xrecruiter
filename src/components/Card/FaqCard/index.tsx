import clsx from 'clsx'
import { type IFaqCard } from '../../../interfaces/IFaqCard'

const FaqCard = ({ title, titleColor, description }: IFaqCard) => {
  return (
    <>
      <div className="">
        <p className={clsx(
          titleColor,
          'text-2xl leading-9 font-cera-pro-medium'
        )}>{title}</p>
        <p className="mt-2 text-neutral-100 text-base font-cera-pro-regular">{description}</p>
      </div>
    </>
  )
}

export default FaqCard
