import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import * as types from "./PaymentTypes";
import * as actions from "./PaymentActions";
import api from "Api";

//=========================
// REQUESTS
//=========================
const createPaymentRequest = async () => {
  const result = await api.post(`/Stripes/createPayment`);
  return result.data;
};

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* createPayment() {
  try {
    const data = yield call(createPaymentRequest);
    yield put(actions.createPaymentSuccess(data));
  } catch (error) {
    yield put(actions.createPaymentFailure(error));
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* createPaymentWatcher() {
  yield takeEvery(types.CREATE_PAYMENT, createPayment);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* ModelSaga() {
  yield all([fork(createPaymentWatcher)]);
}
