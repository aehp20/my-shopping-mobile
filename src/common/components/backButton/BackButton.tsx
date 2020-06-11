import React from 'react'
import { IonButtons } from '@ionic/react'
import { Link } from 'react-router-dom'
import { arrowBack } from 'ionicons/icons'

import { StyledArrowBack } from '../../styles'
import { IBackButtonProps } from './BackButton-types'

export function BackButton(props: IBackButtonProps) {
  return (
    <IonButtons slot='start'>
      <Link to={props.to}>
        <StyledArrowBack icon={arrowBack}></StyledArrowBack>
      </Link>
    </IonButtons>
  )
}
