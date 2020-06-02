import React from 'react'
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonMenuButton,
} from '@ionic/react'

import { ListsProducts } from '../listsProducts'
import { StyledHomeTitle } from './Home-Styles'

export function Home() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <StyledHomeTitle>My shopping</StyledHomeTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ListsProducts />
      </IonContent>
    </IonPage>
  )
}
