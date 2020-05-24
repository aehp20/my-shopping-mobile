export const ERROR_REQUIRED_NAME = 'The name is required.'
export const TITLE_NEW_PRODUCT = 'New product'
export const TITLE_EDIT_PRODUCT = 'Edit product'
export const PRODUCT_NEW_PATH = '/list-products/:idListProducts/product'
export const PRODUCT_EDIT_PATH = '/list-products/:idListProducts/product/:id'
export const PRODUCT_INITIAL = {
  id: '',
  name: '',
  quantity: '',
  toBuy: true,
  description: '',
  validationResponse: { error: false },
}
