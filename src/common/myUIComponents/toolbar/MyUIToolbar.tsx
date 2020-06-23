import React from 'react'

import { IMyUIComponentProps } from '../types'
import { StyledMyUIToolbar } from './MyUIToolbar-Styles'

export function MyUIToolbar(props: IMyUIComponentProps) {
  return <StyledMyUIToolbar>{props.children}</StyledMyUIToolbar>
}
