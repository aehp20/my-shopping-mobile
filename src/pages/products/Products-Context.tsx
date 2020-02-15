import React, { createContext, useState, useEffect, useCallback, useContext } from "react";
import { useStorage } from "@ionic/react-hooks/storage";

import { PRODUCTS_STORAGE } from './Products-Constants';
import { IProduct } from "./Product-Types";
import { IProductsContext } from "./Products-Types";

const ProductsContext = createContext({} as IProductsContext);

export function ProductsProvider(props: any) { // todo
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isSortedProducts, setIsSortedProducts] = useState(false);

  const { get, set } = useStorage();

  const saveProducts = useCallback((products: IProduct[]) => {
    setProducts(products)
    set(PRODUCTS_STORAGE, JSON.stringify(products))
  }, [set])

  function findProduct(id: string) {
    return products.find((product: IProduct) => product.id === id)
  }

  function addProduct(product: IProduct) {
    const newProducts = [product, ...products];
    saveProducts(newProducts)
  }

  function verifyProduct(item1: IProduct, item2: IProduct) {
    return item1.id === item2.id
  }

  function editProduct(product: IProduct) {
    const newProducts = products.map((item: IProduct) => {
      if (verifyProduct(item, product)) {
        return product
      }
      return item
    })
    saveProducts(newProducts)
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

  const value = {
    products,
    saveProducts,
    findProduct,
    addProduct,
    editProduct,
    verifyProduct,
    setIsSortedProducts
  };

  return (
    <ProductsContext.Provider value={value}>{props.children}</ProductsContext.Provider>
  );
}

export const useProductsContext = () => {
  return useContext(ProductsContext)
}
