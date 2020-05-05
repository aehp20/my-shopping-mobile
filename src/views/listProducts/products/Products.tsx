import React from 'react'
import {
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar,
  IonButton,
  IonIcon
} from '@ionic/react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { trash } from 'ionicons/icons'

import { IProductsProps } from './Products-Types'
import {
  DONE_COL_SIZE,
  NAME_COL_SIZE,
  TO_BUY_COL_SIZE,
  SEARCH_PRODUCTS_REDUCED_COL_SIZE,
  SEARCH_PRODUCTS_COL_SIZE
} from './Products-Constants'
import { AddItemButton } from '../../../common/components/addItemButton'
import { EmptyListMessage } from '../../../common/components/emptyListMessage'
import {
  StyledHeaderItem,
  StyledHeaderList,
  StyledList,
  StyledActionsBar,
  StyledColumnDelete,
  StyledColumnToBuy,
  StyledToggleToBuy
} from './Products-Styles'
import { getName } from './Products-Utils'
import { StyledCheckbox } from '../../../common/styles'
import { useProductsController } from './Products-Controller'
import { hasListItems } from '../../../common/utils'

export function Products(props: IProductsProps) {
  const { products } = props
  const { filteredProducts, handleSearch } = useProductsController(products)
  const items = !!filteredProducts ? filteredProducts : products

  const isAllSelected = false
  const areThereSelectedProducts = true
  const handleSelectedAllProducts = () => null
  const handleSelectedProduct = () => null
  const handleToBuyValue = () => null
  const setShowConfirmDeletionAlert = (a: boolean) => null

  const SIZE_SEARCH_PRODUCTS = areThereSelectedProducts
    ? SEARCH_PRODUCTS_REDUCED_COL_SIZE
    : SEARCH_PRODUCTS_COL_SIZE

  const listMessage =
    hasListItems(products) && !hasListItems(filteredProducts) ? (
      <div>Items not found</div>
    ) : (
      <EmptyListMessage />
    )

  return (
    <>
      <StyledActionsBar>
        <IonRow>
          <IonCol size={SIZE_SEARCH_PRODUCTS}>
            <IonSearchbar
              placeholder='Search products'
              onIonChange={handleSearch}
            ></IonSearchbar>
          </IonCol>
          {areThereSelectedProducts && (
            <StyledColumnDelete size='3'>
              <IonButton
                color='danger'
                onClick={() => setShowConfirmDeletionAlert(true)}
              >
                <IonIcon icon={trash} size='large'></IonIcon>
              </IonButton>
            </StyledColumnDelete>
          )}
        </IonRow>
      </StyledActionsBar>

      {/* <ConfirmDeletionDialog
            isOpen={isOpenConfirmDeletionDialog}
            cancelFn={closeConfirmDeletionDialog}
            okFn={deleteSelectedList}
          /> */}

      <StyledList>
        <StyledHeaderList>
          <StyledHeaderItem>
            <IonGrid>
              <IonRow>
                <IonCol size={DONE_COL_SIZE} ion-no-padding>
                  <StyledCheckbox
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
          </StyledHeaderItem>
        </StyledHeaderList>

        {hasListItems(items)
          ? items!.map((product, index) => (
              <IonItem
                key={index}
                className={classNames({
                  'products-enable-product': product.isSelected
                })}
              >
                <IonGrid>
                  <IonRow>
                    <IonCol size={DONE_COL_SIZE} ion-no-padding>
                      <StyledCheckbox
                        color='primary'
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
                    <StyledColumnToBuy size={TO_BUY_COL_SIZE}>
                      <StyledToggleToBuy
                        id={product.id}
                        value={'product.toBuy.toString()'}
                        checked={product.toBuy}
                        onIonChange={handleToBuyValue}
                        disabled={product.isSelected}
                      />
                    </StyledColumnToBuy>
                  </IonRow>
                </IonGrid>
              </IonItem>
            ))
          : listMessage}
      </StyledList>
      <AddItemButton path={'LIST_PRODUCTS_NEW_PATH'} />
    </>
  )
}
