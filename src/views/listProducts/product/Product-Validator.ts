import { ERROR_REQUIRED_NAME } from './Product-Constants'
import { IValidationResponse } from './Product-Types'
import { IProduct } from '../../listsProducts/ListsProducts-Types'

export function validate(product: IProduct): IValidationResponse {
  const { name } = product

  if (name.length === 0) {
    return {
      error: true,
      message: ERROR_REQUIRED_NAME,
    }
  }

  return { error: false }
}
