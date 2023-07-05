import clsx from 'clsx'
import { type IButton } from '../../../interfaces/IButton'

const Button = ({
  children,
  classNames,
  ...rest
}: IButton) => {
  return (
    <>
      <button
        className={clsx(
          'inline-flex items-center justify-center focus:outline-none focus:ring-0 duration-200',
          'bg-blue-primary-main hover:bg-blue-primary-hover',
          'text-base leading-6 text-white font-cera-pro-bold',
          'rounded-[10px]',
          'px-8 py-[15px]',
          classNames
        )}
        {...rest}
      >
        {children}
      </button>
    </>
  )
}

export default Button
