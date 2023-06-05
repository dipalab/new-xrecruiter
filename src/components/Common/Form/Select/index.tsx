import clsx from 'clsx'
import { type IFormSelect } from '../../../../interfaces/IFormSelect'

const Select = ({ classNames, children, ...rest }: IFormSelect) => {
  return (
    <>
      <select
        className={clsx(
          'block w-full rounded-[8px] ring-0 focus:ring-0 focus:outline-none',
          'text-sm md:text-xs xl:text-sm',
          'font-cera-pro-medium',
          'border border-neutral-20',
          'placeholder:text-neutral-60 text-neutral-100',
          'py-3.5 md:py-[11px] xl:py-3.5 px-4 md:px-[13px] xl:px-4',
          classNames
        )}
        {...rest}
      >
        {children}
      </select>
    </>
  )
}

export default Select
