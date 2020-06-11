export interface IFabPathProps {
  path: string
}

export interface IFabButtonProps extends IFabPathProps {
  vertical?: 'bottom' | 'top' | 'center' | undefined
  horizontal?: 'center' | 'start' | 'end' | undefined
  icon?: string
}
