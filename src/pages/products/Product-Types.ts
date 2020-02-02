export interface IProduct {
  id: string
  name: string
  quantity: string
  toBuy: boolean
}

export interface IProductProps {
  isNew: boolean
  apply: (product: IProduct) => void
  close: () => void
}

export interface IValidationResponse {
  error: boolean
  message?: string
}
