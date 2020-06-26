import { useState, useEffect } from 'react'
import {
  CheckboxChangeEventDetail,
  ToggleChangeEventDetail,
  SearchbarChangeEventDetail,
} from '@ionic/core'

import { IProduct } from '../../listsProducts/ListsProducts-Types'
import { hasListItems } from '../../../common/utils'
import { getSelectedProducts } from './Products-Utils'
import { useAppContext } from '../../../App-Context'

export function useProductsController(
  idListProducts: string,
  nameListProducts: string,
  productsListProducts: IProduct[]
) {
  const { saveListProducts } = useAppContext()
  const [products, setProducts] = useState<IProduct[]>([])
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>()
  const [items, setItems] = useState<IProduct[]>([])
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
    setIsOpenConfirmDeletionDialog,
  ] = useState(false)

  const handleSelectedProduct = (
    event: CustomEvent<CheckboxChangeEventDetail>
  ) => {
    const { target } = event
    const { id, checked, value } = target as HTMLInputElement

    if (value !== (checked ? 'true' : 'false')) {
      updateSelectedProducts(id, checked)
    }
  }

  const handleToBuyValue = (event: CustomEvent<ToggleChangeEventDetail>) => {
    const { target } = event
    const { id, checked, value } = target as HTMLInputElement

    if (value !== checked.toString()) {
      updateToBuyProducts(id, checked)
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
      setAreThereSelectedProducts(newIsAllSelected)
      setProducts(newProducts)
      save(newProducts)
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
    save(selectedProducts)
  }

  const updateSelectedProducts = (id: string, isSelected: boolean) => {
    const newProducts = products.map((item) => {
      if (item.id === id) {
        item = { ...item, isSelected }
      }
      return item
    })
    setProducts(newProducts)
    save(newProducts)
  }

  const updateToBuyProducts = (id: string, toBuy: boolean) => {
    const tempProducts = products.map((item) => {
      if (item.id === id) {
        item = { ...item, toBuy }
      }
      return item
    })

    // Sort products
    const toBuyProducts = tempProducts.filter((item: IProduct) => item.toBuy)
    const notToBuyProducts = tempProducts.filter(
      (item: IProduct) => !item.toBuy
    )
    const newProducts = [...toBuyProducts, ...notToBuyProducts]

    setProducts(newProducts)
    save(newProducts)
  }

  const save = (products: IProduct[]) => {
    saveListProducts({
      id: idListProducts,
      name: nameListProducts,
      products,
    })
  }

  useEffect(() => {
    setProducts(productsListProducts)
  }, [productsListProducts])

  useEffect(() => {
    const newIsAllSelected = hasListItems(products)
      ? products
          .filter((product) => product.toBuy)
          .every((product) => product.isSelected)
      : false
    const newSelectedProducts = getSelectedProducts(products)

    setIsAllSelected(newIsAllSelected)
    setAreThereSelectedProducts(!!newSelectedProducts.length)
  }, [products])

  useEffect(() => {
    const newItems = !!filteredProducts ? filteredProducts : products
    setItems(newItems)
    setNotFoundFilteredProducts(
      hasListItems(products) && !hasListItems(filteredProducts)
    )
  }, [filteredProducts, products])

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
  }, [searchValue, products])

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
    handleSearch,
  }
}
