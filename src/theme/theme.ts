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
  myColorSenary: string // Toggle background
  myColorSeptenary: string // Item border color
  myColorOctonary: string // Info color, checkbox border color
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
  myColorSenary: '#989aa2',
  myColorSeptenary: '#d7d8da',
  myColorOctonary: '#666666',
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
    myColorQuinary: '#b3e4f9',
    myColorSenary: '#989aa2',
    myColorSeptenary: '#d7d8da',
    myColorOctonary: '#ffffff',
  },
]
