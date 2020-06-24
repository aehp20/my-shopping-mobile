import styled from 'styled-components'
import { IonCheckbox } from '@ionic/react'
import { Link } from 'react-router-dom'

export const StyledCheckbox = styled(IonCheckbox)`
  margin: 0px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const StyledWhiteLink = styled(StyledLink)`
  color: #ffffff;
`

export const StyledErrorSection = styled.div`
  padding: 6px;
`
