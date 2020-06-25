import React, { HTMLAttributes } from 'react'
import { JSX } from '@ionic/core'

import { StyledMyUILabel } from './MyUILabel-Styles'

export function MyUILabel(
  props: JSX.IonLabel & HTMLAttributes<HTMLIonLabelElement>
) {
  return <StyledMyUILabel {...props}>{props.children}</StyledMyUILabel>
}
