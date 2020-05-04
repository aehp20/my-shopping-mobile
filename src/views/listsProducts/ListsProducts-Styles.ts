import styled from 'styled-components'
import { IonIcon } from '@ionic/react'

export const StyledColumn = styled.div`
  background-color: #ccf2ff;
  border-style: solid;
  border-radius: 4px;
  border-width: 1px;
  border-color: #3399ff;
  padding: 6px;
`

export const StyledName = styled.div`
  color: #3399ff;
  font-size: 14px;
  font-weight: bold;
`

export const StyledProducts = styled.div`
  color: #262626;
  font-size: 14px;
  padding: 0 4px;
`

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledTrashIcon = styled(IonIcon)`
  cursor: pointer;
`
