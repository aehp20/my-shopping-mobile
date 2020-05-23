import React from 'react'
import {
  IonInput,
  IonItem,
  IonLabel,
  IonToggle,
  IonText,
  IonList,
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonContent,
  IonTextarea
} from '@ionic/react'
import { RouteComponentProps } from 'react-router'

import { useProductController } from './Product-Controller'
import { HOME_PATH } from '../../../App-Constants'
import { IProductParams } from './Product-Types'
import {
  StyledTitle,
  StyledButton,
  StyledLabelForToggle
} from './Product-Styles'

export function Product({ match }: RouteComponentProps<IProductParams>) {
  const { idListProducts, id } = match.params
  const {
    title,
    name,
    quantity,
    toBuy,
    description,
    validationResponse,
    handleName,
    handleQuantity,
    handleToBuy,
    handleDescription,
    apply
  } = useProductController(idListProducts, id)

  // const product = findProduct(id)

  // const close = () => {
  //   props.history.push(HOME_PATH);
  // }

  // const apply = id ? editProduct : addProduct

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref={HOME_PATH} />
          </IonButtons>
          <StyledTitle>{title}</StyledTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form>
          <IonList>
            <IonItem>
              <IonLabel position='stacked'>
                Name <IonText color='danger'>*</IonText>
              </IonLabel>
              <IonInput
                autofocus={true}
                required
                type='text'
                value={name}
                onIonChange={handleName}
                clearInput
              />
            </IonItem>
            <IonItem>
              <IonLabel position='stacked'>Quantity</IonLabel>
              <IonInput
                required
                type='text'
                value={quantity}
                onIonChange={handleQuantity}
                clearInput
              />
            </IonItem>
            <IonItem lines='full'>
              <StyledLabelForToggle>To buy</StyledLabelForToggle>
              <IonToggle checked={toBuy} onIonChange={handleToBuy} />
            </IonItem>
            <IonItem>
              <IonLabel position='stacked'>Description</IonLabel>
              <IonTextarea
                value={description}
                onIonChange={handleDescription}
              />
            </IonItem>
            {validationResponse.error && (
              <>
                <br />
                <IonText color='danger'>{validationResponse.message}</IonText>
              </>
            )}
          </IonList>
          <StyledButton expand='full' onClick={apply} strong>
            Apply
          </StyledButton>
        </form>
      </IonContent>
    </IonPage>
  )
}
