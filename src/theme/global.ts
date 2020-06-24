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
    --my-color-body: ${({ theme }: IThemeProps) => theme.body};
    --my-color-text: ${({ theme }: IThemeProps) => theme.text};
    --my-color-primary: ${({ theme }: IThemeProps) => theme.myColorPrimary};
    --my-color-secondary: ${({ theme }: IThemeProps) => theme.myColorSecondary};
    --my-color-tertiary: ${({ theme }: IThemeProps) => theme.myColorTertiary};
    --my-color-quaternary: ${({ theme }: IThemeProps) =>
      theme.myColorQuaternary};
    --my-border-color: ${({ theme }: IThemeProps) => theme.myBorderColor};

    --my-ui-content-background: ${({ theme }: IThemeProps) => theme.body};
    --my-ui-header-border-bottom-color: ${({ theme }: IThemeProps) =>
      theme.myColorPrimary};
    --my-ui-toolbar-background: ${({ theme }: IThemeProps) =>
      theme.myColorSecondary};
    --my-ui-title-color: ${({ theme }: IThemeProps) => theme.body};
    --my-ui-fab-button-color: ${({ theme }: IThemeProps) => theme.body};
    --my-ui-fab-button-background: ${({ theme }: IThemeProps) =>
      theme.myColorTertiary};
    --my-ui-icon-color: ${({ theme }: IThemeProps) => theme.body};
    --my-ui-icon-background: ${({ theme }: IThemeProps) =>
      theme.myColorTertiary};
    --my-ui-input-color: ${({ theme }: IThemeProps) => theme.text};
    --my-ui-input-background: ${({ theme }: IThemeProps) => theme.body};
    --my-ui-input-clear-icon-color: ${({ theme }: IThemeProps) => theme.text};
    --my-ui-alert-head-background: ${({ theme }: IThemeProps) =>
      theme.myColorPrimary};
    --my-ui-alert-title-color: ${({ theme }: IThemeProps) => theme.body};
    --my-ui-alert-message-color: ${({ theme }: IThemeProps) => theme.text};
    --my-ui-alert-button-background-color: ${({ theme }: IThemeProps) =>
      theme.myColorTertiary};
    --my-ui-searchbar-color: ${({ theme }: IThemeProps) => theme.text};
    --my-ui-searchbar-background: ${({ theme }: IThemeProps) => theme.body};
  }

  ion-list {
    background: var(--my-color-body) !important;
  }

  ion-item {
    --background: var(--my-color-body);
    --color: var(--my-color-text);
    --ripple-color: transparent;
    --background-hover: transparent;
    --border-color: var(--my-border-color);
  }

  ion-checkbox {
    --background: var(--my-color-secondary);
    --border-color: var(--my-border-color);
  }

  ion-textarea {
    --background: var(--my-color-secondary) !important;
    color: var(--my-color-text) !important;
  }

  ion-label {
    margin-bottom: 8px! important;
  }

  a {
    color: var(--my-color-text);
  }

  .searchbar-search-icon.sc-ion-searchbar-md {
    color: var(--my-color-text);
  }
`
