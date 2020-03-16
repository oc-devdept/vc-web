import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import * as types from "./CheckoutTypes";
import * as actions from "./CheckoutActions";
import api from "Api";

//=========================
// REQUESTS
//=========================
const doCheckoutRequest = async payload => {
  console.log("================");
  console.log(payload);
  const result = await api.post(`/ShoppingCarts/checkout`, payload);
  return result.data;
};

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* doCheckout({ payload }) {
  try {
    const data = yield call(doCheckoutRequest, payload);
    yield put(actions.doCheckoutSuccess(data));
  } catch (error) {
    yield put(actions.doCheckoutFailure(error));
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* doCheckoutWatcher() {
  yield takeEvery(types.DO_CHECKOUT, doCheckout);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* ModelSaga() {
  yield all([fork(doCheckoutWatcher)]);
}
