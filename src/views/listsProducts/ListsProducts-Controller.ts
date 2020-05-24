import { useState } from 'react'

import { useAppContext } from '../../App-Context'
import { useRowsProducts } from './ListsProducts-Utils'

export function useListsProductsController() {
  const { appData, deleteListProducts } = useAppContext()
  const { listsProducts } = appData
  const { rowsProducts } = useRowsProducts(listsProducts)
  const [
    isOpenConfirmDeletionDialog,
    setIsOpenConfirmDeletionDialog,
  ] = useState(false)
  const [idSelectedList, setIdSelectedList] = useState<string>()

  function openConfirmDeletionDialog(id: string) {
    setIdSelectedList(id)
    setIsOpenConfirmDeletionDialog(true)
  }

  function closeConfirmDeletionDialog() {
    setIdSelectedList(undefined)
    setIsOpenConfirmDeletionDialog(false)
  }

  function deleteSelectedList() {
    idSelectedList && deleteListProducts(idSelectedList)
  }

  return {
    rowsProducts,
    isOpenConfirmDeletionDialog,
    openConfirmDeletionDialog,
    closeConfirmDeletionDialog,
    deleteSelectedList,
  }
}
