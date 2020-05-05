import { useState } from 'react'
import { InputChangeEventDetail } from '@ionic/core'

import { IProduct } from '../../listsProducts/ListsProducts-Types'
import { useSearchProducts } from './Products-Utils'

export function useProductsController(products: IProduct[] | undefined) {
  const [searchValue, setSearchValue] = useState('')
  const { filteredProducts } = useSearchProducts(searchValue, products)

  function handleSearch(event: CustomEvent<InputChangeEventDetail>) {
    setSearchValue((<HTMLInputElement>event.target).value)
  }

  return {
    filteredProducts,
    handleSearch
  }
}
