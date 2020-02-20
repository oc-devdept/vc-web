import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import * as types from "./LayoutTypes";
import * as actions from "./LayoutActions";
import api from "Api";

//=========================
// REQUESTS
//=========================
const getMegaMenuRequest = async () => {
  const result = await api.get(`/categories/getMegaMenu`);
  return result.data.fields;
};

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* getMegaMenu() {
  try {
    const data = yield call(getMegaMenuRequest);
    yield put(actions.getMenuTabsSuccess(data));
  } catch (error) {
    yield put(actions.getMenuTabsFailure(data));
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* getMegaMenuWatcher() {
  yield takeEvery(types.GET_MENU_TABS, getMegaMenu);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* ModelSaga() {
  yield all([fork(getMegaMenuWatcher)]);
}
