import React, { HTMLAttributes } from 'react'
import { JSX } from '@ionic/core'
import { IonSelect } from '@ionic/react'

export function MyUISelect(
  props: JSX.IonSelect & HTMLAttributes<HTMLIonSelectElement>
) {
  return <IonSelect {...props}>{props.children}</IonSelect>
}
