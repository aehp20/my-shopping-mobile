import React from 'react'
import {
  IonInput,
  IonItem,
  IonLabel,
  IonToggle,
  IonText,
  IonButton,
  IonList,
  IonGrid,
  IonRow,
  IonCol,
  IonTitle,
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
import { TITLE_NEW_PRODUCT, TITLE_EDIT_PRODUCT } from './Product-Constants'
import { IProductParams } from './Product-Types'

export function Product({ match }: RouteComponentProps<IProductParams>) {
  const { idListProducts, id } = match.params
  //const { findProduct, addProduct, editProduct, setIsSortedProducts } = useProductsContext()
  const { isNew } = useProductController(idListProducts, id)

  // const product = findProduct(id)

  // const close = () => {
  //   props.history.push(HOME_PATH);
  // }

  // const apply = id ? editProduct : addProduct

  // const {
  //   name,
  //   quantity,
  //   toBuy,
  //   description,
  //   handleNameValue,
  //   handleQuantityValue,
  //   handleToBuyValue,
  //   handleDescriptionValue,
  //   handleApply,
  //   validationResponse
  // } = useProductController({product, apply, setIsSortedProducts, close})

  const title = isNew ? TITLE_NEW_PRODUCT : TITLE_EDIT_PRODUCT

  const name = ''
  const quantity = ''
  const toBuy = true
  const description = ''
  const handleName = () => null
  const handleQuantity = () => null
  const handleToBuy = () => null
  const handleDescription = () => null
  const handleApply = () => null
  const validationResponse: any = {}

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton defaultHref={HOME_PATH} />
          </IonButtons>
          <IonTitle style={{ padding: '6px 0px' }}>{title}</IonTitle>
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
            <IonItem>
              <IonLabel>
                <IonText>
                  <h6>To buy</h6>
                </IonText>
              </IonLabel>
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
          <IonGrid>
            <IonRow>
              <IonCol size='6'>
                <IonButton
                  expand='full'
                  style={{ textTransform: 'none' }}
                  onClick={handleApply}
                  strong
                >
                  Apply
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </form>
      </IonContent>
    </IonPage>
  )
}
