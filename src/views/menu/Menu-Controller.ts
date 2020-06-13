import { useState } from 'react'
import { SelectChangeEventDetail } from '@ionic/core'

import { useAppContext } from '../../App-Context'

export function useMenuController() {
  const { getAppConfig, setAppConfig } = useAppContext()
  const [theme, setTheme] = useState(() => {
    const appConfig = getAppConfig()
    return appConfig ? appConfig.theme : ''
  })

  const handleTheme = (event: CustomEvent<SelectChangeEventDetail>) => {
    setTheme(event.detail.value)
  }

  const apply = () => {
    setAppConfig({ ...getAppConfig(), theme })
  }

  return {
    theme,
    handleTheme,
    apply,
  }
}
