import { useState, useEffect, useCallback } from 'react';
import { useStorage } from '@ionic/react-hooks/storage';
import { ItemReorderEventDetail } from '@ionic/core';

import { IProduct } from './Product-Types';
import { PRODUCTS_STORAGE } from './Products-Constants';
import { IProductToUpdate } from './Products-Types';

export function useProductsController() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isSortedProducts, setIsSortedProducts] = useState(false);

  const { get, set } = useStorage();

  function doReorder(event: CustomEvent<ItemReorderEventDetail>) {
    const newProducts = event.detail.complete(products);
    setProducts(newProducts)

    set(PRODUCTS_STORAGE, JSON.stringify(newProducts))
  }

  const saveProducts = useCallback((products: IProduct[]) => {
    setProducts(products)
    set(PRODUCTS_STORAGE, JSON.stringify(products))
  }, [set])

  function addProduct(product: IProduct) {
    const newProducts = [product, ...products];
    saveProducts(newProducts)
    !product.toBuy && setIsSortedProducts(true)
  }

  function verifyProduct(item1: IProduct, item2: IProduct) {
    return item1.id === item2.id
  }

  function findProduct(id: string) {
    return products.find((product: IProduct) => product.id === id)
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

  function deleteProduct(product: IProduct) {
    const filteredProducts = products.filter((item: IProduct) => !verifyProduct(item, product))

    saveProducts(filteredProducts)
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

  const sortProductsByToBuy = useCallback(() => {
    const toBuyProducts = products.filter((item: IProduct) => item.toBuy)
    const notToBuyProducts = products.filter((item: IProduct) => !item.toBuy)
    const sortedProducts = [...toBuyProducts, ...notToBuyProducts]

    saveProducts(sortedProducts)
  }, [products, saveProducts])

  useEffect(() => {
    const loadSaved = async () => {
      const productsString = await get(PRODUCTS_STORAGE);
      const productsInStorage = (productsString ? JSON.parse(productsString) : []) as IProduct[];

      setProducts(productsInStorage);
    };
    loadSaved();
  }, [get]);

  useEffect(() => {
    if (isSortedProducts) {
      sortProductsByToBuy()
      setIsSortedProducts(false)
    }
  }, [isSortedProducts, sortProductsByToBuy]);

  return {
    products,
    doReorder,
    addProduct,
    updateProduct,
    deleteProduct,
    handleToBuyValue,
    handleSelectedProduct
  }
}
