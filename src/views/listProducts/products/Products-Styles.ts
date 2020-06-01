import styled from 'styled-components'
import {
  IonItem,
  IonListHeader,
  IonList,
  IonGrid,
  IonCol,
  IonToggle,
} from '@ionic/react'

export const StyledList = styled(IonList)`
  margin-top: 60px;
`

export const StyledHeaderList = styled(IonListHeader)`
  padding: 0px;
`

export const StyledHeaderItem = styled(IonItem)`
  width: 100%;
`

export const StyledActionsBar = styled(IonGrid)`
  padding: 0px;
  position: fixed;
  z-index: 10;
  width: 100%;
  margin-top: 1px;
`

export const StyledColumnDelete = styled(IonCol)`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
`

export const StyledColumnToBuy = styled(IonCol)`
  padding: 0px;
`

export const StyledToggleToBuy = styled(IonToggle)`
  padding: 5px 0px;
`

export const StyledItemProduct = styled(IonItem)<{ isSelected: boolean }>`
  --background: ${(props) =>
    props.isSelected ? 'var(--my-color-primary)' : ''};
`
