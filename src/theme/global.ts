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
    --my-color-clear-icon: ${({ theme }: IThemeProps) =>
      theme.myColorClearIcon};
    --my-color-primary: ${({ theme }: IThemeProps) => theme.myColorPrimary};
    --my-color-secondary: ${({ theme }: IThemeProps) => theme.myColorSecondary};
    --my-border-color: ${({ theme }: IThemeProps) => theme.myBorderColor};
  }

  ion-content {
    --background: var(--my-color-body);
  }

  ion-header {
    background: var(--my-color-primary);
    border-bottom: 1px solid var(--my-border-color);
  }

  ion-toolbar {
    --background: var(--my-color-primary);
  }

  ion-fab-button,
  ion-button {
    --color: var(--my-color-body);
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

  ion-textarea,
  ion-input,
  ion-searchbar {
    --background: var(--my-color-secondary) !important;
    color: var(--my-color-text) !important;
  }

  ion-title {
    --color: var(--my-color-text);
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

  .input-clear-icon.sc-ion-input-md {
    background-image: url("data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><polygon%20fill='${({
      theme,
    }: IThemeProps) =>
      theme.myColorClearIcon}'%20points='405,136.798%20375.202,107%20256,226.202%20136.798,107%20107,136.798%20226.202,256%20107,375.202%20136.798,405%20256,285.798%20375.202,405%20405,375.202%20285.798,256'/></svg>")};
  }
`
