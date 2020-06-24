import styled from 'styled-components'
import { IonHeader } from '@ionic/react'

export const StyledMyUIHeader = styled(IonHeader)`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 6px;
  background: var(--my-ui-toolbar-background);
  border-bottom: 1px solid var(--my-ui-header-border-bottom-color);
`
