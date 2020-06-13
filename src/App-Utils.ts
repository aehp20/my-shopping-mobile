import { themes, defaultTheme } from './theme/theme'

export function getTheme(theme: string) {
  return themes.find((item) => item.name === theme) || defaultTheme
}
