import React, { HTMLAttributes } from 'react'
import { JSX } from '@ionic/core'
import { IonRow } from '@ionic/react'

export function MyUIRow(props: JSX.IonRow & HTMLAttributes<HTMLIonRowElement>) {
  return <IonRow {...props}>{props.children}</IonRow>
}
