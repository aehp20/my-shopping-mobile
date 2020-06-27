export interface IMyUICustomFabPathProps {
  path: string
}

export interface IMyUICustomFabButtonProps extends IMyUICustomFabPathProps {
  vertical?: 'bottom' | 'top' | 'center' | undefined
  horizontal?: 'center' | 'start' | 'end' | undefined
  icon?: string
}
