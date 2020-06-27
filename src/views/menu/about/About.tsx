import React from 'react'

import { HOME_PATH } from '../../../App-Constants'
import { BackButton } from '../../../common/components/backButton'
import {
  MyUIHeader,
  MyUIContent,
  MyUIPage,
  MyUITitle,
} from '../../../common/myUIComponents'

export function About() {
  return (
    <MyUIPage>
      <MyUIHeader>
        <BackButton to={HOME_PATH} />
        <MyUITitle>About</MyUITitle>
      </MyUIHeader>
      <MyUIContent>About</MyUIContent>
    </MyUIPage>
  )
}
