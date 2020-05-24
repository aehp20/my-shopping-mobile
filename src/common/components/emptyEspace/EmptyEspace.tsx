import React from 'react'
import { IEmptyEspace } from './EmptyEspace-Types'

export function EmptyEspace({ size }: IEmptyEspace) {
  const length = size ? size : 1

  let emptyEspace = ''

  for (let index = 0; index < length; index++) {
    emptyEspace += '\u00a0'
  }

  return <>{emptyEspace}</>
}
