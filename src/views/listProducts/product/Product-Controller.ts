import { useState, useEffect } from 'react'

export function useProductController(idListProducts: string, id: string) {
  const [isNew, setIsNew] = useState<boolean>(false)

  useEffect(() => {
    if (!!idListProducts && !id) {
      setIsNew(true)
    }
  }, [idListProducts, id])

  return { isNew }
}
