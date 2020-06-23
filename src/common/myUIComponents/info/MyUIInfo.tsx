import React from 'react'
import { IonCardContent } from '@ionic/react'

import { IMyUIComponentProps } from '../types'
import { StyledMyUIInfo } from './MyUIInfo-Styles'

export function MyUIInfo(props: IMyUIComponentProps) {
  return (
    <StyledMyUIInfo>
      <IonCardContent>{props.children}</IonCardContent>
    </StyledMyUIInfo>
  )
}
