import React from 'react'
import { IonFab, IonFabButton, IonIcon } from '@ionic/react'
import { add, menu } from 'ionicons/icons'

import { IFabButtonProps, IFabPathProps } from './FabButtons-Types'

function FabButton(props: IFabButtonProps) {
  const { vertical, horizontal, icon, path } = props

  return (
    <IonFab
      vertical={vertical || 'bottom'}
      horizontal={horizontal || 'center'}
      slot='fixed'
    >
      <IonFabButton routerLink={path}>
        <IonIcon icon={icon || add}></IonIcon>
      </IonFabButton>
    </IonFab>
  )
}

export function AddFabButton(props: IFabPathProps) {
  return <FabButton path={props.path} />
}

export function MenuFabButton(props: IFabPathProps) {
  return <FabButton horizontal='end' icon={menu} path={props.path} />
}
