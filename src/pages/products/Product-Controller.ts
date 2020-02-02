import { useState } from 'react'
import uuid from 'react-uuid'

import { IValidationResponse, IProduct, IProductProps } from './Product-Types'
import { validate } from './Product-Validator'

export function useProductController({ isNew, apply, close }: IProductProps) {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [toBuy, setToBuy] = useState(true)
  const [validationResponse, setValidationResponse] = useState<IValidationResponse>({error: false})

  function handleNameValue(event: any) {
    setName(event.target.value);
  }

  function handleQuantityValue(event: any) {
    setQuantity(event.target.value);
  }

  function handleToBuyValue(event: any) {
    setToBuy(!event.target.value);
  }

  function handleApply() {
    const product: IProduct = {
      id: uuid(),
      name,
      quantity,
      toBuy
    }

    const validation = validate(product)

    if (validation.error) {
      setValidationResponse(validation)
    } else {
      apply(product)
      close();
    }
  }

  return {
    handleNameValue,
    handleQuantityValue,
    handleToBuyValue,
    handleApply,
    validationResponse,
    toBuy
  }
}
