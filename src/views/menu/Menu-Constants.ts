import { construct, information, ellipsisHorizontal } from 'ionicons/icons'
import { IMenuButtonProps } from '../../common/components/menuButton/MenuButton-Types'

export const MENU_CONFIG_PATH = '/config'
export const MENU_ABOUT_PATH = '/about'

export const MENU_CONF: IMenuButtonProps = {
  mainIcon: ellipsisHorizontal,
  buttonsList: [
    { icon: construct, path: MENU_CONFIG_PATH },
    { icon: information, path: MENU_ABOUT_PATH },
  ],
}
