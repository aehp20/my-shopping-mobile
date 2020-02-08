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
import { add } from 'ionicons/icons';
import classNames from 'classnames';

import { Product } from './Product';
import { useProductsController } from './Products-Controller';

import './Products.css';

export const Products: React.FC = () => {
  const { addProduct, products, doReorder, handleToBuyValue, 
    handleSelectedProduct } = useProductsController();

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <IonSearchbar placeholder="Search products"
        style={{padding: "0px", position: "fixed", zIndex: "10"}}>
      </IonSearchbar>
      {/* <IonItem>
        <IonLabel>Sort by</IonLabel>
        <IonSelect placeholder="Select one">
          <IonSelectOption value="order">Order</IonSelectOption>
          <IonSelectOption value="name">Name</IonSelectOption>
          <IonSelectOption value="toBuy">To buy</IonSelectOption>
        </IonSelect>
      </IonItem> */}
      <IonList style={{marginTop: "42px"}}>
        <IonListHeader style={{height: "15px", minHeight: "15px"}}>
          <IonGrid>
            <IonRow>
              <IonCol size="2">Done</IonCol>
              <IonCol size="7">Name</IonCol>
              <IonCol size="3">To buy</IonCol>
            </IonRow>
          </IonGrid>
        </IonListHeader>
        <IonReorderGroup disabled={true} onIonItemReorder={doReorder}>
          {products.map((product, index) => (
            <IonItem key={index} className={classNames({'enable-product': product.isSelected})}>
              <IonGrid>
                <IonRow>
                  <IonCol size="2" ion-no-padding>
                    <IonCheckbox color="primary" style={{margin: "0px"}}
                      id={product.id} value={product.isSelected ? 'true' : 'false'}
                      checked={product.isSelected} onIonChange={handleSelectedProduct}
                    />
                  </IonCol>
                  <IonCol size="7">
                    {product.name} ({product.quantity})
                  </IonCol>
                  <IonCol size="3" style={{padding: "0px"}}>
                    <IonToggle id={product.id} value={product.toBuy.toString()}
                      checked={product.toBuy} onIonChange={handleToBuyValue}
                      style={{padding: "5px 0px"}}/>
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
