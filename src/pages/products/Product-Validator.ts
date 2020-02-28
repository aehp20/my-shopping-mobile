import { IProduct } from "./Product-Types";
import { ERROR_REQUIRED_NAME } from "./Product-Constants";
import { IValidationResponse } from "./Product-Types";

export function validate(product: IProduct): IValidationResponse {
  const { name } = product

  if (name.length === 0) {
    return {
      error: true,
      message: ERROR_REQUIRED_NAME
    }
  }

  return {error: false}
}
