import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import * as types from "./RentTypes";
import * as actions from "./RentActions";
import api from "Api";

import searchResultsData from "../../../assets/data/data.json";
import categoriesData from "../../../assets/data/car-categories.json";

//=========================
// REQUESTS
//=========================
const getSearchRequest = async payload => {
  // const result = await api.get(`/categories/${payload.payload}`);
  const result = searchResultsData;
  return result.data;
};

const getCategoriesRequest = async () => {
  // const result = await api.get(`/categories/${payload.payload}`);
  const result = categoriesData;
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

function* getCategories(e) {
  try {
    const data = yield call(getCategoriesRequest, e);
    yield put(actions.getCategoriesSuccess(data));
  } catch (error) {
    yield put(actions.getCategoriesFailure(data));
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* getSearchWatcher() {
  yield takeEvery(types.GET_SEARCH, getSearch);
}

export function* getCategoriesWatcher() {
  yield takeEvery(types.GET_CATEGORIES, getCategories);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* RentSaga() {
  yield all([fork(getSearchWatcher), fork(getCategoriesWatcher)]);
}
