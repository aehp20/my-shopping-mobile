import React from 'react';
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
  IonContent
} from '@ionic/react';

import { IProductProps } from './Product-Types';
import { useProductController } from './Product-Controller';
import { TITLE_NEW_PRODUCT, TITLE_EDIT_PRODUCT } from './Product-Constants';
import { useProductsContext } from './Products-Context';
import { HOME_PATH } from '../../App-Constants';

export const Product: React.FC<IProductProps> = (props) => {
  const { findProduct, addProduct, editProduct, setIsSortedProducts } = useProductsContext()
  const { id } = props.match.params

  const product = findProduct(id)

  const close = () => {
    props.history.push(HOME_PATH);
  }

  const apply = id ? editProduct : addProduct

  const {
    name,
    quantity,
    toBuy,
    handleNameValue,
    handleQuantityValue,
    handleToBuyValue,
    handleApply,
    validationResponse
  } = useProductController({product, apply, setIsSortedProducts, close})

  const title = id ? TITLE_EDIT_PRODUCT : TITLE_NEW_PRODUCT

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={HOME_PATH} />
          </IonButtons>
          <IonTitle style={{padding: "6px 0px"}}>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form>
          <IonList>
            <IonItem>
              <IonLabel position="stacked">Name <IonText color="danger">*</IonText></IonLabel>
              <IonInput autofocus={true} required type="text" value={name} onIonChange={handleNameValue}
                clearInput></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Quantity <IonText color="danger">*</IonText></IonLabel>
              <IonInput required type="text" value={quantity} onIonChange={handleQuantityValue}
                clearInput></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel>
                <IonText>
                  <h6>To buy</h6>
                </IonText>
              </IonLabel>
              <IonToggle mode="ios" checked={toBuy} onIonChange={handleToBuyValue} />
            </IonItem>
            {
              validationResponse.error && (
                <>
                  <br />
                  <IonText color="danger">{validationResponse.message}</IonText>
                </>
              )
            }
          </IonList>
          <IonGrid>
            <IonRow>
              <IonCol size="6">
                <IonButton expand="full" style={{textTransform:"none"}} onClick={handleApply} strong>
                  Apply
                </IonButton>
              </IonCol>
              <IonCol size="6">
                <IonButton color="medium" expand="full" style={{textTransform:"none"}}
                  strong routerLink={HOME_PATH}>
                  Cancel
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </form>
      </IonContent>
    </IonPage>
  );
};
