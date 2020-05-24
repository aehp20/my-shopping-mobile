import React from 'react'

import { IProduct } from '../../listsProducts/ListsProducts-Types'
import { StyledLink, StyledBlackLink } from '../../../common/styles'

export function getName(product: IProduct) {
  const quantity = product.quantity ? `(${product.quantity})` : ''

  return `${product.name} ${quantity}`
}

export function getSelectedProducts(products: IProduct[]) {
  return products.filter((product: IProduct) => product.isSelected)
}

export function getLink(to: string, content: string) {
  return <StyledLink to={to}>{content}</StyledLink>
}
