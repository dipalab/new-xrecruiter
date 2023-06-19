import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { type ICheckedBadge } from '../../../interfaces/ICheckedBadge'

const CheckedBadge = ({ title }: ICheckedBadge) => {
  return (
    <>
      <span className="text-[9px] leading-[13px] md:text-[13px] md:leading-5 xl:text-base xl:leading-6 text-[#00A38C] border border-[#00A38C] rounded-full py-0.5 px-1.5 md:px-2 xl:px-2.5 bg-[#EBF8F6] flex items-center font-cera-pro-medium">
        <div className="mr-1 xl:mr-1.5">
          <CheckCircleIcon className="w-3 md:w-4 xl:w-5 h-3 md:h-4 xl:h-5" />
        </div>
        <span>{ title }</span>
      </span>
    </>
  )
}

export default CheckedBadge
