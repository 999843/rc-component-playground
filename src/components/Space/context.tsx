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
  return <Context.Provider value={{ space }}>{children}</Context.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useConfigProvider() {
  const config = React.useContext(Context)

  return config
}
