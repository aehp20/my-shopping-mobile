import React, { HTMLAttributes } from 'react'
import { JSX } from '@ionic/core'

import { StyledMyUISearchbar } from './MyUISearchbar-Styles'

export function MyUISearchbar(
  props: JSX.IonSearchbar & HTMLAttributes<HTMLIonSearchbarElement>
) {
  return <StyledMyUISearchbar {...props}>{props.children}</StyledMyUISearchbar>
}
