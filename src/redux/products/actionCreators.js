import * as a from './actionTypes'

export const addProducts = (newProduct) => {
  return {
    type: a.ADD_PRODUCT,
    payload: newProduct,
  }
}
