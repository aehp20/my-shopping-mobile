import React, { HTMLAttributes } from 'react'
import { JSX } from '@ionic/core'

import { StyledMyUIToggle } from './MyUIToggle-Styles'

export function MyUIToggle(
  props: JSX.IonToggle & HTMLAttributes<HTMLIonToggleElement>
) {
  return <StyledMyUIToggle {...props}>{props.children}</StyledMyUIToggle>
}
