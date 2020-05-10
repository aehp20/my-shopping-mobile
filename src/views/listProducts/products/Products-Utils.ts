import { IProduct } from '../../listsProducts/ListsProducts-Types'

export function getName(product: IProduct) {
  const quantity = product.quantity ? `(${product.quantity})` : ''

  return `${product.name} ${quantity}`
}

export function getSelectedProducts(products: IProduct[]) {
  return products.filter((product: IProduct) => product.isSelected)
}
