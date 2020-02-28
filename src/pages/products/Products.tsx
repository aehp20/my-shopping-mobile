import React from 'react';
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
  IonListHeader,
  IonSearchbar,
  IonButton,
  IonAlert
} from '@ionic/react';
import { Link } from 'react-router-dom';
import { add, trash } from 'ionicons/icons';
import classNames from 'classnames';

import { useProductsController } from './Products-Controller';
import { PRODUCT_NEW_PATH } from '../../App-Constants';
import { DONE_COL_SIZE, NAME_COL_SIZE, TO_BUY_COL_SIZE } from './Products-Constants';
import { IProduct } from './Product-Types';

import './Products.css';

export const Products: React.FC = () => {
  const {
    products, handleToBuyValue, handleSelectedProduct,
    isAllSelected, handleSelectedAllProducts,
    areThereSelectedProducts,
    showConfirmDeletionAlert,
    setShowConfirmDeletionAlert,
    deleteProducts
  } = useProductsController();

  const SIZE_SEARCH_PRODUCTS = areThereSelectedProducts ? "9" : "12"

  const getName = (product: IProduct) => {
    const quantity = product.quantity ? `(${product.quantity})` : ''
    return `${product.name} ${quantity}`
  }

  return (
    <>
      <IonGrid className="actions-bar-products">
        <IonRow>
          <IonCol size={SIZE_SEARCH_PRODUCTS}>
            <IonSearchbar placeholder="Search products">
            </IonSearchbar>
          </IonCol>
          {
            areThereSelectedProducts && (
              <IonCol size="3" className="delete-products-button">
                <IonButton color="danger" onClick={() => setShowConfirmDeletionAlert(true)}>
                  <IonIcon icon={trash} size="large"></IonIcon>
                </IonButton>
              </IonCol>
            )
          }
        </IonRow>
      </IonGrid>
      <IonAlert
        isOpen={showConfirmDeletionAlert}
        onDidDismiss={() => setShowConfirmDeletionAlert(false)}
        header={'Confirm deletion'}
        message={'Are you sure you want to delete the selected item(s)?'}
        buttons={[
          {
            text: 'Cancel',
            handler: () => {
              setShowConfirmDeletionAlert(false)
            }
          },
          {
            text: 'Ok',
            handler: () => {
              deleteProducts()
            }
          }
        ]}
      />

      <IonList style={{marginTop: "50px"}}>
        <IonListHeader style={{padding: "0px"}}>
          <IonItem style={{width: "100%"}}>
            <IonGrid>
              <IonRow>
                <IonCol size={DONE_COL_SIZE} ion-no-padding>
                  <IonCheckbox color="primary" style={{margin: "0px"}}
                    value={isAllSelected ? 'true' : 'false'}
                    checked={isAllSelected}
                    onIonChange={handleSelectedAllProducts}
                  />
                </IonCol>
                <IonCol size={NAME_COL_SIZE}>Name</IonCol>
                <IonCol size={TO_BUY_COL_SIZE}>Buy</IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
        </IonListHeader>
        <IonReorderGroup disabled={true} onIonItemReorder={()=>null}>
          {products.map((product, index) => (
            <IonItem key={index} className={classNames({'enable-product': product.isSelected})}>
              <IonGrid>
                <IonRow>
                  <IonCol size={DONE_COL_SIZE} ion-no-padding>
                    <IonCheckbox color="primary" style={{margin: "0px"}}
                      id={product.id} value={product.isSelected ? 'true' : 'false'}
                      checked={product.isSelected} onIonChange={handleSelectedProduct}
                      disabled={!product.toBuy}
                    />
                  </IonCol>
                  <IonCol size={NAME_COL_SIZE}>
                    <Link
                      to={`/product/${product.id}`}
                      className={classNames('my-link', {'no-buy': !product.toBuy})}>
                      {getName(product)}
                    </Link>
                  </IonCol>
                  <IonCol size={TO_BUY_COL_SIZE} style={{padding: "0px"}}>
                    <IonToggle id={product.id} value={product.toBuy.toString()}
                      checked={product.toBuy} onIonChange={handleToBuyValue}
                      style={{padding: "5px 0px"}} disabled={product.isSelected}/>
                  </IonCol>
                </IonRow>
              </IonGrid>
              <IonReorder slot="end" style={{marginLeft: "4px"}} />
            </IonItem>
          ))}
        </IonReorderGroup>
      </IonList>
      <IonFab vertical="bottom" horizontal="center" slot="fixed">
        <IonFabButton routerLink={PRODUCT_NEW_PATH}>
          <IonIcon icon={add}></IonIcon>
        </IonFabButton>
      </IonFab>
    </>
  );
};
