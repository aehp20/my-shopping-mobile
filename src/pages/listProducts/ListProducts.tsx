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
  IonItem,
} from '@ionic/react'

import { HOME_PATH } from '../../App-Constants'
import { useListProductsController } from './ListProducts-Controller'
import { Products } from '../products'
import { LIST_PRODUCTS_NAME_ERROR_REQUIRED } from './ListProducts-Constants'

import './ListProducts.css'

export function ListProducts(props: any) {
  // TODO
  const { id } = props.match.params
  const {
    idListProducts,
    name,
    products,
    handleName,
    saveProducts,
  } = useListProductsController(id)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={HOME_PATH} />
          </IonButtons>
          <IonInput
            autofocus={true}
            required
            type="text"
            value={name}
            onIonChange={handleName}
            placeholder="Enter the name"
            clearInput
          />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {!name && (
          <IonItem className="list-products-validation-error">
            <IonText color="danger">
              {LIST_PRODUCTS_NAME_ERROR_REQUIRED}
            </IonText>
          </IonItem>
        )}
        <Products
          idListProducts={idListProducts}
          products={products}
          saveProducts={saveProducts}
        />
      </IonContent>
    </IonPage>
  )
}
