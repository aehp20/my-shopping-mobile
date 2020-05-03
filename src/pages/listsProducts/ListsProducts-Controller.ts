import { useState, useEffect } from 'react'

import { useAppContext } from '../../App-Context'
import { IRowProducts } from './ListsProducts-Types'
import { IListProducts } from '../listProducts/ListProducts-Types'

export function useListsProductsController() {
  const { appData, saveAppData } = useAppContext()
  const [rowsProducts, setRowsProducts] = useState<IRowProducts[]>([])

  useEffect(() => {
    const { listsProducts } = appData

    const newRowsProducts: IRowProducts[] = []

    listsProducts.forEach((listProducts, index) => {
      if (index % 2 === 0) {
        newRowsProducts.push({ row: [listProducts] })
      } else {
        const { row } = newRowsProducts[Math.floor(index / 2)]
        row.push(listProducts)
      }
    })

    setRowsProducts(newRowsProducts)
  }, [appData])

  function findListProductsById(id: string) {
    const { listsProducts } = appData

    const existListProducts = listsProducts.find((item) => {
      return item.id === id
    })

    return existListProducts
  }

  function findListProducts(listProducts: IListProducts) {
    const { listsProducts } = appData

    const existListProducts = listsProducts.find((item) => {
      return item.id === listProducts.id
    })

    return existListProducts
  }

  function updateListProducts(listProducts: IListProducts) {
    const { listsProducts } = appData

    const newListsProducts = listsProducts.map((item) => {
      let newListProducts = item

      if (item.id === listProducts.id) {
        newListProducts = {
          ...item,
          name: listProducts.name,
          products: listProducts.products,
        }
      }

      return newListProducts
    })

    saveAppData({ listsProducts: newListsProducts })
  }

  function addListProducts(listProducts: IListProducts) {
    const { listsProducts } = appData
    const newListsProducts = [listProducts, ...listsProducts]
    saveAppData({ listsProducts: newListsProducts })
  }

  function applyListProducts(listProducts: IListProducts) {
    const existListProducts = findListProducts(listProducts)

    if (!!existListProducts) {
      updateListProducts(listProducts)
    } else {
      addListProducts(listProducts)
    }
  }

  return {
    rowsProducts,
    applyListProducts,
    findListProductsById,
  }
}
