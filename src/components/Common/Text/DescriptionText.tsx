import clsx from 'clsx'
import { type IText } from '../../../interfaces/IText'

const DescriptionText = ({ children, classNames }: IText) => {
  return (
    <>
      <p className={clsx(
        'font-cera-pro-regular text-neutral-100 text-center',
        'text-[18px]',
        'leading-7',
        classNames
      )} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
        {children}
      </p>
    </>
  )
}

export default DescriptionText
