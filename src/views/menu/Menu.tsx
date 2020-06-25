import React from 'react'

import { HOME_PATH } from '../../App-Constants'
import { BackButton } from '../../common/components/backButton'
import { useMenuController } from './Menu-Controller'
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
} from '../../common/myUIComponents'

export function Menu() {
  const { theme, handleTheme } = useMenuController()

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
