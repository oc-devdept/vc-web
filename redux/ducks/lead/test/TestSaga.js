import { all, call, fork, put, takeEvery, delay } from "redux-saga/effects";

import * as types from "./TestTypes";

import * as actions from "./TestActions";

import api from "Api";

//=========================
// REQUESTS
//=========================
const GET_PRODUCT_LIST_Request = async ({payload}) => {

  // API CALL HERE
  
  return payload
};

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* GET_PRODUCT_LIST_FROM_DB(e) {
  try {
    const data = yield call(GET_PRODUCT_LIST_Request, e);
    yield put(actions.getProductList_Success(data));
  } catch (error) {
    yield put(actions.getProductList_Failure(data));
    console.log('Error!')
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* GET_PRODUCT_LIST_Watcher() {
  yield takeEvery(types.GET_PRODUCT_LIST, GET_PRODUCT_LIST_FROM_DB);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([fork(GET_PRODUCT_LIST_Watcher)]);
}
