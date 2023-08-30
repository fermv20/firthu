import clsx from 'clsx'
import { forwardRef } from 'react'

export type ButtonVariant = 'contained' | 'outlined' | 'text'

export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'

export type ButtonSize = 'sm' | 'md' | 'lg'

interface Props {
  as?: React.ElementType
  variant?: ButtonVariant
  color?: ButtonColor
  size?: ButtonSize
}

type NativeAttrs = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  keyof Props
>

export type ButtonProps = Props & NativeAttrs

export const Button = forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<ButtonProps>
>((props, ref) => {
  const {
    as: Component = 'button',
    className,
    variant = 'text',
    color = 'primary',
    size = 'md',
    ...rest
  } = props

  return (
    <Component
      ref={ref}
      className={clsx('button', {
        [`button--${variant}`]: variant,
        [`button--${color}`]: color,
        [`button--${size}`]: size,
      })}
      {...rest}
    />
  )
})
