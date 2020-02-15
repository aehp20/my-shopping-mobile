import { IProduct } from './Product-Types';
import { IProductToUpdate } from './Products-Types';
import { useProductsContext } from './Products-Context';

export function useProductsController() {
  const { products, saveProducts, findProduct, verifyProduct, setIsSortedProducts } = useProductsContext()

  function updateProduct(product: IProductToUpdate) {
    let existingProduct = findProduct(product.id) as IProduct
    existingProduct = {...existingProduct, ...product}

    const existingProducts = products.map((item: IProduct) => {
      if (verifyProduct(item, existingProduct)) {
        return existingProduct
      }
      return item
    })

    saveProducts(existingProducts)
  }

  function deleteProduct(product: IProduct) {
    const filteredProducts = products.filter((item: IProduct) => !verifyProduct(item, product))

    saveProducts(filteredProducts)
  }

  function handleToBuyValue(event: any) {
    const item: IProductToUpdate = {
      id: event.target.id,
      toBuy: event.target.checked
    }

    if (event.target.value !== event.target.checked.toString()) {
      updateProduct(item)
      setIsSortedProducts(true)
    }
  }

  function handleSelectedProduct(event: any) {
    const item: IProductToUpdate = {
      id: event.target.id,
      isSelected: event.target.checked
    }

    if (event.target.value !== (event.target.checked ? 'true' : 'false')) {
      updateProduct(item)
    }
  }

  return {
    products,
    updateProduct,
    deleteProduct,
    handleToBuyValue,
    handleSelectedProduct,
  }
}
