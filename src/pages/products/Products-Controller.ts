import { useState, useEffect, useCallback } from 'react'

import { IProduct } from '../product/Product-Types'
import { IProductToUpdate, IProductsProps } from './Products-Types'

export function useProductsController({
  products,
  saveProducts,
}: IProductsProps) {
  const [isAllSelected, setIsAllSelected] = useState(false)
  const [areThereSelectedProducts, setAreThereSelectedProducts] = useState(
    false
  )
  const [searchValue, setSearchValue] = useState('')
  const [showConfirmDeletionAlert, setShowConfirmDeletionAlert] = useState(
    false
  )
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([])
  const [isSortedProducts, setIsSortedProducts] = useState(false)

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

  function handleSelectedProduct(event: any) {
    const item: IProductToUpdate = {
      id: event.target.id,
      isSelected: event.target.checked,
    }

    if (event.target.value !== (event.target.checked ? 'true' : 'false')) {
      updateProduct(item)
    }
  }

  function findProduct(id: string) {
    return products.find((product: IProduct) => product.id === id)
  }

  function verifyProduct(item1: IProduct, item2: IProduct) {
    return item1.id === item2.id
  }

  function updateProduct(product: IProductToUpdate) {
    let existingProduct = findProduct(product.id) as IProduct
    existingProduct = { ...existingProduct, ...product }

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
      return !!selectedProducts.find(
        (selectedProduct) => selectedProduct.id === product.id
      )
    }
    const restOfProducts = products.filter(
      (item: IProduct) => !isInSelectedProduct(item)
    )

    saveProducts(restOfProducts)
  }

  function handleToBuyValue(event: any) {
    const item: IProductToUpdate = {
      id: event.target.id,
      toBuy: event.target.checked,
    }

    if (event.target.value !== event.target.checked.toString()) {
      updateProduct(item)
      setIsSortedProducts(true)
    }
  }

  const sortProductsByToBuy = useCallback(() => {
    const toBuyProducts = products.filter((item: IProduct) => item.toBuy)
    const notToBuyProducts = products.filter((item: IProduct) => !item.toBuy)
    const sortedProducts = [...toBuyProducts, ...notToBuyProducts]

    saveProducts(sortedProducts)
  }, [products, saveProducts])

  function searchProducts(event: any) {
    setSearchValue(event.target.value)
  }

  const getSelectedProducts = useCallback(() => {
    return products.filter((product: IProduct) => product.isSelected)
  }, [products])

  useEffect(() => {
    const toBuyProducts = products.filter((product) => product.toBuy)
    const newIsAllSelected = toBuyProducts.every(
      (product) => product.isSelected
    )
    setIsAllSelected(newIsAllSelected)
    setAreThereSelectedProducts(!!getSelectedProducts().length)
  }, [products, getSelectedProducts])

  useEffect(() => {
    const value = searchValue.toUpperCase()

    const filteredItems = products.filter((product: IProduct) => {
      const name = product.name.toUpperCase()

      return name.indexOf(value) === -1 ? false : true
    })

    setFilteredProducts(filteredItems)
  }, [searchValue, products])

  useEffect(() => {
    if (isSortedProducts) {
      sortProductsByToBuy()
      setIsSortedProducts(false)
    }
  }, [isSortedProducts, sortProductsByToBuy])

  return {
    products,
    filteredProducts,
    isAllSelected,
    handleSelectedAllProducts,
    handleSelectedProduct,
    areThereSelectedProducts,
    searchProducts,
    showConfirmDeletionAlert,
    setShowConfirmDeletionAlert,
    deleteProducts,
    handleToBuyValue,
  }
}

/*
export function useProductsController() {
  const { products, saveProducts, findProduct, verifyProduct, setIsSortedProducts } = useProductsContext()

  const [isAllSelected, setIsAllSelected] = useState(false)
  const [areThereSelectedProducts, setAreThereSelectedProducts] = useState(false)
  const [showConfirmDeletionAlert, setShowConfirmDeletionAlert] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([])

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

  function searchProducts(event: any) {
    setSearchValue(event.target.value)
  }

  useEffect(() => {
    const toBuyProducts = products.filter((product) => product.toBuy)
    const newIsAllSelected = toBuyProducts.every((product) => product.isSelected)
    setIsAllSelected(newIsAllSelected)
    setAreThereSelectedProducts(!!getSelectedProducts().length)
  }, [products, getSelectedProducts])

  useEffect(() => {
    const value = searchValue.toUpperCase()

    const filteredItems = products.filter((product: IProduct) => {
      const name = product.name.toUpperCase()
      
      return name.indexOf(value) === -1 ? false : true
    })

    setFilteredProducts(filteredItems)
  }, [searchValue, products])

  return {
    products,
    filteredProducts,
    updateProduct,
    deleteProducts,
    handleToBuyValue,
    handleSelectedProduct,
    isAllSelected,
    handleSelectedAllProducts,
    getSelectedProducts,
    areThereSelectedProducts,
    showConfirmDeletionAlert,
    setShowConfirmDeletionAlert,
    searchProducts
  }
}
*/
