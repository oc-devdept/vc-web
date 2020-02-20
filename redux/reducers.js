/**
 * App Reducers
 */
import { combineReducers } from "redux";

import { LayoutReducer } from "Ducks/layout";
import { ProductReducer } from "Ducks/product";
import { ModelReducer } from "Ducks/model";
import { UserReducer } from "Ducks/user";

const reducers = combineReducers({
  LayoutState: LayoutReducer,
  ProductState: ProductReducer,
  ModelState: ModelReducer,
  UserState: UserReducer
});

export default reducers;
