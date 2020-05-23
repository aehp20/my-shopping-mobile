import { useState, useEffect } from 'react'
import { InputChangeEventDetail, ToggleChangeEventDetail } from '@ionic/core'
import uuid from 'react-uuid'

import { IProduct } from '../../listsProducts/ListsProducts-Types'
import { validate } from './Product-Validator'
import { IValidationResponse } from './Product-Types'

export function useProductController(
  idListProducts: string,
  idProduct: string
) {
  const [isNew, setIsNew] = useState<boolean>(false)
  const [id, setId] = useState(idProduct)
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [toBuy, setToBuy] = useState(true)
  const [description, setDescription] = useState('')
  const [validationResponse, setValidationResponse] = useState<
    IValidationResponse
  >({ error: false })

  const handleName = (event: CustomEvent<InputChangeEventDetail>) => {
    setName((<HTMLInputElement>event.target).value)
  }

  const handleQuantity = (event: CustomEvent<InputChangeEventDetail>) => {
    setQuantity((<HTMLInputElement>event.target).value)
  }

  const handleToBuy = (event: CustomEvent<ToggleChangeEventDetail>) => {
    setToBuy((<HTMLInputElement>event.target).checked)
  }

  const handleDescription = (event: CustomEvent<InputChangeEventDetail>) => {
    setDescription((<HTMLInputElement>event.target).value)
  }

  const clean = () => {
    setId('')
    setName('')
    setQuantity('')
    setToBuy(true)
    setDescription('')
  }

  const apply = () => {
    const uid = id ? id : uuid()

    const product: IProduct = {
      id: uid,
      name,
      quantity,
      toBuy,
      description
    }

    const validation = validate(product)

    if (validation.error) {
      setValidationResponse(validation)
    } else {
      //apply(product)
      //!product.toBuy && setIsSortedProducts(true)
      clean()
      // close()
    }
  }

  useEffect(() => {
    if (!!idListProducts && !idProduct) {
      setIsNew(true)
    }
  }, [idListProducts, idProduct])

  return {
    isNew,
    name,
    quantity,
    toBuy,
    description,
    validationResponse,
    handleName,
    handleQuantity,
    handleToBuy,
    handleDescription,
    apply
  }
}
