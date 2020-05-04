import { useState, useEffect } from 'react'
import uuid from 'react-uuid'

import { useListsProductsController } from '../listsProducts/ListsProducts-Controller'
import { IProductProps } from './Product-Types'
import { useListProductsController } from '../listProducts/ListProducts-Controller'

export function useProductController(props: IProductProps) {
  const { idListProducts, id } = props.match.params
  const { products, saveProducts } = useListProductsController(idListProducts)
  console.log(idListProducts)
  console.log(products)
}

/*
import { IValidationResponse, IProduct, IProductControllerProps } from './Product-Types'
import { validate } from './Product-Validator'

export function useProductController({ product, apply, setIsSortedProducts, close }: IProductControllerProps) {
  const [id, setId] = useState()
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
    setId(undefined)
    setName('')
    setQuantity('')
    setToBuy(true)
    setDescription('')
  }

  function handleApply() {
    const uid = id ? id : uuid()

    const product: IProduct = {
      id: uid,
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
*/