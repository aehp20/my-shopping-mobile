import React, { HTMLAttributes } from 'react'
import { JSX } from '@ionic/core'

import { StyledMyUIText } from './MyUIText-Styles'

export function MyUIText(
  props: JSX.IonText & HTMLAttributes<HTMLIonTextElement>
) {
  return <StyledMyUIText {...props} />
}
