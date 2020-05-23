import { useState, useEffect } from 'react'
import { InputChangeEventDetail } from '@ionic/core'
import { useHistory } from 'react-router-dom'
import uuid from 'react-uuid'

import { useAppContext } from '../../App-Context'
import { IProduct } from '../listsProducts/ListsProducts-Types'
import { getListProductsPath } from '../listsProducts/ListsProducts-Utils'

export function useListProductsController(idListProducts: string) {
  const history = useHistory()
  const { getListProducts, saveListProducts } = useAppContext()
  const [id, setId] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [products, setProducts] = useState<IProduct[] | undefined>([])
  const [isNew, setIsNew] = useState<boolean>(true)

  function handleName(event: CustomEvent<InputChangeEventDetail>) {
    setName((<HTMLInputElement>event.target).value)
  }

  function apply() {
    saveListProducts({
      id,
      name,
      products
    })
    history.push(getListProductsPath(id))
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
