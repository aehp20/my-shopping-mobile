import React from 'react'
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonMenu,
} from '@ionic/react'

export function Menu() {
  return (
    <IonMenu side='start'>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonTitle>Start Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  )
}
