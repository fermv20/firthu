import { forwardRef } from 'react'

interface Props {
  as?: React.ElementType
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
  const { as: Component = 'button', ...rest } = props

  return <Component ref={ref} {...rest} />
})
