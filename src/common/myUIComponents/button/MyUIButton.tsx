import React, { HTMLAttributes } from 'react'
import { JSX } from '@ionic/core'

import { StyledMyUIButton } from './MyUIButton-Styles'

export function MyUIButton(
  props: JSX.IonButton & HTMLAttributes<HTMLIonButtonElement>
) {
  return <StyledMyUIButton {...props}>{props.children}</StyledMyUIButton>
}
