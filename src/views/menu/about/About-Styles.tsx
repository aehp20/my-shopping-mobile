import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
`

export const StyledAboutRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
`

export const StyledAboutLogo = styled(StyledAboutRow)`
  background-color: #3880ff;
  width: 72px;
  height: 72px;
  color: #ffffff;
  font-size: 10px;
  border-radius: 4px;
`

export const StyledAboutAuthor = styled(Link)`
  display: flex;
`

export const StyledAboutAppName = styled(StyledAboutRow)`
  font-weight: bold;
  font-size: 20px;
`
