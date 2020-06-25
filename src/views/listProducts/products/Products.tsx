import React from 'react'

import { IProductsProps } from './Products-Types'
import {
  DONE_COL_SIZE,
  NAME_COL_SIZE,
  TO_BUY_COL_SIZE,
} from './Products-Constants'
import { EmptyListMessage } from '../../../common/components/emptyListMessage'
import {
  StyledHeaderItem,
  StyledHeaderList,
  StyledList,
  StyledActionsBar,
  StyledToggleToBuy,
  StyledItemProduct,
} from './Products-Styles'
import { getName, getLink } from './Products-Utils'
import { StyledCheckbox } from '../../../common/styles'
import { useProductsController } from './Products-Controller'
import { hasListItems } from '../../../common/utils'
import { ConfirmDeletionDialog } from '../../../common/components/confirmDialog'
import {
  MyUIInfo,
  MyUIAddFabButton,
  MyUISearchbar,
  MyUIGrid,
  MyUIRow,
  MyUICol,
  MyUIHorizontalSpace,
  MyUIButton,
  MyUITrashIcon,
  MyUIText,
} from '../../../common/myUIComponents'

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

  const listMessage = notFoundFilteredProducts ? (
    <MyUIInfo>Items not found</MyUIInfo>
  ) : (
    <EmptyListMessage />
  )

  return (
    <>
      <StyledActionsBar>
        <MyUISearchbar
          placeholder='Search products'
          onIonChange={handleSearch}
        />

        {areThereSelectedProducts && (
          <>
            <MyUIHorizontalSpace width='6px' />
            <MyUIButton color='danger' onClick={openConfirmDeletionDialog}>
              <MyUITrashIcon />
            </MyUIButton>
          </>
        )}
      </StyledActionsBar>

      <ConfirmDeletionDialog
        isOpen={isOpenConfirmDeletionDialog}
        cancelFn={closeConfirmDeletionDialog}
        okFn={deleteSelectedList}
      />

      <StyledList>
        <StyledHeaderList>
          <StyledHeaderItem>
            <MyUIGrid>
              <MyUIRow>
                <MyUICol size={DONE_COL_SIZE} ion-no-padding>
                  <StyledCheckbox
                    color='primary'
                    value={isAllSelected ? 'true' : 'false'}
                    checked={isAllSelected}
                    onIonChange={handleSelectedAllProducts}
                  />
                </MyUICol>
                <MyUICol size={NAME_COL_SIZE}>
                  <MyUIText>Name</MyUIText>
                </MyUICol>
                <MyUICol size={TO_BUY_COL_SIZE}>
                  <MyUIText>Buy</MyUIText>
                </MyUICol>
              </MyUIRow>
            </MyUIGrid>
          </StyledHeaderItem>
        </StyledHeaderList>

        {hasListItems(items)
          ? items!.map((product, index) => (
              <StyledItemProduct key={index} isSelected={!!product.isSelected}>
                <MyUIGrid>
                  <MyUIRow>
                    <MyUICol size={DONE_COL_SIZE} ion-no-padding>
                      <StyledCheckbox
                        color='primary'
                        id={product.id}
                        value={!!product.isSelected ? 'true' : 'false'}
                        checked={!!product.isSelected}
                        onIonChange={handleSelectedProduct}
                        disabled={!product.toBuy}
                      />
                    </MyUICol>
                    <MyUICol size={NAME_COL_SIZE}>
                      {getLink(
                        `/list-products/${idListProducts}/product/${product.id}`,
                        getName(product)
                      )}
                    </MyUICol>
                    <MyUICol size={TO_BUY_COL_SIZE}>
                      <StyledToggleToBuy
                        id={product.id}
                        value={(!!product.toBuy).toString()}
                        checked={product.toBuy}
                        onIonChange={handleToBuyValue}
                        disabled={product.isSelected}
                      />
                    </MyUICol>
                  </MyUIRow>
                </MyUIGrid>
              </StyledItemProduct>
            ))
          : listMessage}
      </StyledList>

      <MyUIAddFabButton path={`/list-products/${idListProducts}/product`} />
    </>
  )
}
