import React from 'react'
import {
  IonInput,
  IonItem,
  IonLabel,
  IonToggle,
  IonText,
  IonList,
  IonPage,
  IonToolbar,
  IonTextarea,
} from '@ionic/react'
import { RouteComponentProps } from 'react-router'

import { useProductController } from './Product-Controller'
import {
  StyledTitle,
  StyledButton,
  StyledLabelForToggle,
} from './Product-Styles'
import { StyledErrorSection } from '../../../common/styles'
import { getListProductsPath } from '../../listsProducts/ListsProducts-Utils'
import { IProductParams } from './Product-Types'
import { BackButton } from '../../../common/components/backButton'
import { MyUIHeader, MyUIContent } from '../../../common/myUIComponents'

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
    apply,
  } = useProductController(idListProducts, id)

  return (
    <IonPage>
      <MyUIHeader>
        <IonToolbar>
          <BackButton to={getListProductsPath(idListProducts)} />
          <StyledTitle>{title}</StyledTitle>
        </IonToolbar>
      </MyUIHeader>
      <MyUIContent>
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
          </IonList>

          {validationResponse.error && (
            <StyledErrorSection>
              <IonText color='danger'>{validationResponse.message}</IonText>
            </StyledErrorSection>
          )}

          <StyledButton expand='full' onClick={apply} strong>
            Apply
          </StyledButton>
        </form>
      </MyUIContent>
    </IonPage>
  )
}
