import React, { ReactElement } from 'react'
import copy from 'copy-to-clipboard'

export interface ICopyToClipboardProps {
  text: string
  onCopy?: (text: string, result: boolean) => void
  options?: {
    debug?: boolean
    message?: string
    format?: string
  }
  children: ReactElement
}

const CopyToClipboard: React.FC<ICopyToClipboardProps> = (props) => {
  const { children, text, options, onCopy } = props

  const elem = React.Children.only(children)

  const onClick = (evt: MouseEvent) => {
    const elem = React.Children.only(children)
    const result = copy(text, options)

    if (onCopy) {
      onCopy(text, result)
    }

    if (typeof elem?.props?.onClick === 'function') {
      elem.props.onClick(evt)
    }
  }

  return React.cloneElement(elem, { onClick })
}
export default CopyToClipboard
