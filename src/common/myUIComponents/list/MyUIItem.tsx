import React, { HTMLAttributes } from 'react'
import { JSX } from '@ionic/core'

import { StyledMyUIItem } from './MyUIItem-Styles'

export function MyUIItem(
  props: JSX.IonItem & HTMLAttributes<HTMLIonItemElement>
) {
  return <StyledMyUIItem {...props}>{props.children}</StyledMyUIItem>
}
