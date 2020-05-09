import { IProduct } from '../../listsProducts/ListsProducts-Types'

export interface IProductsProps {
  id: string
  name: string
  products: IProduct[]
}

export interface ISelectedProduct {
  id: string
  checked: boolean
}
