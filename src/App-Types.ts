import { IListProducts } from './views/listsProducts/ListsProducts-Types'

export interface IAppData {
  listsProducts: IListProducts[]
}

export interface IAppContext {
  appData: IAppData
  saveAppData: (appData: IAppData) => void
  getListProducts: (id: string) => IListProducts | undefined
  saveListProducts: (listProducts: IListProducts) => void
  deleteListProducts: (id: string) => void
}