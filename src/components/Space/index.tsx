import clsx from 'clsx'
import React from 'react'
import './index.scss'
import { useConfigProvider } from './context'

export type SizeType = 'small' | 'middle' | 'large' | number | undefined

export interface ISpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  style?: React.CSSProperties
  size?: SizeType | [SizeType, SizeType]
  direction?: 'horizontal' | 'vertical'
  align?: 'start' | 'end' | 'center' | 'baseline'
  split?: React.ReactNode
  wrap?: boolean
}

const spaceSize = {
  small: 8,
  middle: 16,
  large: 24
}

function getNumberSize(size: SizeType) {
  return typeof size === 'string' ? spaceSize[size] : size || 0
}

const Space: React.FC<ISpaceProps> = (props) => {
  const { space } = useConfigProvider()
  console.log('space', space)
  const {
    style,
    children,
    className,
    direction,
    align,
    wrap,
    size = space?.size || 'small',
    split,
    ...rest
  } = props
  const childNodes = React.Children.toArray(children)
  const mergedAlign =
    direction === 'horizontal' && align === undefined ? 'center' : align

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const nodes = childNodes.map((child: any, i) => {
    const key = (child && child.key) || `space-item-${i}`

    return (
      <>
        <div className="space-item" key={key}>
          {child}
        </div>
        {i < childNodes.length && split && (
          <span className={`${className}-split`} style={style}>
            {split}
          </span>
        )}
      </>
    )
  })

  const otherStyles: React.CSSProperties = {}

  const [horizontalSize, verticalSize] = React.useMemo(
    () =>
      ((Array.isArray(size) ? size : [size, size]) as [SizeType, SizeType]).map(
        (item) => getNumberSize(item)
      ),
    [size]
  )

  otherStyles.columnGap = horizontalSize
  otherStyles.rowGap = verticalSize

  if (wrap) {
    otherStyles.flexWrap = 'wrap'
  }
  return (
    <div
      className={clsx(
        `space`,
        `space-${direction}`,
        {
          [`space-align-${mergedAlign}`]: mergedAlign
        },
        className
      )}
      style={{
        ...otherStyles,
        ...style
      }}
      {...rest}
    >
      {nodes}
    </div>
  )
}
export default Space
