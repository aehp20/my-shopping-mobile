import { useState } from 'react'
import { InputChangeEventDetail, CheckboxChangeEventDetail } from '@ionic/core'

import { IProduct } from '../../listsProducts/ListsProducts-Types'
import {
  useSearchProducts,
  useAreThereSelectedProducts,
  useUpdateProducts
} from './Products-Utils'
import { hasListItems } from '../../../common/utils'

export function useProductsController(
  idListProducts: string,
  nameListProducts: string,
  items: IProduct[]
) {
  const [searchValue, setSearchValue] = useState('')
  const { filteredProducts } = useSearchProducts(searchValue, items)
  const {
    isAllSelected,
    areThereSelectedProducts
  } = useAreThereSelectedProducts(hasListItems(items) ? items! : [])
  const [selectedProduct, setSelectedProduct] = useState({
    id: '',
    checked: false
  })
  const { products } = useUpdateProducts(selectedProduct, items)

  function handleSearch(event: CustomEvent<InputChangeEventDetail>) {
    setSearchValue((<HTMLInputElement>event.target).value)
  }

  function handleSelectedProduct(
    event: CustomEvent<CheckboxChangeEventDetail>
  ) {
    const { target } = event
    const { id, checked, value } = target as HTMLInputElement

    if (value !== (checked ? 'true' : 'false')) {
      setSelectedProduct({ id, checked })
    }
  }

  return {
    filteredProducts,
    handleSearch,
    isAllSelected,
    areThereSelectedProducts,
    handleSelectedProduct,
    products
  }
}
