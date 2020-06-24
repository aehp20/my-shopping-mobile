import React from 'react'

import { ListsProducts } from '../listsProducts'
import {
  MyUIHeader,
  MyUITitle,
  MyUIContent,
  MyUIPage,
} from '../../common/myUIComponents'

export function Home() {
  return (
    <MyUIPage>
      <MyUIHeader>
        <MyUITitle>My shopping</MyUITitle>
      </MyUIHeader>
      <MyUIContent>
        <ListsProducts />
      </MyUIContent>
    </MyUIPage>
  )
}
