import React from 'react'

import { IMyUIComponentProps } from '../types'
import { StyledMyUIContent } from './MyUIContent-Styles'

export function MyUIContent(props: IMyUIComponentProps) {
  return <StyledMyUIContent>{props.children}</StyledMyUIContent>
}
