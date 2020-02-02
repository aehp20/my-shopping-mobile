import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
} from '@ionic/react';

import { Products } from './products/Products';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonTitle style={{padding: "6px"}}>Products</IonTitle>
      </IonHeader>
      <IonContent>
        <Products />
      </IonContent>
    </IonPage>
  );
};

export default Home;
