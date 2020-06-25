import React, { HTMLAttributes } from 'react'
import { JSX } from '@ionic/core'
import { IonList } from '@ionic/react'

export function MyUIList(
  props: JSX.IonList & HTMLAttributes<HTMLIonColElement>
) {
  return <IonList {...props}>{props.children}</IonList>
}
