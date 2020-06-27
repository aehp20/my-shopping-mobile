import React from 'react'
import { add } from 'ionicons/icons'

import {
  IMyUICustomFabButtonProps,
  IMyUICustomFabPathProps,
} from './MyUICustomFabButton-Types'
import { MyUIIcon, MyUIFab, MyUIFabButton } from '..'

function MyUICustomFabButton(props: IMyUICustomFabButtonProps) {
  const { vertical, horizontal, icon, path } = props

  return (
    <MyUIFab
      vertical={vertical || 'bottom'}
      horizontal={horizontal || 'center'}
      slot='fixed'
    >
      <MyUIFabButton routerLink={path}>
        <MyUIIcon icon={icon || add}></MyUIIcon>
      </MyUIFabButton>
    </MyUIFab>
  )
}

export function MyUIAddFabButton(props: IMyUICustomFabPathProps) {
  return <MyUICustomFabButton path={props.path} />
}
