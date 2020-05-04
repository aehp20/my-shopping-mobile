import { useState, useEffect } from 'react'
import uuid from 'react-uuid'

import { IListProducts } from './ListProducts-Types'
import { LIST_PRODUCTS_INITIAL_DATA } from './ListProducts-Constants'
import { useListsProductsController } from '../listsProducts/ListsProducts-Controller'
import { IProduct } from '../product/Product-Types'

export function useListProductsController(id: string) {
  // TODO
  const [idListProducts, setIdListProducts] = useState(() => {
    return !!id ? id : uuid()
  })
  const [name, setName] = useState(LIST_PRODUCTS_INITIAL_DATA.name)
  const [products, setProducts] = useState<IProduct[]>(
    LIST_PRODUCTS_INITIAL_DATA.products
  )
  const {
    applyListProducts,
    findListProductsById
  } = useListsProductsController()

  function handleName(event: any) {
    setName(event.target.value)
  }

  function saveProducts(products: IProduct[]) {
    setProducts(products)
  }

  function handleApply() {
    const listProducts: IListProducts = {
      id: idListProducts,
      name,
      products
    }

    applyListProducts(listProducts)
  }

  useEffect(() => {
    if (!!name) {
      handleApply()
    }
  }, [name])

  useEffect(() => {
    if (!!products) {
      handleApply()
    }
  }, [products])

  useEffect(() => {
    if (!!id) {
      const existListProducts = findListProductsById(id)
      setIdListProducts(id)
      setName(
        !!existListProducts
          ? existListProducts.name
          : LIST_PRODUCTS_INITIAL_DATA.name
      )
      // setProducts(
      //   !!existListProducts
      //     ? existListProducts.products
      //     : LIST_PRODUCTS_INITIAL_DATA.products
      // )
    }
  }, [id])

  return {
    idListProducts,
    name,
    products,
    saveProducts,
    handleName
  }
}
