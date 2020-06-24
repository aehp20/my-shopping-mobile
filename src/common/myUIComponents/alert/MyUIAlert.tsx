import React, { RefAttributes } from 'react'
import { AlertOptions } from '@ionic/core'
import { ReactControllerProps } from '@ionic/react/dist/types/components/createControllerComponent'
import { IonAlert } from '@ionic/react'

import './MyUIAlert-Styles.css'

export function MyUIAlert(
  props: AlertOptions &
    ReactControllerProps &
    RefAttributes<HTMLIonAlertElement>
) {
  return <IonAlert {...props} />
}
