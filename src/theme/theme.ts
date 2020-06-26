export interface IThemeProps {
  theme: ITheme
}

export interface ITheme {
  name: string
  body: string
  text: string
  myColorPrimary: string // Header border
  myColorSecondary: string // Header background
  myColorTertiary: string // Fab button color
  myColorQuaternary: string // Searchbar background color
  myColorQuinary: string // Selected item background color
  myColorSenary: string // Item border color
  myColorSeptenary: string // Info color, checkbox border color
  toggleBackground: string // Toggle background
  toggleHandleBackground: string // Toggle handle background
  toggleBackgroundChecked: string // Toggle background checked
  toggleHandleBackgroundChecked: string // Toggle handle background checked
  alertHeadBackground: string // Alert head background
  alertTitleColor: string // Alert title color
  alertMessageColor: string // Alert message color
  alertMessageBackground: string // Alert message background
  alertRadioGroupBackground: string // Alert radio group background
  alertRadioGroupBorderColor: string // Alert radio group border color
  alertRadioIconBorderColor: string // Alert radio icon border color
  alertRadioInnerBackground: string // Alert radio inner background
  alertRadioLabelColor: string // Alert radio label color
  alertButtonGroupBackground: string // Alert button group background
  alertButtonBackground: string // Alert button background
  alertButtonColor: string // Alert button color
  customIonColorDangerContrast: string // Custom Ion color danger contrast
}

export const defaultTheme = {
  name: 'light',
  body: '#ffffff',
  text: '#363537',
  myColorPrimary: '#0b67cd',
  myColorSecondary: '#2d89ef',
  myColorTertiary: '#03a9f4',
  myColorQuaternary: '#41bdf4',
  myColorQuinary: '#b3e4f9',
  myColorSenary: '#d7d8da',
  myColorSeptenary: '#666666',
  toggleBackground: '#989aa2',
  toggleHandleBackground: '#d7d8da',
  toggleBackgroundChecked: '#41bdf4',
  toggleHandleBackgroundChecked: '#2d89ef',
  alertHeadBackground: '#2d89ef',
  alertTitleColor: '#ffffff',
  alertMessageColor: '#363537',
  alertMessageBackground: '#ffffff',
  alertRadioGroupBackground: '#ffffff',
  alertRadioGroupBorderColor: '#ffffff',
  alertRadioIconBorderColor: '#666666',
  alertRadioInnerBackground: '#666666',
  alertRadioLabelColor: '#363537',
  alertButtonGroupBackground: '#ffffff',
  alertButtonBackground: '#03a9f4',
  alertButtonColor: '#ffffff',
  customIonColorDangerContrast: '#ffffff',
}

export const themes: ITheme[] = [
  defaultTheme,
  {
    name: 'dark',
    body: '#121212',
    text: '#f7f7f7',
    myColorPrimary: '#272727',
    myColorSecondary: '#636366',
    myColorTertiary: '#03a9f4',
    myColorQuaternary: '#919194',
    myColorQuinary: '#242424',
    myColorSenary: '#282829',
    myColorSeptenary: '#ffffff',
    toggleBackground: '#989aa2',
    toggleHandleBackground: '#474747',
    toggleBackgroundChecked: '#41bdf4',
    toggleHandleBackgroundChecked: '#2d89ef',
    alertHeadBackground: '#636366',
    alertTitleColor: '#121212',
    alertMessageColor: '#f7f7f7',
    alertMessageBackground: '#242424',
    alertRadioGroupBackground: '#242424',
    alertRadioGroupBorderColor: '#242424',
    alertRadioIconBorderColor: '#f7f7f7',
    alertRadioInnerBackground: '#f7f7f7',
    alertRadioLabelColor: '#f7f7f7',
    alertButtonGroupBackground: '#242424',
    alertButtonBackground: '#03a9f4',
    alertButtonColor: '#121212',
    customIonColorDangerContrast: '#121212',
  },
]
