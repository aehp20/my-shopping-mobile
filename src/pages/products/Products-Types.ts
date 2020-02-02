import { ItemReorderEventDetail } from '@ionic/core';

import { IProduct } from './Product-Types';

export interface IProductToUpdate {
  id: string
  toBuy: boolean
}

export interface IProductsProps {
  products: IProduct[]
  doReorder: (event: CustomEvent<ItemReorderEventDetail>) => void
  updateProduct: (product: IProductToUpdate) => void
}
