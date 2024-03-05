import * as a from './actionTypes'

const initialState = []

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.ADD_PRODUCT:
      return [...state, action.payload]
    default:
      return state
  }
}

export default productReducer
