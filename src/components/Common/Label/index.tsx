import clsx from 'clsx'
import { type ILabel } from '../../../interfaces/ILabel'

const Label = ({ children, classNames }: ILabel) => {
  return (
    <>
      <label className={clsx(
        'font-cera-pro-regular text-neutral-100',
        'text-xs md:text-[10px] xl:text-xs',
        'leading-4 md:leading-[13px] xl:leading-4',
        classNames
      )}>
        {children}
      </label>
    </>
  )
}

export default Label
