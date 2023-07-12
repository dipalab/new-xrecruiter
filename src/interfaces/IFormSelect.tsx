import { type ComponentProps, type ReactNode } from 'react'

export interface IFormSelect extends ComponentProps<'select'> {
  classNames?: string
  children?: ReactNode
}
