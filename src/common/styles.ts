import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { MyUICheckbox } from './myUIComponents'

export const StyledCheckbox = styled(MyUICheckbox)`
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
