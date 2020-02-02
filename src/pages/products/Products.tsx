import React, { useState } from 'react';
import {
  IonList,
  IonItem,
  IonReorder,
  IonReorderGroup,
  IonToggle,
  IonCheckbox,
  IonGrid,
  IonRow,
  IonCol,
  IonFab,
  IonFabButton,
  IonIcon,
  IonModal,
  IonListHeader,
  IonSearchbar
} from '@ionic/react';

import { Product } from './Product';
import { IProductToUpdate } from './Products-Types';
import { useProductsController } from './Products-Controller';
import { add } from 'ionicons/icons';

export const Products: React.FC = () => {
  const { addProduct, products, doReorder, updateProduct, deleteProduct } = useProductsController();

  const [showModal, setShowModal] = useState(false);
  
  function handleToBuyValue(event: any) {
    const item: IProductToUpdate = {
      id: event.target.id,
      toBuy: event.target.checked
    }

    if (event.target.value !== event.target.checked.toString()) {
      updateProduct(item)
    }
  }

  return (
    <>
      <IonSearchbar placeholder="Search products" style={{padding: "0px"}}></IonSearchbar>
      {/* <IonItem>
        <IonLabel>Sort by</IonLabel>
        <IonSelect placeholder="Select one">
          <IonSelectOption value="order">Order</IonSelectOption>
          <IonSelectOption value="name">Name</IonSelectOption>
          <IonSelectOption value="toBuy">To buy</IonSelectOption>
        </IonSelect>
      </IonItem> */}
      <IonList>
        <IonListHeader>
          <IonGrid>
            <IonRow>
              <IonCol size="7">Name</IonCol>
              <IonCol size="3">To buy</IonCol>
              <IonCol size="2">Done</IonCol>
            </IonRow>
          </IonGrid>
        </IonListHeader>
        <IonReorderGroup disabled={true} onIonItemReorder={doReorder}>
          {products.map((product, index) => (
            <IonItem key={index}>
              <IonGrid>
                <IonRow>
                  <IonCol size="7">
                    {product.name} ({product.quantity})
                  </IonCol>
                  <IonCol size="3" style={{padding: "0px"}}>
                    <IonToggle id={product.id} value={product.toBuy.toString()}
                      checked={product.toBuy} onIonChange={handleToBuyValue}
                      style={{padding: "5px 0px"}}/>
                  </IonCol>
                  <IonCol size="2" ion-no-padding>
                    <IonCheckbox color="primary" style={{margin: "0px"}}/>
                  </IonCol>
                </IonRow>
              </IonGrid>
              <IonReorder slot="end" style={{marginLeft: "4px"}} />
            </IonItem>
          ))}
        </IonReorderGroup>
      </IonList>
      <IonFab vertical="bottom" horizontal="center" slot="fixed">
        <IonFabButton onClick={() => setShowModal(true)}>
          <IonIcon icon={add}></IonIcon>
        </IonFabButton>
      </IonFab>
      <IonModal isOpen={showModal} animated backdropDismiss={false}>
        <Product isNew apply={addProduct} close={() => setShowModal(false)} />
      </IonModal>
    </>
  );
};
