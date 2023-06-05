import clsx from 'clsx'
import { type IText } from '../../../interfaces/IText'

const TitleText = ({ children, classNames }: IText) => {
  return (
    <>
      <p className={clsx(
        'font-cera-pro-medium text-neutral-100 text-center',
        'text-[24px] md:text-[40px] xl:text-[40px]',
        'leading-[36px] md:leading-[56px] xl:leading-[56px]',
        'tracking-normal md:tracking-[0.5px]',
        classNames
      )} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
        {children}
      </p>
    </>
  )
}

export default TitleText
