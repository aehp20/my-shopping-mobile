import { useState, useEffect } from 'react'

import { IProduct } from '../../listsProducts/ListsProducts-Types'

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
