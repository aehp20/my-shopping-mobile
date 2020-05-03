import React from 'react'
import { IonContent, IonHeader, IonPage } from '@ionic/react'

import { ListsProducts } from '../listsProducts'
import { StyledHomeTitle } from './Home-Styles'

export function Home() {
  return (
    <IonPage>
      <IonHeader>
        <StyledHomeTitle>My shopping</StyledHomeTitle>
      </IonHeader>
      <IonContent>
        <ListsProducts />
      </IonContent>
    </IonPage>
  )
}
