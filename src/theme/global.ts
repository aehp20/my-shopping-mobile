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
    --my-color-quinary: ${({ theme }: IThemeProps) => theme.myColorQuinary};
    --my-color-senary: ${({ theme }: IThemeProps) => theme.myColorSenary};
    --my-border-color: ${({ theme }: IThemeProps) => theme.myBorderColor};

    --my-ui-content-background: ${({ theme }: IThemeProps) => theme.body};
    --my-ui-header-border-bottom-color: ${({ theme }: IThemeProps) =>
      theme.myColorPrimary};
    --my-ui-header-background: ${({ theme }: IThemeProps) =>
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
    --my-ui-textarea-color: ${({ theme }: IThemeProps) => theme.text};
    --my-ui-textarea-background: ${({ theme }: IThemeProps) => theme.body};
    --my-ui-alert-head-background: ${({ theme }: IThemeProps) =>
      theme.myColorPrimary};
    --my-ui-alert-title-color: ${({ theme }: IThemeProps) => theme.body};
    --my-ui-alert-message-color: ${({ theme }: IThemeProps) => theme.text};
    --my-ui-alert-button-background-color: ${({ theme }: IThemeProps) =>
      theme.myColorTertiary};
    --my-ui-searchbar-color: ${({ theme }: IThemeProps) => theme.text};
    --my-ui-searchbar-background: ${({ theme }: IThemeProps) => theme.body};
    --my-ui-searchbar-search-icon-color: ${({ theme }: IThemeProps) =>
      theme.text};
    --my-ui-checkbox-background: ${({ theme }: IThemeProps) => theme.body};
    --my-ui-checkbox-border-color: ${({ theme }: IThemeProps) =>
      theme.myBorderColor};
    --my-ui-checkbox-background-checked: ${({ theme }: IThemeProps) =>
      theme.myColorQuaternary};
    --my-ui-checkbox-border-color-checked: ${({ theme }: IThemeProps) =>
      theme.myColorQuaternary};
    --my-ui-toggle-background: ${({ theme }: IThemeProps) =>
      theme.myColorSenary};
    --my-ui-toggle-handle-background: ${({ theme }: IThemeProps) => theme.body};
    --my-ui-toggle-background-checked: ${({ theme }: IThemeProps) =>
      theme.myColorQuaternary};
    --my-ui-toggle-handle-background-checked: ${({ theme }: IThemeProps) =>
      theme.myColorSecondary};
  }

  a {
    color: var(--my-color-text);
  }
`
