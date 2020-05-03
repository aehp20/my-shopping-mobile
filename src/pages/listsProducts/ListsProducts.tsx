import React from 'react'
import {
  IonGrid,
  IonRow,
  IonCol,
  IonFab,
  IonFabButton,
  IonIcon,
} from '@ionic/react'
import { add } from 'ionicons/icons'
import { Link } from 'react-router-dom'

import { useListsProductsController } from './ListsProducts-Controller'
import { IProduct } from '../product/Product-Types'
import { LIST_PRODUCTS_NEW_PATH } from '../listProducts/ListProducts-Constants'

import './ListsProducts.css'

export function ListsProducts() {
  const { rowsProducts } = useListsProductsController()

  const displayProducts = (products: IProduct[]) => {
    const MAX_PRODUCTS_DISPLAY = 3
    let content = ''

    if (products.length <= MAX_PRODUCTS_DISPLAY) {
      for (let index = 0; index < products.length; index++) {
        content += products[index].name + ' '
      }
    } else {
      for (let index = 0; index < MAX_PRODUCTS_DISPLAY; index++) {
        content += products[index].name + ' '
      }
      content += `(+${products.length - MAX_PRODUCTS_DISPLAY})`
    }

    return content
  }

  return (
    <div>
      <IonGrid>
        {rowsProducts.map((item, indexRow) => (
          <IonRow key={indexRow}>
            {item.row.map((listProducts, indexItem) => (
              <IonCol
                key={`${indexRow}${indexItem}`}
                size="6"
                className="lists-products"
              >
                <Link to={`/list-products/${listProducts.id}`}>
                  <div className="list-products-name">{listProducts.name}</div>
                  <div className="list-products-products">
                    {displayProducts(listProducts.products)}
                  </div>
                </Link>
              </IonCol>
            ))}
          </IonRow>
        ))}
      </IonGrid>
      <IonFab vertical="bottom" horizontal="center" slot="fixed">
        <IonFabButton routerLink={LIST_PRODUCTS_NEW_PATH}>
          <IonIcon icon={add}></IonIcon>
        </IonFabButton>
      </IonFab>
    </div>
  )
}
