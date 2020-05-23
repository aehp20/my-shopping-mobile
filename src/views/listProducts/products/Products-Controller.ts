import { useState, useEffect } from 'react'
import {
  CheckboxChangeEventDetail,
  ToggleChangeEventDetail,
  SearchbarChangeEventDetail
} from '@ionic/core'

import { IProduct } from '../../listsProducts/ListsProducts-Types'
import { hasListItems } from '../../../common/utils'
import { ACTION_TYPE_SELECT, ACTION_TYPE_TO_BUY } from './Products-Constants'
import { ISelectedProduct } from './Products-Types'
import { getSelectedProducts } from './Products-Utils'
import { useAppContext } from '../../../App-Context'

export function useProductsController(
  idListProducts: string,
  nameListProducts: string,
  productsListProducts: IProduct[]
) {
  const { saveListProducts } = useAppContext()
  const [products, setProducts] = useState<IProduct[]>(productsListProducts)
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>()
  const [items, setItems] = useState<IProduct[]>([])
  const [selectedProduct, setSelectedProduct] = useState<ISelectedProduct>()
  const [isAllSelected, setIsAllSelected] = useState(false)
  const [searchValue, setSearchValue] = useState<string>()
  const [areThereSelectedProducts, setAreThereSelectedProducts] = useState(
    false
  )
  const [notFoundFilteredProducts, setNotFoundFilteredProducts] = useState(
    false
  )
  const [
    isOpenConfirmDeletionDialog,
    setIsOpenConfirmDeletionDialog
  ] = useState(false)

  const handleSelectedProduct = (
    event: CustomEvent<CheckboxChangeEventDetail>
  ) => {
    const { target } = event
    const { id, checked, value } = target as HTMLInputElement

    if (value !== (checked ? 'true' : 'false')) {
      setSelectedProduct({ id, checked, type: ACTION_TYPE_SELECT })
    }
  }

  const handleToBuyValue = (event: CustomEvent<ToggleChangeEventDetail>) => {
    const { target } = event
    const { id, checked, value } = target as HTMLInputElement

    if (value !== checked.toString()) {
      setSelectedProduct({ id, checked, type: ACTION_TYPE_TO_BUY })
    }
  }

  const handleSelectedAllProducts = (
    event: CustomEvent<CheckboxChangeEventDetail>
  ) => {
    const { target } = event
    const { checked, value } = target as HTMLInputElement

    if (value !== (checked ? 'true' : 'false')) {
      const newIsAllSelected = !isAllSelected
      const newProducts = products.map((product) => {
        if (product.toBuy) {
          product.isSelected = newIsAllSelected
        }
        return product
      })
      setIsAllSelected(newIsAllSelected)
      setProducts(newProducts)
      setAreThereSelectedProducts(newIsAllSelected)
    }
  }

  const handleSearch = (event: CustomEvent<SearchbarChangeEventDetail>) => {
    const { value } = event.target as HTMLInputElement
    setSearchValue(value)
  }

  const openConfirmDeletionDialog = () => {
    setIsOpenConfirmDeletionDialog(true)
  }

  const closeConfirmDeletionDialog = () => {
    setIsOpenConfirmDeletionDialog(false)
  }

  const deleteSelectedList = () => {
    const selectedProducts = items.filter((item: IProduct) => !item.isSelected)
    setProducts(selectedProducts)
  }

  useEffect(() => {
    const newItems = !!filteredProducts ? filteredProducts : products
    setItems(newItems)
    setNotFoundFilteredProducts(
      hasListItems(products) && !hasListItems(filteredProducts)
    )
    console.log('Products-Controller')
    saveListProducts({
      id: idListProducts,
      name: nameListProducts,
      products
    })
  }, [filteredProducts, products])

  useEffect(() => {
    if (selectedProduct) {
      const { id, checked, type } = selectedProduct
      let newProducts = items.map((item: IProduct) => {
        if (item.id === id) {
          if (type === ACTION_TYPE_SELECT) {
            item = { ...item, isSelected: checked }
          } else if (type === ACTION_TYPE_TO_BUY) {
            item = { ...item, toBuy: checked }
          }
        }
        return item
      })

      if (type === ACTION_TYPE_SELECT) {
        const newIsAllSelected = newProducts.every(
          (product) => product.isSelected
        )
        const newSelectedProducts = getSelectedProducts(newProducts)

        setIsAllSelected(newIsAllSelected)
        setAreThereSelectedProducts(!!newSelectedProducts.length)
      } else if (type === ACTION_TYPE_TO_BUY) {
        const toBuyProducts = newProducts.filter((item: IProduct) => item.toBuy)
        const notToBuyProducts = newProducts.filter(
          (item: IProduct) => !item.toBuy
        )
        newProducts = [...toBuyProducts, ...notToBuyProducts]
      }

      if (hasListItems(filteredProducts)) {
        setFilteredProducts(newProducts)
      } else {
        setProducts(newProducts)
      }
    }
  }, [selectedProduct])

  useEffect(() => {
    if (searchValue) {
      const value = searchValue.toUpperCase()
      const filteredItems = products.filter((product: IProduct) => {
        const name = product.name.toUpperCase()
        return name.indexOf(value) === -1 ? false : true
      })
      setFilteredProducts(filteredItems)
    } else if (searchValue === '') {
      setFilteredProducts(undefined)
    }
  }, [searchValue])

  return {
    items,
    isAllSelected,
    areThereSelectedProducts,
    notFoundFilteredProducts,
    isOpenConfirmDeletionDialog,
    openConfirmDeletionDialog,
    closeConfirmDeletionDialog,
    deleteSelectedList,
    handleSelectedProduct,
    handleToBuyValue,
    handleSelectedAllProducts,
    handleSearch
  }
}
