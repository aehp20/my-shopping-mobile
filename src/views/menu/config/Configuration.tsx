import React from 'react'

import { HOME_PATH } from '../../../App-Constants'
import { BackButton } from '../../../common/components/backButton'
import { useConfigurationController } from './Configuration-Controller'
import {
  MyUIHeader,
  MyUIContent,
  MyUIPage,
  MyUITitle,
  MyUIList,
  MyUIItem,
  MyUILabel,
  MyUISelect,
  MyUISelectOption,
} from '../../../common/myUIComponents'

export function Configuration() {
  const { theme, handleTheme } = useConfigurationController()

  return (
    <MyUIPage>
      <MyUIHeader>
        <BackButton to={HOME_PATH} />
        <MyUITitle>Configuration</MyUITitle>
      </MyUIHeader>
      <MyUIContent>
        <form>
          <MyUIList>
            <MyUIItem>
              <MyUILabel>Theme</MyUILabel>
              <MyUISelect value={theme} onIonChange={handleTheme}>
                <MyUISelectOption value='light'>Light</MyUISelectOption>
                <MyUISelectOption value='dark'>Dark</MyUISelectOption>
              </MyUISelect>
            </MyUIItem>
          </MyUIList>
        </form>
      </MyUIContent>
    </MyUIPage>
  )
}
