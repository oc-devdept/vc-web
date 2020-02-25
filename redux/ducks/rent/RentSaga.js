import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import * as types from "./RentTypes";
import * as actions from "./RentActions";
import api from "Api";

import data from "../../../assets/data/data.json";

//=========================
// REQUESTS
//=========================
const getSearchRequest = async payload => {
  // const result = await api.get(`/categories/${payload.payload}`);
  const result = data;
  return result.data;
};

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* getSearch(e) {
  try {
    const data = yield call(getSearchRequest, e);
    yield put(actions.getSearchSuccess(data));
  } catch (error) {
    yield put(actions.getSearchFailure(data));
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* getSearchWatcher() {
  yield takeEvery(types.GET_SEARCH, getSearch);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* RentSaga() {
  yield all([fork(getSearchWatcher)]);
}
