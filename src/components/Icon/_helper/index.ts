import { IconProps } from '..'

export function getSize(size: IconProps['size']) {
  if (Array.isArray(size) && size.length === 2) {
    return size
  }
  const width = (size as string) || '1rem'
  const height = (size as string) || '1rem'

  return [width, height]
}
