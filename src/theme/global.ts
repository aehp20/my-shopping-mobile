import { createGlobalStyle } from 'styled-components'

import { IThemeProps } from './theme'

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }: IThemeProps) => theme.body};
    color: ${({ theme }: IThemeProps) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  :root {
    --my-color-text: ${({ theme }: IThemeProps) => theme.text};
    --my-color-primary: ${({ theme }: IThemeProps) => theme.myColorPrimary};
    --my-color-secondary: ${({ theme }: IThemeProps) => theme.myColorSecondary};
    --my-color-secondary-activated: ${({ theme }: IThemeProps) =>
      theme.myColorSecondaryActivated};
    --my-border-color: ${({ theme }: IThemeProps) => theme.myBorderColor};
  }

  ion-content {
    --background: ${({ theme }: IThemeProps) => theme.body};
  }

  ion-header {
    background: ${({ theme }: IThemeProps) => theme.myColorPrimary};
  }

  ion-fab-button {
    --background: ${({ theme }: IThemeProps) => theme.myColorSecondary};
    --background-activated: var(--my-color-secondary-activated);
    --background-focused: var(--my-color-secondary-activated);
    --background-hover: var(--my-color-secondary-activated);
  }

  a {
    color: var(--my-color-text);
  }
`
