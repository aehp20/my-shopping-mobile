import styled from 'styled-components'
import {
  MyUIList,
  MyUIListHeader,
  MyUIItem,
  MyUIToggle,
} from '../../../common/myUIComponents'

export const StyledList = styled(MyUIList)`
  margin-top: 50px;
`

export const StyledHeaderList = styled(MyUIListHeader)`
  padding: 0px;
`

export const StyledHeaderItem = styled(MyUIItem)`
  width: 100%;
`

export const StyledActionsBar = styled.div`
  display: flex;
  align-items: center;
  padding: 6px;
  position: fixed;
  z-index: 10;
  width: 100%;
  background: var(--my-color-quaternary);
`

export const StyledToggleToBuy = styled(MyUIToggle)`
  padding: 5px 0px;
`

export const StyledItemProduct = styled(MyUIItem)<{ isSelected: boolean }>`
  --background: ${(props) =>
    props.isSelected ? 'var(--my-color-quinary)' : ''};
`
