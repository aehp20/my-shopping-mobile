import React, { HTMLAttributes } from 'react'
import { JSX } from '@ionic/core'

import { StyledMyUITitle } from './MyUITitle-Styles'

export function MyUITitle(
  props: JSX.IonTitle & HTMLAttributes<HTMLIonTitleElement>
) {
  return <StyledMyUITitle {...props}>{props.children}</StyledMyUITitle>
}
