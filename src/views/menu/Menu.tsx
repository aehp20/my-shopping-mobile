import React from 'react'
import {
  IonContent,
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
import { StyledButton } from '../listProducts/product/Product-Styles'
import { useMenuController } from './Menu-Controller'
import { Header } from '../../common/components/header'

export function Menu() {
  const { theme, handleTheme, apply } = useMenuController()

  return (
    <IonPage>
      <Header>
        <IonToolbar>
          <BackButton to={HOME_PATH} />
          <IonTitle>Configuration</IonTitle>
        </IonToolbar>
      </Header>
      <IonContent>
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

          <StyledButton expand='full' onClick={apply} strong>
            Apply
          </StyledButton>
        </form>
      </IonContent>
    </IonPage>
  )
}
