import styled from 'styled-components'

import { IMyUIHorizontalSpaceProps } from './MyUIHorizontalSpace-Types'

export const StyledMyUIHorizontalSpace = styled.div<IMyUIHorizontalSpaceProps>`
  width: ${(props) => props.width};
`
