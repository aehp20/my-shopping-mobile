import React from 'react'
import { logoLinkedin } from 'ionicons/icons'

import { HOME_PATH } from '../../../App-Constants'
import { BackButton } from '../../../common/components/backButton'
import {
  MyUIHeader,
  MyUIContent,
  MyUIPage,
  MyUIIcon,
  MyUIHorizontalSpace,
  MyUICustomTitle,
} from '../../../common/myUIComponents'
import {
  StyledAboutContainer,
  StyledAboutLogo,
  StyledAboutRow,
  StyledAboutAuthor,
  StyledAboutAppName,
} from './About-Styles'
import { version } from '../../../../package.json'

export function About() {
  return (
    <MyUIPage>
      <MyUIHeader>
        <BackButton to={HOME_PATH} />
        <MyUICustomTitle>About My shopping</MyUICustomTitle>
      </MyUIHeader>
      <MyUIContent>
        <StyledAboutContainer>
          <StyledAboutLogo>My shopping</StyledAboutLogo>
          <StyledAboutAppName>My shopping</StyledAboutAppName>
          <StyledAboutRow>
            The easy way to organize your shopping list
          </StyledAboutRow>
          <br />
          <StyledAboutRow>Version {version}</StyledAboutRow>
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
