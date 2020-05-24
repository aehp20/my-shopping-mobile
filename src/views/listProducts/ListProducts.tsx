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
} from '@ionic/react'
import { save, arrowBack } from 'ionicons/icons'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'

import { useListProductsController } from './ListProducts-Controller'
import { StyledIonInput, StyledArrowBack } from './ListProducts-Styles'
import { HOME_PATH } from '../../App-Constants'
import { Products } from './products'
import { IListProductsParams } from './ListProducts-Types'
import { StyledErrorSection } from '../../common/styles'

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
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <Link to={HOME_PATH}>
              <StyledArrowBack icon={arrowBack}></StyledArrowBack>
            </Link>
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
                  placeholder='Enter a name'
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
        {errorSection}
        {productsSection}
      </IonContent>
    </IonPage>
  )
}
