import styled from 'styled-components'
import { IonIcon } from '@ionic/react'

export const StyledMyUICustomIcon = styled(IonIcon)`
  font-size: 24px;
  padding: 8px;
  color: var(--my-ui-icon-color);
`

export const StyledMyUICustomIconCircle = styled(StyledMyUICustomIcon)`
  border-radius: 50%;
  background: var(--my-ui-icon-background);
`
