/**
 * App Reducers
 */
import { combineReducers } from "redux"

import { ProductReducer } from "Ducks/product"
import { ModelReducer } from "Ducks/model"
import { UserReducer } from "Ducks/user"

const reducers = combineReducers({
  ProductState: ProductReducer,
  ModelState: ModelReducer,
  UserState: UserReducer

})

export default reducers