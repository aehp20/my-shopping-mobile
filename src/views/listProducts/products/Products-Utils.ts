import { useState, useEffect } from 'react'

import { IProduct } from '../../listsProducts/ListsProducts-Types'
import { hasListItems } from '../../../common/utils'
import { ISelectedProduct } from './Products-Types'

export function getName(product: IProduct) {
  const quantity = product.quantity ? `(${product.quantity})` : ''

  return `${product.name} ${quantity}`
}

export function useSearchProducts(
  name: string,
  products: IProduct[] | undefined
) {
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>()

  useEffect(() => {
    const value = name.toUpperCase()

    const filteredItems = products!.filter((product: IProduct) => {
      const name = product.name.toUpperCase()

      return name.indexOf(value) === -1 ? false : true
    })

    setFilteredProducts(filteredItems)
  }, [name, products])

  return {
    filteredProducts
  }
}

export function useUpdateProducts(
  selectedProduct: ISelectedProduct,
  products: IProduct[] | undefined
) {
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>()

  useEffect(() => {
    const { id, checked } = selectedProduct
    const newProducts = products!.map((item: IProduct) => {
      item.toBuy = item.toBuy === undefined ? true : !!item.toBuy
      if (item.id === id) {
        item.isSelected = checked
      }
      return item
    })

    setFilteredProducts(newProducts)
  }, [selectedProduct])

  return {
    products: filteredProducts
  }
}

export function getSelectedProducts(products: IProduct[]) {
  return products.filter((product: IProduct) => product.isSelected)
}

export function useAreThereSelectedProducts(products: IProduct[]) {
  const [isAllSelected, setIsAllSelected] = useState(false)
  const [areThereSelectedProducts, setAreThereSelectedProducts] = useState(
    false
  )

  useEffect(() => {
    const toBuyProducts = products.filter((product) => product.toBuy)
    const newIsAllSelected = hasListItems(toBuyProducts)
      ? toBuyProducts.every((product) => product.isSelected)
      : false

    setIsAllSelected(newIsAllSelected)
    setAreThereSelectedProducts(!!getSelectedProducts(products).length)
  }, [products, getSelectedProducts])

  return {
    isAllSelected,
    areThereSelectedProducts
  }
}
