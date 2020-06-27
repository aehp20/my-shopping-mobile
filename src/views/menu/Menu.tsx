import React from 'react'

import { MENU_CONF } from './Menu-Constants'
import { MenuButton } from '../../common/components/menuButton'

export function Menu() {
  return <MenuButton {...MENU_CONF} />
}
