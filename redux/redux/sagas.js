/**
 * Root Sagas
 */
import { all } from "redux-saga/effects"

// import Sagas
import { ProductSaga } from "Ducks/product"
import { ModelSaga } from "Ducks/model"

export default function* rootSaga() {
  yield all([
    ProductSaga(),
    ModelSaga(),
  ])
}