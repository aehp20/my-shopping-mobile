import { useState, useEffect } from 'react'
import { InputChangeEventDetail } from '@ionic/core'
import uuid from 'react-uuid'

import { useAppContext } from '../../App-Context'
import { IProduct } from '../listsProducts/ListsProducts-Types'

export function useListProductsController(idListProducts: string) {
  const { getListProducts, saveListProducts } = useAppContext()
  const [id, setId] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [products, setProducts] = useState<IProduct[] | undefined>([])
  const [isNew, setIsNew] = useState<boolean>(false)

  function handleName(event: CustomEvent<InputChangeEventDetail>) {
    setName((<HTMLInputElement>event.target).value)
  }

  function apply() {
    saveListProducts({
      id,
      name,
      products
    })
  }

  useEffect(() => {
    let listProducts

    if (!!idListProducts) {
      listProducts = getListProducts(idListProducts)

      if (!!listProducts) {
        setId(listProducts.id)
        setName(listProducts.name)
        setProducts(listProducts.products)
        setIsNew(false)
      }
    } else {
      setId(uuid())
      setName('')
      setProducts([])
      setIsNew(true)
    }
  }, [idListProducts])

  return {
    name,
    handleName,
    apply,
    products,
    isNew
  }
}
