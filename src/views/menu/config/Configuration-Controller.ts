import { useState } from 'react'
import { SelectChangeEventDetail } from '@ionic/core'

import { useAppContext } from '../../../App-Context'

export function useConfigurationController() {
  const { getAppConfig, setAppConfig } = useAppContext()
  const [theme, setTheme] = useState(() => {
    const appConfig = getAppConfig()
    return appConfig ? appConfig.theme : ''
  })

  const handleTheme = (event: CustomEvent<SelectChangeEventDetail>) => {
    const selectedTheme = event.detail.value

    setTheme(selectedTheme)
    apply(selectedTheme)
  }

  const apply = (selectedTheme: string) => {
    setAppConfig({ ...getAppConfig(), theme: selectedTheme })
  }

  return {
    theme,
    handleTheme,
  }
}
