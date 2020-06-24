import React, { HTMLAttributes } from 'react'
import { JSX } from '@ionic/core'

import { StyledMyUIInput } from './MyUIInput-Styles'

export function MyUInput(
  props: JSX.IonInput & HTMLAttributes<HTMLIonInputElement>
) {
  return <StyledMyUIInput {...props} />
}
