import React from 'react'
import {
  IonInput,
  IonText,
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonContent,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react'

import { useListProductsController } from './ListProducts-Controller'
import { StyledErrorSection } from './ListProducts-Styles'
import { HOME_PATH } from '../../App-Constants'
import { save } from 'ionicons/icons'
import { Products } from './products'

export function ListProducts(props: any) {
  const { id } = props.match.params
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
                <IonInput
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
        {!isNew && <Products products={products} />}
      </IonContent>
    </IonPage>
  )
}
