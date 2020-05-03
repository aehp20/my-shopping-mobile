import { IProduct } from '../product/Product-Types'

export interface IListProducts {
  id: string
  name: string
  products: IProduct[]
}
