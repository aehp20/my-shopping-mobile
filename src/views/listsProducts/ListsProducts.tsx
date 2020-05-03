import React from 'react'

import { useAppContext } from '../../App-Context'
import { hasListItems } from '../../common/utils'
import { AddItemButton } from '../../common/components/addItemButton'

export function ListsProducts() {
  const { appData } = useAppContext()
  const { listsProducts } = appData

  return (
    <div>
      {hasListItems(listsProducts) ? (
        <div>listsProducts {listsProducts.length}</div>
      ) : (
        <div>Click on the button (+) to add a list</div>
      )}
      <AddItemButton path='ppppp' />
    </div>
  )
}
