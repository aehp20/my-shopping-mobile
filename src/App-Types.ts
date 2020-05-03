import { IListProducts } from './pages/listProducts/ListProducts-Types'

export interface IAppData {
  listsProducts: IListProducts[]
}

export interface IAppContext {
  appData: IAppData
  saveAppData: (appData: IAppData) => void
}
