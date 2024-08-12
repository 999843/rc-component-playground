import { IPortalProps } from '..'

export function getAttach(attach: IPortalProps['attach']) {
  if (typeof attach === 'string') {
    return document.querySelector(attach)
  }

  if (typeof attach === 'object' && attach instanceof window.HTMLElement) {
    return attach
  }
  return document.body
}
