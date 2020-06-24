import React from 'react'
import { Link } from 'react-router-dom'
import { arrowBack } from 'ionicons/icons'

import { IBackButtonProps } from './BackButton-types'
import { MyUICustomIcon } from '../../myUIComponents'

export function BackButton(props: IBackButtonProps) {
  return (
    <Link to={props.to}>
      <MyUICustomIcon icon={arrowBack} circled />
    </Link>
  )
}
