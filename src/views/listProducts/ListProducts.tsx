import React from 'react'
import {
  IonText,
  IonPage,
  IonToolbar,
  IonContent,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react'
import { save } from 'ionicons/icons'
import { RouteComponentProps } from 'react-router'

import { useListProductsController } from './ListProducts-Controller'
import { StyledIonInput } from './ListProducts-Styles'
import { HOME_PATH } from '../../App-Constants'
import { Products } from './products'
import { IListProductsParams } from './ListProducts-Types'
import { StyledErrorSection } from '../../common/styles'
import { BackButton } from '../../common/components/backButton'
import { Header } from '../../common/components/header'

export function ListProducts({
  match,
}: RouteComponentProps<IListProductsParams>) {
  const { id } = match.params
  const {
    name,
    handleName,
    apply,
    products,
    isNew,
  } = useListProductsController(id)

  const errorSection = !name ? (
    <StyledErrorSection>
      <IonText color='danger'>Name is required</IonText>
    </StyledErrorSection>
  ) : (
    ''
  )

  const productsSection = !isNew ? (
    <Products id={id} name={name} products={products!} />
  ) : (
    ''
  )

  return (
    <IonPage>
      <Header>
        <IonToolbar>
          <BackButton to={HOME_PATH} />
          <IonGrid>
            <IonRow>
              <IonCol size='9'>
                <StyledIonInput
                  autofocus={true}
                  required
                  type='text'
                  value={name}
                  onIonChange={handleName}
                  placeholder='Enter the lists name'
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
      </Header>
      <IonContent>
        {errorSection}
        {productsSection}
      </IonContent>
    </IonPage>
  )
}
