import {
  IListProducts,
  IProduct,
} from './views/listsProducts/ListsProducts-Types'
import { ReactNode } from 'react'

export interface IAppProvider {
  children: ReactNode
}

export interface IAppConfig {
  theme: string
}

export interface IAppData {
  listsProducts: IListProducts[]
  config: IAppConfig
}

export interface IAppContext {
  appData: IAppData
  saveAppData: (appData: IAppData) => void
  getListProducts: (id: string) => IListProducts | undefined
  saveListProducts: (listProducts: IListProducts) => void
  deleteListProducts: (id: string) => void
  getProduct: (
    idListProducts: string,
    idProduct: string
  ) => IProduct | undefined
  saveProduct: (idListProducts: string, product: IProduct) => void
  getAppConfig: () => IAppConfig
  setAppConfig: (config: IAppConfig) => void
}
