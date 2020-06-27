import React, { HTMLAttributes } from 'react'
import { JSX } from '@ionic/core'
import { IonFab } from '@ionic/react'

export function MyUIFab(props: JSX.IonFab & HTMLAttributes<HTMLIonFabElement>) {
  return <IonFab {...props} />
}
