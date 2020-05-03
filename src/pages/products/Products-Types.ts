import { IProduct } from '../product/Product-Types'

export interface IProductToUpdate {
  id: string
  toBuy?: boolean
  isSelected?: boolean
}

export interface IProductsContext {
  products: IProduct[]
  saveProducts: (products: IProduct[]) => void
  findProduct: (id: string) => IProduct | undefined
  addProduct: (product: IProduct) => void
  editProduct: (product: IProduct) => void
  verifyProduct: (item1: IProduct, item2: IProduct) => boolean
  setIsSortedProducts: (value: React.SetStateAction<boolean>) => void
}

export interface IProductsProps {
  idListProducts: string
  products: IProduct[]
  saveProducts: (products: IProduct[]) => void
}
