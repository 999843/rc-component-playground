import React, { PropsWithChildren } from 'react'
import { SizeType } from '.'

interface IConfigContextProps {
  space?: {
    size: SizeType
  }
}
const Context = React.createContext<IConfigContextProps>({})

interface IConfigProviderProps extends PropsWithChildren<IConfigContextProps> {}

export const ConfigProvider: React.FC<IConfigProviderProps> = (props) => {
  const { children, space } = props

  return React.createElement(Context.Provider, { value: { space } }, children)
}

export function useConfigProvider() {
  const config = React.useContext(Context)

  return config
}
