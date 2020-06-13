export interface IThemeProps {
  theme: ITheme
}

export interface ITheme {
  name: string
  body: string
  text: string
  myColorClearIcon: string
  myColorPrimary: string
  myColorSecondary: string
  myBorderColor: string
}

export const defaultTheme = {
  name: 'light',
  body: '#ffffff',
  text: '#363537',
  myColorClearIcon: '%23f7f7f7',
  myColorPrimary: '#DFDBDB',
  myColorSecondary: '#ffffff',
  myBorderColor: '#666666',
}

export const themes: ITheme[] = [
  defaultTheme,
  {
    name: 'dark',
    body: '#121212',
    text: '#f7f7f7',
    myColorClearIcon: '%23f7f7f7', // Clear icon color
    myColorPrimary: '#272727', // Header
    myColorSecondary: '#636366', // Background fields
    myBorderColor: '#313131', // Border
  },
]
