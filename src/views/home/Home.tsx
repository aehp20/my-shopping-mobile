import React from 'react'
import { IonPage } from '@ionic/react'

import { ListsProducts } from '../listsProducts'
import {
  MyUIHeader,
  MyUIToolbar,
  MyUITitle,
  MyUIContent,
} from '../../common/myUIComponents'

export function Home() {
  return (
    <IonPage>
      <MyUIHeader>
        <MyUIToolbar>
          <MyUITitle>My shopping</MyUITitle>
        </MyUIToolbar>
      </MyUIHeader>
      <MyUIContent>
        <ListsProducts />
      </MyUIContent>
    </IonPage>
  )
}
