import React from 'react'
import { IonAlert } from '@ionic/react'

import { IConfirmDeletionDialog } from './ConfirmDeletionDialog-Types'

export function ConfirmDeletionDialog(props: IConfirmDeletionDialog) {
  const { isOpen, cancelFn, okFn } = props

  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={cancelFn}
      header={'Confirm deletion'}
      message={'Are you sure you want to delete the selected item(s)?'}
      buttons={[
        {
          text: 'Cancel',
          handler: cancelFn
        },
        {
          text: 'Ok',
          handler: okFn
        }
      ]}
    />
  )
}
