import React from 'react'
import { IonFab, IonFabButton, IonIcon } from '@ionic/react'
import { add } from 'ionicons/icons'

import { IAddItemButton } from './AddItemButton-Types'

export function AddItemButton(props: IAddItemButton) {
  const { path } = props

  return (
    <IonFab vertical="bottom" horizontal="center" slot="fixed">
      <IonFabButton routerLink={path}>
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
    </IonFab>
  )
}
