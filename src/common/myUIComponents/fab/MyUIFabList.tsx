import React, { HTMLAttributes } from 'react'
import { JSX } from '@ionic/core'
import { IonFabList } from '@ionic/react'

export function MyUIFabList(
  props: JSX.IonFabList & HTMLAttributes<HTMLIonFabListElement>
) {
  return <IonFabList {...props} />
}
