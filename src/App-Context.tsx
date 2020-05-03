import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from 'react'
import { useStorage } from '@ionic/react-hooks/storage'

import { APP_STORAGE_KEY, APP_INITIAL_DATA } from './App-Constants'
import { IAppContext, IAppData } from './App-Types'

const AppContext = createContext({} as IAppContext)

export function AppProvider(props: any) {
  // TODO
  const [appData, setAppData] = useState<IAppData>(APP_INITIAL_DATA)

  const { get, set } = useStorage()

  const saveAppData = useCallback(
    (appData: IAppData) => {
      setAppData(appData)
      set(APP_STORAGE_KEY, JSON.stringify(appData))
    },
    [set]
  )

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
  }

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
