/**
 * Root Sagas
 */
import { all } from "redux-saga/effects"

// import Sagas
import { ProductSaga } from "Ducks/product"
import { UserSaga } from "Ducks/user"

export default function* rootSaga() {
  yield all([
    ProductSaga(),
    UserSaga()
  ])
}