import { IProduct } from '../../listsProducts/ListsProducts-Types'

export interface IProductsProps {
  id: string
  name: string
  products: IProduct[]
}

export interface ISelectedProduct {
  id: string
  checked: boolean
  type: string
}

export interface IUpdateProduct {
  id: string
  isSelected?: boolean
  toBuy?: boolean
}
