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

export function useProductsController(
  idListProducts: string,
  nameListProducts: string,
  productsListProducts: IProduct[]
) {
  const [products, setProducts] = useState<IProduct[]>([
    { id: '1', name: 'product1', isSelected: false, toBuy: true },
    { id: '2', name: 'product2', isSelected: false, toBuy: true },
    { id: '3', name: 'product3', isSelected: false, toBuy: true },
    { id: '4', name: 'product4', isSelected: false, toBuy: true },
    { id: '5', name: 'product5', isSelected: false, toBuy: true }
  ])
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([])
  const [items, setItems] = useState<IProduct[]>([])
  const [selectedProduct, setSelectedProduct] = useState<ISelectedProduct>()
  const [isAllSelected, setIsAllSelected] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [areThereSelectedProducts, setAreThereSelectedProducts] = useState(
    false
  )

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

  useEffect(() => {
    const newItems = hasListItems(filteredProducts)
      ? filteredProducts
      : products
    setItems(newItems)
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

      console.log(newProducts)
      setProducts(newProducts)
    }
  }, [selectedProduct])

  useEffect(() => {
    const value = searchValue.toUpperCase()
    const filteredItems = products.filter((product: IProduct) => {
      const name = product.name.toUpperCase()
      return name.indexOf(value) === -1 ? false : true
    })
    // setFilteredProducts(filteredItems)
  }, [searchValue])

  return {
    products,
    filteredProducts,
    items,
    isAllSelected,
    areThereSelectedProducts,
    handleSelectedProduct,
    handleToBuyValue,
    handleSelectedAllProducts,
    handleSearch
  }
}
