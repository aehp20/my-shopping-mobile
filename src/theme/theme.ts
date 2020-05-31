export interface ITheme {
  body: string
  text: string
}

export interface IThemeProps {
  theme: ITheme
}

export const lightTheme: ITheme = {
  body: '#E2E2E2',
  text: '#363537',
}

export const darkTheme: ITheme = {
  body: '#363537',
  text: '#FAFAFA',
}
