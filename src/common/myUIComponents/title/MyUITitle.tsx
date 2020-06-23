import React from 'react'

import { IMyUIComponentProps } from '../types'
import { StyledMyUITitle } from './MyUITitle-Styles'

export function MyUITitle(props: IMyUIComponentProps) {
  return <StyledMyUITitle>{props.children}</StyledMyUITitle>
}
