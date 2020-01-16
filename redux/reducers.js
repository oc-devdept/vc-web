/**
 * App Reducers
 */
import { combineReducers } from "redux"

import { ProductReducer } from "Ducks/product"
import { UserReducer } from "Ducks/user"

const reducers = combineReducers({
  ProductState: ProductReducer,
  UserState: UserReducer
})

export default reducers