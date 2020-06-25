import React, { HTMLAttributes } from 'react'
import { JSX } from '@ionic/core'
import { IonItem } from '@ionic/react'

export function MyUIItem(
  props: JSX.IonItem & HTMLAttributes<HTMLIonItemElement>
) {
  return <IonItem {...props}>{props.children}</IonItem>
}
