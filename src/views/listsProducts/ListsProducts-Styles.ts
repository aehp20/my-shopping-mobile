import styled from 'styled-components'

import { MyUIIcon } from '../../common/myUIComponents'

export const StyledName = styled.div`
  font-size: 14px;
  font-weight: bold;
`

export const StyledProducts = styled.div`
  font-size: 14px;
  border-left: 1px solid var(--my-color-tertiary);
  border-right: 1px solid var(--my-color-tertiary);
  border-bottom: 1px solid var(--my-color-tertiary);
  min-height: 45px;
  padding: 6px;
`

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px;
  border: 1px solid var(--my-color-tertiary);
  background: var(--my-color-tertiary);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

export const StyledTrashIcon = styled(MyUIIcon)`
  cursor: pointer;
  font-size: 18px;
  border-radius: 50%;
  padding: 2px;
  color: var(--my-color-tertiary);
  background: var(--my-color-body);
`
