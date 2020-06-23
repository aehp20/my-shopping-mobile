import React from 'react'
import {
  IonPage,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from '@ionic/react'

import { HOME_PATH } from '../../App-Constants'
import { BackButton } from '../../common/components/backButton'
import { useMenuController } from './Menu-Controller'
import { MyUIHeader, MyUIContent } from '../../common/myUIComponents'

export function Menu() {
  const { theme, handleTheme } = useMenuController()

  return (
    <IonPage>
      <MyUIHeader>
        <IonToolbar>
          <BackButton to={HOME_PATH} />
          <IonTitle>Configuration</IonTitle>
        </IonToolbar>
      </MyUIHeader>
      <MyUIContent>
        <form>
          <IonList>
            <IonItem>
              <IonLabel>Theme</IonLabel>
              <IonSelect value={theme} onIonChange={handleTheme}>
                <IonSelectOption value='light'>Light</IonSelectOption>
                <IonSelectOption value='dark'>Dark</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonList>
        </form>
      </MyUIContent>
    </IonPage>
  )
}
