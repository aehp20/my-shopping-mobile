import React, { HTMLAttributes } from 'react'
import { JSX } from '@ionic/core'
import { IonGrid } from '@ionic/react'

export function MyUIGrid(
  props: JSX.IonGrid & HTMLAttributes<HTMLIonGridElement>
) {
  return <IonGrid>{props.children}</IonGrid>
}
