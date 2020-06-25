import styled from 'styled-components'
import { IonText } from '@ionic/react'

export const StyledMyUIText = styled(IonText)`
  color: ${(props) => (props.color ? props.color : 'var(--my-ui-text-color)')};
`
