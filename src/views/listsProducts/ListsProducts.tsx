import React from 'react'
import { IonGrid, IonRow, IonCol } from '@ionic/react'
import { trash } from 'ionicons/icons'

import { hasListItems } from '../../common/utils'
import { AddFabButton, MenuFabButton } from '../../common/components/fabButtons'
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
import { StyledLink } from '../../common/styles'
import { EmptyEspace } from '../../common/components/emptyEspace'
import { MENU_PATH } from '../menu/Menu-Constants'

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
          <IonGrid>
            {rowsProducts.map((item, indexRow) => (
              <IonRow key={indexRow}>
                {item.row.map((listProducts, indexItem) => (
                  <IonCol key={`${indexRow}${indexItem}`} size='6'>
                    <div>
                      <StyledHeader>
                        <StyledName>
                          <StyledLink to={getListProductsPath(listProducts.id)}>
                            {listProducts.name}
                            <EmptyEspace />
                            {getNumberOfProducts(listProducts.products)}
                          </StyledLink>
                        </StyledName>
                        <StyledTrashIcon
                          icon={trash}
                          color='danger'
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
                  </IonCol>
                ))}
              </IonRow>
            ))}
          </IonGrid>
          <ConfirmDeletionDialog
            isOpen={isOpenConfirmDeletionDialog}
            cancelFn={closeConfirmDeletionDialog}
            okFn={deleteSelectedList}
          />
        </>
      ) : (
        <EmptyListMessage />
      )}
      <AddFabButton path={LIST_PRODUCTS_NEW_PATH} />
      <MenuFabButton path={MENU_PATH} />
    </div>
  )
}
