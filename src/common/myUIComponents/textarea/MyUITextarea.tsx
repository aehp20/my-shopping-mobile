import React, { HTMLAttributes } from 'react'
import { JSX } from '@ionic/core'

import { StyledMyUITextarea } from './MyUITextarea-Styles'

export function MyUITextarea(
  props: JSX.IonTextarea & HTMLAttributes<HTMLIonTextareaElement>
) {
  return <StyledMyUITextarea {...props} />
}
