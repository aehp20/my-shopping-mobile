import React from 'react'

import { StyledMyUIText } from './MyUICustomTitle-Styles'
import { IMyUIComponentProps } from '../types'

export function MyUICustomTitle(props: IMyUIComponentProps) {
  return <StyledMyUIText>{props.children}</StyledMyUIText>
}
