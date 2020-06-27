import React, { HTMLAttributes } from 'react'
import { JSX } from '@ionic/core'

import { StyledMyUIFabButton } from './MyUIFabButton-Styles'

export function MyUIFabButton(
  props: JSX.IonFabButton &
    HTMLAttributes<HTMLIonFabButtonElement> & {
      routerLink?: string | undefined
      routerDirection?: 'none' | 'forward' | 'back' | 'root' | undefined
    }
) {
  return <StyledMyUIFabButton {...props} />
}
