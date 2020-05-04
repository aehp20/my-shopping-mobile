export interface IProduct {
  id: string
  name: string
  quantity?: string
  description?: string
  isSelected?: boolean
  toBuy?: boolean
}

export interface IListProducts {
  id: string
  name: string
  products?: IProduct[]
}

export interface IRowProducts {
  row: IListProducts[]
}
