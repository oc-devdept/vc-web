/**
 * Root Sagas
 */
import { all } from "redux-saga/effects";

// import Sagas
import { LayoutSaga } from "Ducks/layout";
import { ProductSaga } from "Ducks/product";
import { ModelSaga } from "Ducks/model";
import { UserSaga } from "Ducks/user";
import { RentSaga } from "Ducks/rent";

export default function* rootSaga() {
  yield all([LayoutSaga(), ProductSaga(), ModelSaga(), UserSaga(), RentSaga()]);
}
