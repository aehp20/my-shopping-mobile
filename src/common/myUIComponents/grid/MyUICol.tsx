import React, { HTMLAttributes } from 'react'
import { JSX } from '@ionic/core'
import { IonCol } from '@ionic/react'

export function MyUICol(props: JSX.IonCol & HTMLAttributes<HTMLIonColElement>) {
  return <IonCol {...props}>{props.children}</IonCol>
}
