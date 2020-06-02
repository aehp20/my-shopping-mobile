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
import { Menu } from './menu'

export function Home() {
  return (
    <>
      <Menu />
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
    </>
  )
}
