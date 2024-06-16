import React, { PropsWithChildren } from 'react'
import { getSize } from './_helper'
import clsx from 'clsx'
import './index.module.scss'

type BaseIconProps = {
  className?: string
  style?: React.CSSProperties
  size?: string | string[]
  spin?: boolean
}

export type IconProps = BaseIconProps &
  Omit<React.SVGAttributes<SVGElement>, keyof BaseIconProps>

const IconRenderFn: React.ForwardRefRenderFunction<
  SVGSVGElement,
  PropsWithChildren<IconProps>
> = (props, ref) => {
  const { style, className, spin, size = '1em', children, ...rest } = props

  const [width, height] = getSize(size)
  return (
    <svg
      ref={ref}
      style={style}
      fill="currentColor"
      className={clsx(`icon`, { spin: spin }, className)}
      width={width}
      height={height}
      {...rest}
    >
      {children}
    </svg>
  )
}
const Icon = React.forwardRef(IconRenderFn)
export default Icon
