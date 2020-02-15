import { RouteComponentProps } from "react-router";

interface IProductParams {
  id: string;
}

export interface IProductProps extends RouteComponentProps<IProductParams> {
}

export interface IProduct {
  id: string
  name: string
  quantity: string
  toBuy: boolean
  isSelected: boolean
}

export interface IProductControllerProps {
  product: IProduct | undefined
  apply: (product: IProduct) => void
  setIsSortedProducts: (value: React.SetStateAction<boolean>) => void
  close: () => void
}

export interface IValidationResponse {
  error: boolean
  message?: string
}
