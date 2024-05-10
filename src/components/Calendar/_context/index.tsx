import { FC, createContext, useContext } from 'react'

interface ILocaleContext {
  locale: string
}

interface ILocaleContextProvider {
  value: ILocaleContext
  children: React.ReactNode
}

export const LocaleContext = createContext<ILocaleContext>({
  locale: 'zh-CN'
})

export const LocaleContextProvider: FC<ILocaleContextProvider> = (props) => {
  const { value, children } = props
  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLocaleContext() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('localeContext is notFound')
  }
  return context
}
