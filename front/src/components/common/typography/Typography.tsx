import React, { ComponentProps, JSXElementConstructor } from 'react'
import cn from 'classnames'

type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'sub1'
  | 'sub2'
  | 'body1'
  | 'body2'
  | 'caption'
type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold'
type FontColor =
  | 'black'
  | 'gray1'
  | 'gray2'
  | 'gray3'
  | 'gray4'
  | 'line'
  | 'primary'
  | 'red'
  | 'blue'
  | 'white'

export interface ITypography extends ComponentProps<'p'> {
  variant?: Variant
  fontWeight?: FontWeight
  fontColor?: FontColor
  as?: keyof JSX.IntrinsicElements | JSXElementConstructor<any>
}

export const Typography = (props: ITypography) => {
  const {
    className,
    variant = 'body1',
    fontWeight = 'regular',
    fontColor = 'gray01',
    children,
    as,
    ...rest
  } = props

  const element: { [key in Variant]: string } = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    sub1: 'h4',
    sub2: 'h5',
    body1: 'p',
    body2: 'p',
    caption: 'p',
  }

  return React.createElement(
    as || element[variant],
    {
      className: cn(variant, fontWeight, fontColor, className),
      ...rest,
    },
    children
  )
}
