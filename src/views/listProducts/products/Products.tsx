import React from 'react'
import {
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar,
  IonButton,
  IonIcon,
} from '@ionic/react'
import { trash } from 'ionicons/icons'

import { IProductsProps } from './Products-Types'
import {
  DONE_COL_SIZE,
  NAME_COL_SIZE,
  TO_BUY_COL_SIZE,
  SEARCH_PRODUCTS_REDUCED_COL_SIZE,
  SEARCH_PRODUCTS_COL_SIZE,
} from './Products-Constants'
import { EmptyListMessage } from '../../../common/components/emptyListMessage'
import {
  StyledHeaderItem,
  StyledHeaderList,
  StyledList,
  StyledActionsBar,
  StyledColumnDelete,
  StyledColumnToBuy,
  StyledToggleToBuy,
  StyledItemProduct,
} from './Products-Styles'
import { getName, getLink } from './Products-Utils'
import { StyledCheckbox } from '../../../common/styles'
import { useProductsController } from './Products-Controller'
import { hasListItems } from '../../../common/utils'
import { ConfirmDeletionDialog } from '../../../common/components/confirmDialog'
import { MyUIInfo, MyUIAddFabButton } from '../../../common/myUIComponents'

export function Products(props: IProductsProps) {
  const { id: idListProducts, name, products } = props
  const {
    items,
    isAllSelected,
    areThereSelectedProducts,
    notFoundFilteredProducts,
    isOpenConfirmDeletionDialog,
    openConfirmDeletionDialog,
    closeConfirmDeletionDialog,
    deleteSelectedList,
    handleSelectedProduct,
    handleToBuyValue,
    handleSelectedAllProducts,
    handleSearch,
  } = useProductsController(idListProducts, name, products)

  const SIZE_SEARCH_PRODUCTS = areThereSelectedProducts
    ? SEARCH_PRODUCTS_REDUCED_COL_SIZE
    : SEARCH_PRODUCTS_COL_SIZE

  const listMessage = notFoundFilteredProducts ? (
    <MyUIInfo>Items not found</MyUIInfo>
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
              <IonButton color='danger' onClick={openConfirmDeletionDialog}>
                <IonIcon icon={trash}></IonIcon>
              </IonButton>
            </StyledColumnDelete>
          )}
        </IonRow>
      </StyledActionsBar>

      <ConfirmDeletionDialog
        isOpen={isOpenConfirmDeletionDialog}
        cancelFn={closeConfirmDeletionDialog}
        okFn={deleteSelectedList}
      />

      <StyledList>
        <StyledHeaderList>
          <StyledHeaderItem>
            <IonGrid>
              <IonRow>
                <IonCol size={DONE_COL_SIZE} ion-no-padding>
                  <StyledCheckbox
                    color='primary'
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
              <StyledItemProduct key={index} isSelected={!!product.isSelected}>
                <IonGrid>
                  <IonRow>
                    <IonCol size={DONE_COL_SIZE} ion-no-padding>
                      <StyledCheckbox
                        color='primary'
                        id={product.id}
                        value={!!product.isSelected ? 'true' : 'false'}
                        checked={!!product.isSelected}
                        onIonChange={handleSelectedProduct}
                        disabled={!product.toBuy}
                      />
                    </IonCol>
                    <IonCol size={NAME_COL_SIZE}>
                      {getLink(
                        `/list-products/${idListProducts}/product/${product.id}`,
                        getName(product)
                      )}
                    </IonCol>
                    <StyledColumnToBuy size={TO_BUY_COL_SIZE}>
                      <StyledToggleToBuy
                        id={product.id}
                        value={(!!product.toBuy).toString()}
                        checked={product.toBuy}
                        onIonChange={handleToBuyValue}
                        disabled={product.isSelected}
                      />
                    </StyledColumnToBuy>
                  </IonRow>
                </IonGrid>
              </StyledItemProduct>
            ))
          : listMessage}
      </StyledList>

      <MyUIAddFabButton path={`/list-products/${idListProducts}/product`} />
    </>
  )
}
