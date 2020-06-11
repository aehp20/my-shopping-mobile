import React from 'react'
import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/react'

import { ListsProducts } from '../listsProducts'
import { StyledHomeTitle } from './Home-Styles'

export function Home() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <StyledHomeTitle>My shopping</StyledHomeTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ListsProducts />
      </IonContent>
    </IonPage>
  )
}
