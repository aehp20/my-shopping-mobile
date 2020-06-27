import styled from 'styled-components'

import { IMyUIHorizontalSpaceProps } from './MyUIHorizontalSpace-Types'

export const StyledMyUIHorizontalSpace = styled.div<IMyUIHorizontalSpaceProps>`
  width: ${(props) => (props.width ? props.width : '0.5em')};
`
