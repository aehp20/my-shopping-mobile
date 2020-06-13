import React from 'react'
import { IonContent, IonPage, IonToolbar } from '@ionic/react'

import { ListsProducts } from '../listsProducts'
import { StyledHomeTitle } from './Home-Styles'
import { Header } from '../../common/components/header'

export function Home() {
  return (
    <IonPage>
      <Header>
        <IonToolbar>
          <StyledHomeTitle>My shopping</StyledHomeTitle>
        </IonToolbar>
      </Header>
      <IonContent>
        <ListsProducts />
      </IonContent>
    </IonPage>
  )
}
