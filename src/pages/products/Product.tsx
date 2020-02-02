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
  IonTitle
} from '@ionic/react';

import { IProductProps } from './Product-Types';
import { useProductController } from './Product-Controller';
import { TITLE_NEW_PRODUCT, TITLE_EDIT_PRODUCT } from './Product-Constants';

export const Product: React.FC<IProductProps> = (props) => {
  const { isNew, apply, close } = props

  const {
    handleNameValue,
    handleQuantityValue,
    handleToBuyValue,
    handleApply,
    validationResponse,
    toBuy
  } = useProductController({isNew, apply, close})

  const title = isNew ? TITLE_NEW_PRODUCT : TITLE_EDIT_PRODUCT

  return (
    <form>
      <IonTitle color="primary">{title}</IonTitle>
      <IonList>
        <IonItem>
          <IonLabel position="stacked">Name <IonText color="danger">*</IonText></IonLabel>
          <IonInput required type="text" onIonChange={handleNameValue}></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Quantity <IonText color="danger">*</IonText></IonLabel>
          <IonInput required type="text" onIonChange={handleQuantityValue}></IonInput>
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
              onClick={close} strong>
              Cancel
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </form>
  );
};
