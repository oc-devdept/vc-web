/**
 * App Reducers
 */
import { combineReducers } from "redux"

import { ProductReducer } from "Ducks/product"
import { ModelReducer } from "Ducks/model"

const reducers = combineReducers({
  ProductState: ProductReducer,
  ModelState: ModelReducer
})

export default reducers