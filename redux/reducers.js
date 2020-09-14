/**
 * App Reducers
 */
import { combineReducers } from "redux";

import { LayoutReducer } from "Ducks/layout";
import { ProductReducer } from "Ducks/product";
import { ModelReducer } from "Ducks/model";
import { UserReducer } from "Ducks/user";
import { CheckoutReducer } from "Ducks/checkout";
import { RentReducer } from "Ducks/rent";
import { PaymentReducer } from "Ducks/payment";
import { BannerReducer } from "Ducks/homepage";

const reducers = combineReducers({
  LayoutState: LayoutReducer,
  ProductState: ProductReducer,
  ModelState: ModelReducer,
  UserState: UserReducer,
  CheckoutState: CheckoutReducer,
  RentState: RentReducer,
  PaymentState: PaymentReducer,
  HomeState: combineReducers({
    BannerState: BannerReducer
  })
});

export default reducers;
