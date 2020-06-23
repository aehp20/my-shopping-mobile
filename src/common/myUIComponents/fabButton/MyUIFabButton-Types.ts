export interface IMyUIFabPathProps {
  path: string
}

export interface IMyUIFabButtonProps extends IMyUIFabPathProps {
  vertical?: 'bottom' | 'top' | 'center' | undefined
  horizontal?: 'center' | 'start' | 'end' | undefined
  icon?: string
}
