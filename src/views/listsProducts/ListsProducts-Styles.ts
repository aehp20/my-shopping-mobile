import styled from 'styled-components'
import { IonIcon } from '@ionic/react'

export const StyledName = styled.div`
  font-size: 14px;
  font-weight: bold;
`

export const StyledProducts = styled.div`
  font-size: 14px;
  border-left: 1px solid var(--my-border-color);
  border-right: 1px solid var(--my-border-color);
  border-bottom: 1px solid var(--my-border-color);
  min-height: 45px;
  padding: 6px;
`

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px;
  border: 1px solid var(--my-border-color);
  background: var(--my-color-primary);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

export const StyledTrashIcon = styled(IonIcon)`
  cursor: pointer;
  font-size: 18px;
`
