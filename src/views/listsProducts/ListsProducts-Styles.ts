import styled from 'styled-components'
import { IonIcon } from '@ionic/react'

export const StyledName = styled.div`
  color: #3399ff;
  font-size: 14px;
  font-weight: bold;
`

export const StyledProducts = styled.div`
  color: #262626;
  font-size: 14px;
  border-left: 1px solid #80deea;
  border-right: 1px solid #80deea;
  border-bottom: 1px solid #80deea;
  min-height: 45px;
  padding: 6px;
`

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px;
  border: 1px solid #80deea;
  background: #e0f7fa;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

export const StyledTrashIcon = styled(IonIcon)`
  cursor: pointer;
  font-size: 18px;
`
