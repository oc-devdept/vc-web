/**
 * App Reducers
 */
import { combineReducers } from "redux";

import { LayoutReducer } from "Ducks/layout";
import { ProductReducer } from "Ducks/product";
import { ModelReducer } from "Ducks/model";
import { UserReducer } from "Ducks/user";
import { RentReducer } from "Ducks/rent";

const reducers = combineReducers({
  LayoutState: LayoutReducer,
  ProductState: ProductReducer,
  ModelState: ModelReducer,
  UserState: UserReducer,
  RentState: RentReducer
});

export default reducers;
