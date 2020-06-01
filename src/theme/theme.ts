export interface ITheme {
  body: string
  text: string
  myColorClearIcon: string
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
  myColorClearIcon: 'red',
  myColorPrimary: 'red',
  myColorSecondary: 'red',
  myColorSecondaryActivated: '',
  myBorderColor: 'red',
}

export const darkTheme: ITheme = {
  body: '#121212',
  text: '#f7f7f7',
  myColorClearIcon: '%23f7f7f7', // Clear icon color
  myColorPrimary: '#272727', // Header
  myColorSecondary: '#636366', // Apply button
  myColorSecondaryActivated: '#676767', // Activated Apply button
  myBorderColor: '#313131', // Border
}
