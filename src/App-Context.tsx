import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext
} from 'react'
import { useStorage } from '@ionic/react-hooks/storage'

import { APP_STORAGE_KEY, APP_INITIAL_DATA } from './App-Constants'
import { IAppContext, IAppData } from './App-Types'
import { IListProducts } from './views/listsProducts/ListsProducts-Types'

const AppContext = createContext({} as IAppContext)

export function AppProvider(props: any) {
  // TODO props any
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
    saveAppData({ listsProducts: newListsProducts })
  }

  function updateListProducts(list: IListProducts) {
    const { listsProducts } = appData
    const newListsProducts = listsProducts.map((item) =>
      item.id === list.id ? { ...item, ...list } : item
    )
    saveAppData({ listsProducts: newListsProducts })
  }

  function deleteListProducts(id: string) {
    const { listsProducts } = appData
    const newListsProducts = listsProducts.filter((item) => item.id !== id)
    saveAppData({ listsProducts: newListsProducts })
  }

  function saveListProducts(listProducts: IListProducts) {
    const list = getListProducts(listProducts.id)
    if (!!list) {
      updateListProducts(listProducts)
    } else {
      addListProducts(listProducts)
    }
  }

  useEffect(() => {
    const loadSaved = async () => {
      const appDataAsString = await get(APP_STORAGE_KEY)
      const appDataInStorage = (appDataAsString
        ? JSON.parse(appDataAsString)
        : {}) as IAppData

      setAppData(appDataInStorage)
    }
    loadSaved()
  }, [get])

  const value = {
    appData,
    saveAppData,
    getListProducts,
    saveListProducts,
    deleteListProducts
  }

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}