import { IProduct } from "./Product-Types";
import { ERROR_REQUIRED_NAME,  ERROR_REQUIRED_QUANTITY} from "./Product-Constants";
import { IValidationResponse } from "./Product-Types";

export function validate(product: IProduct): IValidationResponse {
  const { name, quantity } = product

  if (name.length === 0) {
    return {
      error: true,
      message: ERROR_REQUIRED_NAME
    }
  } else if (quantity.length === 0) {
    return {
      error: true,
      message: ERROR_REQUIRED_QUANTITY
    }
  }
  return {error: false}
}
