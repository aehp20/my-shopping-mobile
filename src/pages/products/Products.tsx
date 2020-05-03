import React from 'react'
import {
  IonList,
  IonItem,
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
  IonAlert,
  IonText,
} from '@ionic/react'
import { Link } from 'react-router-dom'
import { add, trash } from 'ionicons/icons'
import classNames from 'classnames'

import { useProductsController } from './Products-Controller'
import { PRODUCT_NEW_PATH } from '../product/Product-Constants'
import {
  DONE_COL_SIZE,
  NAME_COL_SIZE,
  TO_BUY_COL_SIZE,
  SEARCH_PRODUCTS_COL_SIZE,
  SEARCH_PRODUCTS_REDUCED_COL_SIZE,
} from './Products-Constants'
import { IProduct } from '../product/Product-Types'

import './Products.css'

export function Products(props: any) {
  const idListProducts = props.idListProducts
  const {
    products,
    filteredProducts,
    isAllSelected,
    handleSelectedAllProducts,
    handleSelectedProduct,
    areThereSelectedProducts,
    searchProducts,
    showConfirmDeletionAlert,
    setShowConfirmDeletionAlert,
    deleteProducts,
    handleToBuyValue,
  } = useProductsController(props)

  const items = !!filteredProducts.length ? filteredProducts : products
  const SIZE_SEARCH_PRODUCTS = areThereSelectedProducts
    ? SEARCH_PRODUCTS_REDUCED_COL_SIZE
    : SEARCH_PRODUCTS_COL_SIZE

  const getName = (product: IProduct) => {
    const quantity = product.quantity ? `(${product.quantity})` : ''
    return `${product.name} ${quantity}`
  }

  return (
    <>
      {!!items.length ? (
        <>
          <IonGrid className="products-actions-bar">
            <IonRow>
              <IonCol size={SIZE_SEARCH_PRODUCTS}>
                <IonSearchbar
                  placeholder="Search products"
                  onIonChange={searchProducts}
                ></IonSearchbar>
              </IonCol>
              {areThereSelectedProducts && (
                <IonCol size="3" className="products-delete-button">
                  <IonButton
                    color="danger"
                    onClick={() => setShowConfirmDeletionAlert(true)}
                  >
                    <IonIcon icon={trash} size="large"></IonIcon>
                  </IonButton>
                </IonCol>
              )}
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
                },
              },
              {
                text: 'Ok',
                handler: () => {
                  deleteProducts()
                },
              },
            ]}
          />

          <IonList className="products-list">
            <IonListHeader className="products-list-header">
              <IonItem className="products-list-item">
                <IonGrid>
                  <IonRow>
                    <IonCol size={DONE_COL_SIZE} ion-no-padding>
                      <IonCheckbox
                        color="primary"
                        className="checkout-customize"
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
            {items.map((product, index) => (
              <IonItem
                key={index}
                className={classNames({
                  'products-enable-product': product.isSelected,
                })}
              >
                <IonGrid>
                  <IonRow>
                    <IonCol size={DONE_COL_SIZE} ion-no-padding>
                      <IonCheckbox
                        color="primary"
                        className="checkout-customize"
                        id={product.id}
                        value={product.isSelected ? 'true' : 'false'}
                        checked={product.isSelected}
                        onIonChange={handleSelectedProduct}
                        disabled={!product.toBuy}
                      />
                    </IonCol>
                    <IonCol size={NAME_COL_SIZE}>
                      <Link
                        to={`/product/${product.id}`}
                        className={classNames('products-link', {
                          'products-no-buy': !product.toBuy,
                        })}
                      >
                        {getName(product)}
                      </Link>
                    </IonCol>
                    <IonCol
                      size={TO_BUY_COL_SIZE}
                      className="products-list-col"
                    >
                      <IonToggle
                        id={product.id}
                        value={product.toBuy.toString()}
                        checked={product.toBuy}
                        onIonChange={handleToBuyValue}
                        disabled={product.isSelected}
                        className="products-list-toggle"
                      />
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            ))}
          </IonList>
        </>
      ) : (
        <IonItem className="products-empty-list">
          <IonText>No Products Found</IonText>
        </IonItem>
      )}
      <IonFab vertical="bottom" horizontal="center" slot="fixed">
        <IonFabButton routerLink={`/product/${idListProducts}`}>
          <IonIcon icon={add}></IonIcon>
        </IonFabButton>
      </IonFab>
    </>
  )
}
