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
    // *******************
    // Local css variables
    // *******************
    --my-color-body: ${({ theme }: IThemeProps) => theme.body};
    --my-color-text: ${({ theme }: IThemeProps) => theme.text};
    --my-color-primary: ${({ theme }: IThemeProps) => theme.myColorPrimary};
    --my-color-secondary: ${({ theme }: IThemeProps) => theme.myColorSecondary};
    --my-color-tertiary: ${({ theme }: IThemeProps) => theme.myColorTertiary};
    --my-color-quaternary: ${({ theme }: IThemeProps) =>
      theme.myColorQuaternary};
    --my-color-quinary: ${({ theme }: IThemeProps) => theme.myColorQuinary};

    // **************************
    // Custom Ionic css variables
    // **************************
    --ion-color-danger-contrast: ${({ theme }: IThemeProps) =>
      theme.customIonColorDangerContrast};

    // ********************************************
    // Set values to My UI Components css variables
    // ********************************************
    --my-ui-content-background: ${({ theme }: IThemeProps) => theme.body};
    --my-ui-header-border-bottom-color: ${({ theme }: IThemeProps) =>
      theme.myColorPrimary};
    --my-ui-header-background: ${({ theme }: IThemeProps) =>
      theme.myColorSecondary};
    --my-ui-title-color: ${({ theme }: IThemeProps) => theme.body};
    --my-ui-text-color: ${({ theme }: IThemeProps) => theme.text};
    --my-ui-button-color: ${({ theme }: IThemeProps) => theme.body};
    --my-ui-button-background: ${({ theme }: IThemeProps) =>
      theme.myColorTertiary};
    --my-ui-fab-button-color: ${({ theme }: IThemeProps) => theme.body};
    --my-ui-fab-button-background: ${({ theme }: IThemeProps) =>
      theme.myColorTertiary};
    --my-ui-icon-color: ${({ theme }: IThemeProps) => theme.body};
    --my-ui-icon-background: ${({ theme }: IThemeProps) =>
      theme.myColorTertiary};
    --my-ui-input-color: ${({ theme }: IThemeProps) => theme.text};
    --my-ui-input-background: ${({ theme }: IThemeProps) => theme.body};
    --my-ui-textarea-color: ${({ theme }: IThemeProps) => theme.text};
    --my-ui-textarea-background: ${({ theme }: IThemeProps) => theme.body};
    --my-ui-alert-head-background: ${({ theme }: IThemeProps) =>
      theme.alertHeadBackground};
    --my-ui-alert-title-color: ${({ theme }: IThemeProps) =>
      theme.alertTitleColor};
    --my-ui-alert-message-background: ${({ theme }: IThemeProps) =>
      theme.alertMessageBackground};
    --my-ui-alert-message-color: ${({ theme }: IThemeProps) =>
      theme.alertMessageColor};
    --my-ui-alert-radio-group-background: ${({ theme }: IThemeProps) =>
      theme.alertRadioGroupBackground};
    --my-ui-alert-radio-group-border-color: ${({ theme }: IThemeProps) =>
      theme.alertRadioGroupBorderColor};
    --my-ui-alert-radio-icon-border-color: ${({ theme }: IThemeProps) =>
      theme.alertRadioIconBorderColor};
    --my-ui-alert-radio-inner-color: ${({ theme }: IThemeProps) =>
      theme.alertRadioInnerColor};
    --my-ui-alert-radio-label-color: ${({ theme }: IThemeProps) =>
      theme.alertRadioLabelColor};
    --my-ui-alert-button-group-background: ${({ theme }: IThemeProps) =>
      theme.alertButtonGroupBackground};
    --my-ui-alert-button-background-color: ${({ theme }: IThemeProps) =>
      theme.alertButtonBackground};
    --my-ui-alert-button-color: ${({ theme }: IThemeProps) =>
      theme.alertButtonColor};
    --my-ui-searchbar-color: ${({ theme }: IThemeProps) => theme.text};
    --my-ui-searchbar-background: ${({ theme }: IThemeProps) => theme.body};
    --my-ui-searchbar-search-icon-color: ${({ theme }: IThemeProps) =>
      theme.text};
    --my-ui-checkbox-background: ${({ theme }: IThemeProps) => theme.body};
    --my-ui-checkbox-border-color: ${({ theme }: IThemeProps) =>
      theme.myColorSeptenary};
    --my-ui-checkbox-background-checked: ${({ theme }: IThemeProps) =>
      theme.myColorQuaternary};
    --my-ui-checkbox-border-color-checked: ${({ theme }: IThemeProps) =>
      theme.myColorQuaternary};
    --my-ui-toggle-background: ${({ theme }: IThemeProps) =>
      theme.toggleBackground};
    --my-ui-toggle-handle-background: ${({ theme }: IThemeProps) =>
      theme.toggleHandleBackground};
    --my-ui-toggle-background-checked: ${({ theme }: IThemeProps) =>
      theme.toggleBackgroundChecked};
    --my-ui-toggle-handle-background-checked: ${({ theme }: IThemeProps) =>
      theme.toggleHandleBackgroundChecked};
    --my-ui-list-background: ${({ theme }: IThemeProps) => theme.body};
    --my-ui-item-background: ${({ theme }: IThemeProps) => theme.body};
    --my-ui-item-border-color: ${({ theme }: IThemeProps) =>
      theme.myColorSenary};
    --my-ui-item-highlight-background: ${({ theme }: IThemeProps) =>
      theme.myColorSecondary};
    --my-ui-info-box-shadow-color: ${({ theme }: IThemeProps) =>
      theme.myColorSeptenary};
    --my-ui-info-color: ${({ theme }: IThemeProps) => theme.myColorSeptenary};
    --my-ui-info-background: ${({ theme }: IThemeProps) => theme.body}; 
    --my-ui-label-color: ${({ theme }: IThemeProps) => theme.text};
    --my-ui-select-color: ${({ theme }: IThemeProps) => theme.text};
    --my-ui-fab-button-background-hover: ${({ theme }: IThemeProps) =>
      theme.fabButtonBackgroundHover};
  }

  a {
    color: var(--my-color-text);
  }

  // TODO find anothet solution to change color in input clear icon
  .input-clear-icon.sc-ion-input-md {
    background-image: url("data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><polygon%20fill='${({
      theme,
    }: IThemeProps) =>
      theme.text}'%20points='405,136.798%20375.202,107%20256,226.202%20136.798,107%20107,136.798%20226.202,256%20107,375.202%20136.798,405%20256,285.798%20375.202,405%20405,375.202%20285.798,256'/></svg>");
  }
`
