import React from 'react'

import { IMyUIIconProps } from './MyUICustomIcon-Types'
import {
  StyledMyUICustomIcon,
  StyledMyUICustomIconCircle,
} from './MyUICustomIcon-Styles'

export function MyUICustomIcon(props: IMyUIIconProps) {
  const { icon, circled } = props

  let uiIcon = <StyledMyUICustomIcon icon={icon} />

  if (circled) {
    uiIcon = <StyledMyUICustomIconCircle icon={icon} />
  }

  return uiIcon
}
