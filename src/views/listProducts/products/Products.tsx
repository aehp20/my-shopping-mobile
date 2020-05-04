import React from 'react'
import {
  IonList,
  IonListHeader,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonCheckbox,
  IonToggle
} from '@ionic/react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import { IProductsProps } from './Products-Types'
import { IProduct } from '../../listsProducts/ListsProducts-Types'
import {
  DONE_COL_SIZE,
  NAME_COL_SIZE,
  TO_BUY_COL_SIZE
} from './Products-Constants'
import { AddItemButton } from '../../../common/components/addItemButton'
import { EmptyListMessage } from '../../../common/components/emptyListMessage'

export function Products(props: IProductsProps) {
  const { products } = props
  const items = products

  const isAllSelected = false
  const handleSelectedAllProducts = () => null
  const handleSelectedProduct = () => null
  const handleToBuyValue = () => null

  const getName = (product: IProduct) => {
    const quantity = product.quantity ? `(${product.quantity})` : ''
    return `${product.name} ${quantity}`
  }

  return (
    <>
      {!!items && !!items.length ? (
        <>
          <IonList className='products-list'>
            <IonListHeader className='products-list-header'>
              <IonItem className='products-list-item'>
                <IonGrid>
                  <IonRow>
                    <IonCol size={DONE_COL_SIZE} ion-no-padding>
                      <IonCheckbox
                        color='primary'
                        className='checkout-customize'
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
                  'products-enable-product': product.isSelected
                })}
              >
                <IonGrid>
                  <IonRow>
                    <IonCol size={DONE_COL_SIZE} ion-no-padding>
                      <IonCheckbox
                        color='primary'
                        className='checkout-customize'
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
                          'products-no-buy': !product.toBuy
                        })}
                      >
                        {getName(product)}
                      </Link>
                    </IonCol>
                    <IonCol
                      size={TO_BUY_COL_SIZE}
                      className='products-list-col'
                    >
                      <IonToggle
                        id={product.id}
                        value={'product.toBuy.toString()'}
                        checked={product.toBuy}
                        onIonChange={handleToBuyValue}
                        disabled={product.isSelected}
                        className='products-list-toggle'
                      />
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            ))}
          </IonList>
        </>
      ) : (
        <EmptyListMessage />
      )}
      <AddItemButton path={'LIST_PRODUCTS_NEW_PATH'} />
    </>
  )
}
