export interface IConfirmDeletionDialog {
  isOpen: boolean
  cancelFn: () => void
  okFn: () => void
}
