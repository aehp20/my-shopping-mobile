import React, { HTMLAttributes } from 'react'
import { JSX } from '@ionic/core'
import { IonText } from '@ionic/react'

export function MyUIText(
  props: JSX.IonText & HTMLAttributes<HTMLIonTextElement>
) {
  return <IonText {...props} />
}
