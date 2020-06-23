import React from 'react'

import { IMyUIComponentProps } from '../types'
import { StyledMyUIHeader } from './MyUIHeader-Styles'

export function MyUIHeader(props: IMyUIComponentProps) {
  return (
    <StyledMyUIHeader className='ion-no-border'>
      {props.children}
    </StyledMyUIHeader>
  )
}
