import React from 'react'
import { IonHeader } from '@ionic/react'

import { IHeader } from './Header-Types'

export function Header(props: IHeader) {
  return <IonHeader className='ion-no-border'>{props.children}</IonHeader>
}
