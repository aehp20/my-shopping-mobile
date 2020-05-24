import { useState, useEffect } from 'react'
import { InputChangeEventDetail, ToggleChangeEventDetail } from '@ionic/core'
import uuid from 'react-uuid'
import { useHistory } from 'react-router-dom'

import { IProduct } from '../../listsProducts/ListsProducts-Types'
import { validate } from './Product-Validator'
import { IValidationResponse } from './Product-Types'
import {
  TITLE_NEW_PRODUCT,
  TITLE_EDIT_PRODUCT,
  PRODUCT_INITIAL,
} from './Product-Constants'
import { useAppContext } from '../../../App-Context'
import { getListProductsPath } from '../../listsProducts/ListsProducts-Utils'

export function useProductController(
  idListProducts: string,
  idProduct: string
) {
  const history = useHistory()
  const { getProduct, saveProduct } = useAppContext()
  const [title, setTitle] = useState('')
  const [id, setId] = useState(idProduct)
  const [name, setName] = useState(PRODUCT_INITIAL.name)
  const [quantity, setQuantity] = useState(PRODUCT_INITIAL.quantity)
  const [toBuy, setToBuy] = useState(PRODUCT_INITIAL.toBuy)
  const [description, setDescription] = useState(PRODUCT_INITIAL.description)
  const [validationResponse, setValidationResponse] = useState<
    IValidationResponse
  >(PRODUCT_INITIAL.validationResponse)

  const handleName = (event: CustomEvent<InputChangeEventDetail>) => {
    setName((event.target as HTMLInputElement).value)
  }

  const handleQuantity = (event: CustomEvent<InputChangeEventDetail>) => {
    setQuantity((event.target as HTMLInputElement).value)
  }

  const handleToBuy = (event: CustomEvent<ToggleChangeEventDetail>) => {
    setToBuy((event.target as HTMLInputElement).checked)
  }

  const handleDescription = (event: CustomEvent<InputChangeEventDetail>) => {
    setDescription((event.target as HTMLInputElement).value)
  }

  const clean = () => {
    setId(PRODUCT_INITIAL.id)
    setName(PRODUCT_INITIAL.name)
    setQuantity(PRODUCT_INITIAL.quantity)
    setToBuy(PRODUCT_INITIAL.toBuy)
    setDescription(PRODUCT_INITIAL.description)
    setValidationResponse(PRODUCT_INITIAL.validationResponse)
  }

  const close = () => {
    history.push(getListProductsPath(idListProducts))
  }

  const apply = () => {
    const uid = id ? id : uuid()

    const product: IProduct = {
      id: uid,
      name,
      quantity,
      toBuy,
      description,
    }

    const validation = validate(product)

    if (validation.error) {
      setValidationResponse(validation)
    } else {
      saveProduct(idListProducts, product)
      //!product.toBuy && setIsSortedProducts(true)
      clean()
      close()
    }
  }

  useEffect(() => {
    if (!!idListProducts && !idProduct) {
      setTitle(TITLE_NEW_PRODUCT)
    } else {
      const product = getProduct(idListProducts, idProduct)

      if (product) {
        setId(product.id)
        setName(product.name)
        setQuantity(
          product.quantity ? product.quantity : PRODUCT_INITIAL.quantity
        )
        setToBuy(product.toBuy === undefined ? true : product.toBuy)
        setDescription(
          product.description
            ? product.description
            : PRODUCT_INITIAL.description
        )
      }

      setTitle(TITLE_EDIT_PRODUCT)
    }
  }, [idListProducts, idProduct])

  return {
    title,
    name,
    quantity,
    toBuy,
    description,
    validationResponse,
    handleName,
    handleQuantity,
    handleToBuy,
    handleDescription,
    apply,
  }
}
