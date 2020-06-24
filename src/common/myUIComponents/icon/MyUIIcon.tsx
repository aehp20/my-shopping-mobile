import React, { HTMLAttributes } from 'react'
import { IonicReactProps } from '@ionic/react/dist/types/components/IonicReactProps'
import { IonIcon } from '@ionic/react'
import { save } from 'ionicons/icons'

// TODO: remove this import when Ionic adds this in types/components.d.ts
import { IonIconProps } from './MyUIIcon-Types'

function MyUIIcon(
  props: IonIconProps & IonicReactProps & HTMLAttributes<HTMLIonIconElement>
) {
  return <IonIcon {...props} />
}

export function MyUISaveIcon() {
  return <MyUIIcon icon={save}></MyUIIcon>
}
