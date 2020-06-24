import React from 'react'

import { IConfirmDeletionDialog } from './ConfirmDeletionDialog-Types'
import { MyUIAlert } from '../../myUIComponents'

export function ConfirmDeletionDialog(props: IConfirmDeletionDialog) {
  const { isOpen, cancelFn, okFn } = props

  return (
    <MyUIAlert
      isOpen={isOpen}
      onDidDismiss={cancelFn}
      header={'Confirm deletion'}
      message={'Are you sure you want to delete the selected item(s)?'}
      buttons={[
        {
          text: 'Cancel',
          handler: cancelFn,
        },
        {
          text: 'Ok',
          handler: okFn,
        },
      ]}
    />
  )
}
