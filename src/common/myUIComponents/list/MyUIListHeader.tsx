import React, { HTMLAttributes } from 'react'
import { JSX } from '@ionic/core'
import { IonListHeader } from '@ionic/react'

export function MyUIListHeader(
  props: JSX.IonListHeader & HTMLAttributes<HTMLIonListHeaderElement>
) {
  return <IonListHeader {...props}>{props.children}</IonListHeader>
}
