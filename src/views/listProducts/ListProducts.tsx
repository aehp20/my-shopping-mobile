import React from 'react'
import {
  IonText,
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonContent,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonBackButton
} from '@ionic/react'
import { save } from 'ionicons/icons'
import { RouteComponentProps } from 'react-router'

import { useListProductsController } from './ListProducts-Controller'
import { StyledIonInput } from './ListProducts-Styles'
import { HOME_PATH } from '../../App-Constants'
import { Products } from './products'
import { hasListItems } from '../../common/utils'
import { IListProductsParams } from './ListProducts-Types'
import { StyledErrorSection } from '../../common/styles'

export function ListProducts({
  match
}: RouteComponentProps<IListProductsParams>) {
  const { id } = match.params
  const {
    name,
    handleName,
    apply,
    products,
    isNew
  } = useListProductsController(id)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref={HOME_PATH} />
          </IonButtons>
          <IonGrid>
            <IonRow>
              <IonCol size='9'>
                <StyledIonInput
                  autofocus={true}
                  required
                  type='text'
                  value={name}
                  onIonChange={handleName}
                  placeholder='Enter the name'
                  clearInput
                />
              </IonCol>
              <IonCol size='3'>
                <IonButton onClick={apply} disabled={!name}>
                  <IonIcon icon={save}></IonIcon>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {!name && (
          <StyledErrorSection>
            <IonText color='danger'>Name is required</IonText>
          </StyledErrorSection>
        )}
        {!isNew && hasListItems(products) && (
          <Products id={id} name={name} products={products!} />
        )}
      </IonContent>
    </IonPage>
  )
}
