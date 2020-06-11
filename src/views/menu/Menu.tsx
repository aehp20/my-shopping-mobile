import React from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
} from '@ionic/react'

import { HOME_PATH } from '../../App-Constants'
import { BackButton } from '../../common/components/backButton'

export function Menu() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <BackButton to={HOME_PATH} />
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>Menu</IonContent>
    </IonPage>
  )
}
