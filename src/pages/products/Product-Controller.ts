import { useState, useEffect } from 'react'
import uuid from 'react-uuid'

import { IValidationResponse, IProduct, IProductControllerProps } from './Product-Types'
import { validate } from './Product-Validator'

export function useProductController({ product, apply, setIsSortedProducts, close }: IProductControllerProps) {
  const [id, setId] = useState(uuid())
  const [isSelected, setIsSelected] = useState(false)
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [toBuy, setToBuy] = useState(true)
  const [description, setDescription] = useState('')

  const [validationResponse, setValidationResponse] = useState<IValidationResponse>({error: false})

  function handleNameValue(event: any) {
    setName(event.target.value);
  }

  function handleQuantityValue(event: any) {
    setQuantity(event.target.value);
  }

  function handleToBuyValue(event: any) {
    setToBuy(event.target.checked);
  }

  function handleDescriptionValue(event: any) {
    setDescription(event.target.value);
  }

  function clean() {
    setName('')
    setQuantity('')
    setToBuy(true)
    setDescription('')
  }

  function handleApply() {
    const product: IProduct = {
      id,
      name,
      quantity,
      toBuy,
      isSelected,
      description
    }

    const validation = validate(product)

    if (validation.error) {
      setValidationResponse(validation)
    } else {
      apply(product)
      !product.toBuy && setIsSortedProducts(true)
      clean();
      close();
    }
  }

  useEffect(() => {
    if (product) {
      setId(product.id)
      setIsSelected(product.isSelected)
      setName(product.name)
      setQuantity(product.quantity)
      setToBuy(product.toBuy)
      setDescription(product.description)
    }
  }, [product])

  return {
    name,
    quantity,
    toBuy,
    description,
    handleNameValue,
    handleQuantityValue,
    handleToBuyValue,
    handleDescriptionValue,
    handleApply,
    validationResponse
  }
}
