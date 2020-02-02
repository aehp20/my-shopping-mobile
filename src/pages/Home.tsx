import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonSearchbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonModal
} from '@ionic/react';
import { add } from 'ionicons/icons';

import { Products } from './products/Products';
import { Product } from './products/Product';
import { useProductsController } from './products/Products-Controller'

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const { addProduct, products, doReorder, updateProduct, deleteProduct } = useProductsController();

  return (
    <IonPage>
      <IonHeader>
        <IonSearchbar placeholder="Filter products"></IonSearchbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <Products products={products} doReorder={doReorder} updateProduct={updateProduct} />
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => setShowModal(true)}>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>
        <IonModal isOpen={showModal} animated backdropDismiss={false}>
          <Product isNew apply={addProduct} close={() => setShowModal(false)} />
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;
