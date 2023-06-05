import clsx from 'clsx'
import { type IFormInput } from '../../../../interfaces/IFormInput'

const Input = ({ classNames, ...rest }: IFormInput) => {
  return (
    <>
      <input
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
      />
    </>
  )
}

export default Input
