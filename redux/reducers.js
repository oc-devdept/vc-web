/**
 * App Reducers
 */
import { combineReducers } from "redux"

import { ProductReducer } from "Ducks/product"

const reducers = combineReducers({
  ProductState: ProductReducer
})

export default reducers