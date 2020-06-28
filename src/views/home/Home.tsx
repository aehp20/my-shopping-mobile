import React from 'react'

import { ListsProducts } from '../listsProducts'
import {
  MyUIHeader,
  MyUIContent,
  MyUIPage,
  MyUICustomTitle,
} from '../../common/myUIComponents'

export function Home() {
  return (
    <MyUIPage>
      <MyUIHeader>
        <MyUICustomTitle>My shopping</MyUICustomTitle>
      </MyUIHeader>
      <MyUIContent>
        <ListsProducts />
      </MyUIContent>
    </MyUIPage>
  )
}
