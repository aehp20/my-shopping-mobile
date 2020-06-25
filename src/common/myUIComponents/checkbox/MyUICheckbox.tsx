import React, { HTMLAttributes } from 'react'
import { JSX } from '@ionic/core'

import { StyledMyUICheckbox } from './MyUICheckbox-Styles'

export function MyUICheckbox(
  props: JSX.IonCheckbox & HTMLAttributes<HTMLIonCheckboxElement>
) {
  return <StyledMyUICheckbox {...props}>{props.children}</StyledMyUICheckbox>
}
