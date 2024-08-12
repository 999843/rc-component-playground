import {
  PropsWithChildren,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo
} from 'react'
import { createPortal } from 'react-dom'
import { getAttach } from './_helper'

export interface IPortalProps extends PropsWithChildren {
  attach?: HTMLElement | string
}

const Portal = forwardRef((props: IPortalProps, ref) => {
  const { children, attach = document.body } = props

  const container = useMemo(() => {
    const el = document.createElement('div')
    el.className = 'portal-wrapper'
    return el
  }, [])

  useEffect(() => {
    const parentElement = getAttach(attach)
    parentElement?.appendChild(container)

    return () => {
      parentElement?.removeChild(container)
    }
  }, [attach, container])

  useImperativeHandle(ref, () => container)

  return createPortal(children, container)
})
export default Portal
