import { useState, useEffect } from 'react';
import { useStorage } from '@ionic/react-hooks/storage';
import { ItemReorderEventDetail } from '@ionic/core';

import { IProduct } from './Product-Types';
import { PRODUCTS_STORAGE } from './Products-Constants';
import { IProductToUpdate } from './Products-Types';

export function useProductsController() {
  const [products, setProducts] = useState<IProduct[]>([]);

  const { get, set } = useStorage();

  function doReorder(event: CustomEvent<ItemReorderEventDetail>) {
    const newProducts = event.detail.complete(products);
    setProducts(newProducts)

    set(PRODUCTS_STORAGE, JSON.stringify(newProducts))
  }

  function saveProducts(products: IProduct[]) {
    setProducts(products)
    set(PRODUCTS_STORAGE, JSON.stringify(products))
  }

  function addProduct(product: IProduct) {
    const newProducts = [product, ...products];
    saveProducts(newProducts)
  }

  function verifyProduct(item1: IProduct, item2: IProduct) {
    return item1.id === item2.id
  }

  function findProduct(id: string) {
    return products.find((product: IProduct) => product.id === id)
  }

  function updateProduct(product: IProductToUpdate) {
    let existingProduct = findProduct(product.id) as IProduct
    existingProduct = {...existingProduct, toBuy: product.toBuy}

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

  useEffect(() => {
    const loadSaved = async () => {
      const productsString = await get(PRODUCTS_STORAGE);
      const productsInStorage = (productsString ? JSON.parse(productsString) : []) as IProduct[];

      setProducts(productsInStorage);
    };
    loadSaved();
  }, [get]);

  return {
    products,
    doReorder,
    addProduct,
    updateProduct,
    deleteProduct
  }
}
