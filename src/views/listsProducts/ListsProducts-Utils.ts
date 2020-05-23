import { useEffect, useState } from 'react'

import { IListProducts, IRowProducts, IProduct } from './ListsProducts-Types'

export function useRowsProducts(
  listsProducts: IListProducts[],
  nbColumn: number = 2
) {
  const [rowsProducts, setRowsProducts] = useState<IRowProducts[]>([])

  useEffect(() => {
    if (!!listsProducts) {
      const newRowsProducts: IRowProducts[] = []

      listsProducts.forEach((listProducts, index) => {
        if (index % nbColumn === 0) {
          newRowsProducts.push({ row: [listProducts] })
        } else {
          const { row } = newRowsProducts[Math.floor(index / nbColumn)]
          row.push(listProducts)
        }
      })

      setRowsProducts(newRowsProducts)
    }
  }, [listsProducts])

  return {
    rowsProducts
  }
}

export function displayProducts(
  products: IProduct[] | undefined,
  nbDisplayedProducts: number = 3
) {
  let content = ''

  if (!!products && !!products.length) {
    if (products.length <= nbDisplayedProducts) {
      for (let index = 0; index < products.length; index++) {
        content += products[index].name + ', '
      }
    } else {
      for (let index = 0; index < nbDisplayedProducts; index++) {
        content += products[index].name + ', '
      }
      content += `(+${products.length - nbDisplayedProducts})`
    }
  }

  return content
}

export function getListProductsPath(id: string) {
  return `/list-products/${id}`
}
