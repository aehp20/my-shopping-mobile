import { useState, useEffect, useCallback } from 'react';

import { IProduct } from './Product-Types';
import { IProductToUpdate } from './Products-Types';
import { useProductsContext } from './Products-Context';

export function useProductsController() {
  const { products, saveProducts, findProduct, verifyProduct, setIsSortedProducts } = useProductsContext()

  const [isAllSelected, setIsAllSelected] = useState(false)
  const [areThereSelectedProducts, setAreThereSelectedProducts] = useState(false)
  const [showConfirmDeletionAlert, setShowConfirmDeletionAlert] = useState(false)

  function handleSelectedAllProducts(event: any) {
    if (event.target.value !== (event.target.checked ? 'true' : 'false')) {
      const newIsAllSelected = !isAllSelected
      const newProducts = products.map((product) => {
        if (product.toBuy) {
          product.isSelected = newIsAllSelected  
        }
        return product
      })
      setIsAllSelected(newIsAllSelected)
      saveProducts(newProducts)
    }
  }

  function updateProduct(product: IProductToUpdate) {
    let existingProduct = findProduct(product.id) as IProduct
    existingProduct = {...existingProduct, ...product}

    const existingProducts = products.map((item: IProduct) => {
      if (verifyProduct(item, existingProduct)) {
        return existingProduct
      }
      return item
    })

    saveProducts(existingProducts)
  }

  function deleteProducts() {
    const selectedProducts = getSelectedProducts()

    const isInSelectedProduct = (product: IProduct): boolean => {
      return !!selectedProducts.find((selectedProduct) => selectedProduct.id === product.id)
    }
    const restOfProducts = products.filter((item: IProduct) => !isInSelectedProduct(item))

    saveProducts(restOfProducts)
  }

  function handleToBuyValue(event: any) {
    const item: IProductToUpdate = {
      id: event.target.id,
      toBuy: event.target.checked
    }

    if (event.target.value !== event.target.checked.toString()) {
      updateProduct(item)
      setIsSortedProducts(true)
    }
  }

  function handleSelectedProduct(event: any) {
    const item: IProductToUpdate = {
      id: event.target.id,
      isSelected: event.target.checked
    }

    if (event.target.value !== (event.target.checked ? 'true' : 'false')) {
      updateProduct(item)
    }
  }

  const getSelectedProducts = useCallback(() => {
    return products.filter((product: IProduct) => product.isSelected)
  }, [products])

  useEffect(() => {
    const toBuyProducts = products.filter((product) => product.toBuy)
    const newIsAllSelected = toBuyProducts.every((product) => product.isSelected)
    setIsAllSelected(newIsAllSelected)
    setAreThereSelectedProducts(!!getSelectedProducts().length)
  }, [products, getSelectedProducts])

  return {
    products,
    updateProduct,
    deleteProducts,
    handleToBuyValue,
    handleSelectedProduct,
    isAllSelected,
    handleSelectedAllProducts,
    getSelectedProducts,
    areThereSelectedProducts,
    showConfirmDeletionAlert,
    setShowConfirmDeletionAlert
  }
}
