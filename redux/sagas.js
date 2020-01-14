/**
 * Root Sagas
 */
import { all } from "redux-saga/effects"

// import Sagas
import { ProductSaga } from "Ducks/product"

export default function* rootSaga() {
  yield all([
    ProductSaga()
  ])
}