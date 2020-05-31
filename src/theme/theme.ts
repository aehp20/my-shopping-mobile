export interface ITheme {
  body: string
  text: string
  myColorPrimary: string
  myColorSecondary: string
  myColorSecondaryActivated: string
  myBorderColor: string
}

export interface IThemeProps {
  theme: ITheme
}

export const lightTheme: ITheme = {
  body: '#E2E2E2',
  text: '#363537',
  myColorPrimary: 'red',
  myColorSecondary: 'red',
  myColorSecondaryActivated: '',
  myBorderColor: 'red',
}

export const darkTheme: ITheme = {
  body: '#121212',
  text: '#f7f7f7',
  myColorPrimary: '#272727', // Header
  myColorSecondary: '#636366', // Apply button
  myColorSecondaryActivated: '#676767', // Activated Apply button
  myBorderColor: '#313131', // Border
}
