import React, { HTMLAttributes } from 'react'
import { JSX } from '@ionic/core'
import { IonSelectOption } from '@ionic/react'

export function MyUISelectOption(
  props: JSX.IonSelectOption & HTMLAttributes<HTMLIonSelectOptionElement>
) {
  return <IonSelectOption {...props}>{props.children}</IonSelectOption>
}
