import { useState } from 'react'

import { useAppContext } from '../../App-Context'

export function useMenuController() {
  const { getAppConfig, setAppConfig } = useAppContext()
  const [theme, setTheme] = useState(() => {
    const appConfig = getAppConfig()
    return appConfig ? appConfig.theme : ''
  })

  const handleTheme = (event: any) => {
    console.log(event)
    setTheme(event.detail.value)
  }

  const apply = () => {
    setAppConfig({ theme })
  }

  return {
    theme,
    handleTheme,
    apply,
  }
}
