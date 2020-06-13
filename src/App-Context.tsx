import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from 'react'
import { useStorage } from '@ionic/react-hooks/storage'

import { APP_STORAGE_KEY, APP_INITIAL_DATA } from './App-Constants'
import { IAppContext, IAppData, IAppProvider, IAppConfig } from './App-Types'
import {
  IListProducts,
  IProduct,
} from './views/listsProducts/ListsProducts-Types'

export const AppContext = createContext({} as IAppContext)

export function AppProvider(props: IAppProvider) {
  const [appData, setAppData] = useState<IAppData>(APP_INITIAL_DATA)

  const { get, set } = useStorage()

  const saveAppData = useCallback(
    (appData: IAppData) => {
      setAppData(appData)
      set(APP_STORAGE_KEY, JSON.stringify(appData))
    },
    [set]
  )

  function getListProducts(id: string) {
    const { listsProducts } = appData

    return listsProducts.find((item) => item.id === id)
  }

  function addListProducts(list: IListProducts) {
    const newListsProducts = [list, ...appData.listsProducts]
    const newAppData = { ...appData, listsProducts: newListsProducts }
    saveAppData(newAppData)
  }

  function updateListProducts(list: IListProducts) {
    const { listsProducts } = appData
    const newListsProducts = listsProducts.map((item) =>
      item.id === list.id ? { ...item, ...list } : item
    )
    const newAppData = { ...appData, listsProducts: newListsProducts }
    saveAppData(newAppData)
  }

  function deleteListProducts(id: string) {
    const { listsProducts } = appData
    const newListsProducts = listsProducts.filter((item) => item.id !== id)
    const newAppData = { ...appData, listsProducts: newListsProducts }
    saveAppData(newAppData)
  }

  function saveListProducts(listProducts: IListProducts) {
    const list = getListProducts(listProducts.id)
    if (!!list) {
      updateListProducts(listProducts)
    } else {
      addListProducts(listProducts)
    }
  }

  /** Product operation **/

  function getProduct(idListProducts: string, idProduct: string) {
    const listProducts = getListProducts(idListProducts)

    if (listProducts && listProducts.products) {
      return listProducts.products.find((item) => item.id === idProduct)
    }

    return undefined
  }

  function saveProduct(idListProducts: string, product: IProduct) {
    let listProducts = getListProducts(idListProducts)

    if (listProducts && listProducts.products) {
      const { products } = listProducts
      const existingProduct = products.find((item) => item.id === product.id)

      let newListProducts: IProduct[]

      if (existingProduct) {
        newListProducts = products.map((item) => {
          if (item.id === product.id) {
            return { ...item, ...product }
          }
          return item
        })
      } else {
        newListProducts = [product, ...products]
      }

      listProducts = { ...listProducts, products: newListProducts }

      saveListProducts(listProducts)
    }
  }

  function getAppConfig() {
    return appData.config
  }

  function setAppConfig(config: IAppConfig) {
    const newAppData = { ...appData, config }
    saveAppData(newAppData)
  }

  useEffect(() => {
    const loadSaved = async () => {
      const appDataAsString = (await get(APP_STORAGE_KEY)) || '{}'
      const appDataAsObject = JSON.parse(appDataAsString)
      const appDataInStorage = { ...APP_INITIAL_DATA, ...appDataAsObject }

      saveAppData(appDataInStorage)
      setAppData(appDataInStorage)
    }
    loadSaved()
  }, [get, saveAppData])

  const value = {
    appData,
    saveAppData,
    getListProducts,
    saveListProducts,
    deleteListProducts,
    getProduct,
    saveProduct,
    getAppConfig,
    setAppConfig,
  }

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
