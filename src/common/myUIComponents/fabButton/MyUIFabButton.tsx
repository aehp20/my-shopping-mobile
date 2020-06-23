import React from 'react'
import { IonFab, IonIcon } from '@ionic/react'
import { add, menu } from 'ionicons/icons'

import { IMyUIFabButtonProps, IMyUIFabPathProps } from './MyUIFabButton-Types'
import { StyledMyUIFabButton } from './MyUIFabButton-Styles'

function MyUIFabButton(props: IMyUIFabButtonProps) {
  const { vertical, horizontal, icon, path } = props

  return (
    <IonFab
      vertical={vertical || 'bottom'}
      horizontal={horizontal || 'center'}
      slot='fixed'
    >
      <StyledMyUIFabButton routerLink={path}>
        <IonIcon icon={icon || add}></IonIcon>
      </StyledMyUIFabButton>
    </IonFab>
  )
}

export function MyUIAddFabButton(props: IMyUIFabPathProps) {
  return <MyUIFabButton path={props.path} />
}

export function MyUIMenuFabButton(props: IMyUIFabPathProps) {
  return <MyUIFabButton horizontal='end' icon={menu} path={props.path} />
}
