import React from 'react'
import { trash } from 'ionicons/icons'

import { hasListItems } from '../../common/utils'
import {
  StyledProducts,
  StyledName,
  StyledHeader,
  StyledTrashIcon,
} from './ListsProducts-Styles'
import {
  displayProducts,
  getListProductsPath,
  getNumberOfProducts,
} from './ListsProducts-Utils'
import { LIST_PRODUCTS_NEW_PATH } from '../listProducts/ListProducts-Constants'
import { EmptyListMessage } from '../../common/components/emptyListMessage'
import { useListsProductsController } from './ListsProducts-Controller'
import { ConfirmDeletionDialog } from '../../common/components/confirmDialog'
import { StyledLink, StyledHeaderLink } from '../../common/styles'
import { EmptyEspace } from '../../common/components/emptyEspace'
import { MENU_PATH } from '../menu/Menu-Constants'
import {
  MyUIAddFabButton,
  MyUIMenuFabButton,
  MyUIGrid,
  MyUIRow,
  MyUICol,
} from '../../common/myUIComponents'

export function ListsProducts() {
  const {
    rowsProducts,
    isOpenConfirmDeletionDialog,
    openConfirmDeletionDialog,
    closeConfirmDeletionDialog,
    deleteSelectedList,
  } = useListsProductsController()

  return (
    <div>
      {hasListItems(rowsProducts) ? (
        <>
          <MyUIGrid>
            {rowsProducts.map((item, indexRow) => (
              <MyUIRow key={indexRow}>
                {item.row.map((listProducts, indexItem) => (
                  <MyUICol key={`${indexRow}${indexItem}`} size='6'>
                    <div>
                      <StyledHeader>
                        <StyledName>
                          <StyledHeaderLink
                            to={getListProductsPath(listProducts.id)}
                          >
                            {listProducts.name}
                            <EmptyEspace />
                            {getNumberOfProducts(listProducts.products)}
                          </StyledHeaderLink>
                        </StyledName>
                        <StyledTrashIcon
                          icon={trash}
                          onClick={() =>
                            openConfirmDeletionDialog(listProducts.id)
                          }
                        />
                      </StyledHeader>
                      <StyledProducts>
                        <StyledLink to={getListProductsPath(listProducts.id)}>
                          {displayProducts(listProducts.products)}
                        </StyledLink>
                      </StyledProducts>
                    </div>
                  </MyUICol>
                ))}
              </MyUIRow>
            ))}
          </MyUIGrid>
          <ConfirmDeletionDialog
            isOpen={isOpenConfirmDeletionDialog}
            cancelFn={closeConfirmDeletionDialog}
            okFn={deleteSelectedList}
          />
        </>
      ) : (
        <EmptyListMessage />
      )}
      <MyUIAddFabButton path={LIST_PRODUCTS_NEW_PATH} />
      <MyUIMenuFabButton path={MENU_PATH} />
    </div>
  )
}
