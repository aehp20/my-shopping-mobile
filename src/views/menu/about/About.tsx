import React from 'react'
import { logoLinkedin } from 'ionicons/icons'

import { HOME_PATH } from '../../../App-Constants'
import { BackButton } from '../../../common/components/backButton'
import {
  MyUIHeader,
  MyUIContent,
  MyUIPage,
  MyUITitle,
  MyUIIcon,
  MyUIHorizontalSpace,
} from '../../../common/myUIComponents'
import {
  StyledAboutContainer,
  StyledAboutLogo,
  StyledAboutRow,
  StyledAboutAuthor,
  StyledAboutAppName,
} from './About-Styles'

export function About() {
  return (
    <MyUIPage>
      <MyUIHeader>
        <BackButton to={HOME_PATH} />
        <MyUITitle>About My shopping</MyUITitle>
      </MyUIHeader>
      <MyUIContent>
        <StyledAboutContainer>
          <StyledAboutLogo>My shopping</StyledAboutLogo>
          <StyledAboutAppName>My shopping</StyledAboutAppName>
          <StyledAboutRow>
            The easy way to organize your shopping list
          </StyledAboutRow>
          <br />
          <StyledAboutRow>Version 1.0.0</StyledAboutRow>
          <StyledAboutRow>Copyright (c) 2020</StyledAboutRow>
          <StyledAboutRow>
            <StyledAboutAuthor
              to={{ pathname: 'https://www.linkedin.com/in/aronherreraponte' }}
              target='_blank'
            >
              <MyUIIcon icon={logoLinkedin} size='small' />
              <MyUIHorizontalSpace />
              <span>Aron Herrera Ponte</span>
            </StyledAboutAuthor>
          </StyledAboutRow>
        </StyledAboutContainer>
      </MyUIContent>
    </MyUIPage>
  )
}
