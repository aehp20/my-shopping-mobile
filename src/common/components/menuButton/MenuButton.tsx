import React from 'react'

import {
  MyUIIcon,
  MyUIFab,
  MyUIFabButton,
  MyUIFabList,
} from '../../myUIComponents'
import { IMenuButtonProps } from './MenuButton-Types'

export function MenuButton(props: IMenuButtonProps) {
  const { mainIcon, buttonsList } = props

  return (
    <MyUIFab vertical='bottom' horizontal='end' slot='fixed'>
      <MyUIFabButton>
        <MyUIIcon icon={mainIcon} />
      </MyUIFabButton>
      <MyUIFabList side='top'>
        {buttonsList.map((item, index) => (
          <MyUIFabButton key={index} routerLink={item.path}>
            <MyUIIcon icon={item.icon} />
          </MyUIFabButton>
        ))}
      </MyUIFabList>
    </MyUIFab>
  )
}
