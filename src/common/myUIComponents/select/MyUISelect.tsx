import React, { HTMLAttributes } from 'react'
import { JSX } from '@ionic/core'

import { StyledMyUISelect } from './MyUISelect-Styles'

export function MyUISelect(
  props: JSX.IonSelect & HTMLAttributes<HTMLIonSelectElement>
) {
  return <StyledMyUISelect {...props}>{props.children}</StyledMyUISelect>
}
