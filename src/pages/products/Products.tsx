import React from 'react';
import {
  IonList,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonReorder,
  IonReorderGroup,
  IonToggle,
  IonCheckbox,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';

import { IProductsProps, IProductToUpdate } from './Products-Types';

export const Products: React.FC<IProductsProps> = (props) => {
  const { products, doReorder, updateProduct } = props

  function handleToBuyValue(event: any) {
    const item: IProductToUpdate = {
      id: event.target.id,
      toBuy: event.target.checked
    }
    console.log(item)
/*
    if (event.target.id !== event.target.checked.toString()) {
      updateProduct(item)
    }
    */
  }

  return (
    <>
      <IonItem>
        <IonLabel>Sort by</IonLabel>
        <IonSelect placeholder="Select one">
          <IonSelectOption value="order">Order</IonSelectOption>
          <IonSelectOption value="name">Name</IonSelectOption>
          <IonSelectOption value="toBuy">To buy</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonList>
        <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
          {products.map((product, index) => (
            <IonItem key={index}>
              <IonGrid>
                <IonRow>
                  <IonCol size="5">
                    {product.name}
                    <br/>
                    {product.quantity}
                  </IonCol>
                  <IonCol size="4" style={{textAlign: "center"}}>
                    To buy
                    <IonToggle id={product.id} checked={product.toBuy} onIonChange={handleToBuyValue} />
                  </IonCol>
                  <IonCol size="3" style={{textAlign: "center"}}>
                    Done
                    <IonCheckbox color="primary" />
                  </IonCol>
                </IonRow>
              </IonGrid>
              <IonReorder slot="end" style={{marginLeft: "4px"}} />
            </IonItem>
          ))}
        </IonReorderGroup>
      </IonList>
    </>
  );
};
