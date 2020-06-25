import React, { HTMLAttributes } from 'react'
import { JSX } from '@ionic/core'

import { StyledMyUIList } from './MyUIList-Styles'

export function MyUIList(
  props: JSX.IonList & HTMLAttributes<HTMLIonColElement>
) {
  return <StyledMyUIList {...props}>{props.children}</StyledMyUIList>
}
