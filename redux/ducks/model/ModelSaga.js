import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import * as types from "./ModelTypes";
import * as actions from "./ModelActions";
import api from "Api";

//=========================
// REQUESTS
//=========================
const getModelDataRequest = async payload => {
  let result = await api.get(`/carpages/getSingleCarDataForCategory/?id=${payload.payload}`);
  // const result = await api.get(`/categories/${payload.payload}`);
  return result.data.data;
};

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* getModelData(e) {
  try {
    const data = yield call(getModelDataRequest, e);
    if (data != "no data") {
      yield put(actions.getModelDataSuccess(data));
    } else {
      
      yield put(actions.getModelDataFailure("There is no car data!"));
    }
  } catch (error) {
    yield put(actions.getModelDataFailure(error));
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* getModelDataWatcher() {
  yield takeEvery(types.GET_MODEL_DATA, getModelData);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* ModelSaga() {
  yield all([fork(getModelDataWatcher)]);
}
