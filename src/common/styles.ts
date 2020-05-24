import styled from 'styled-components'
import { IonCheckbox, IonIcon } from '@ionic/react'
import { Link } from 'react-router-dom'

export const StyledCheckbox = styled(IonCheckbox)`
  margin: 0px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const StyledBlackLink = styled(StyledLink)`
  color: #262626;
`

export const StyledErrorSection = styled.div`
  padding: 6px;
`

export const StyledArrowBack = styled(IonIcon)`
  font-size: 24px;
  padding-left: 10px;
  color: #222428;
`
