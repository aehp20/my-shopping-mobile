import React from 'react'
import { IonPage } from '@ionic/react'

import { IMyUIComponentProps } from '../types'

export function MyUIPage(props: IMyUIComponentProps) {
  return <IonPage>{props.children}</IonPage>
}
