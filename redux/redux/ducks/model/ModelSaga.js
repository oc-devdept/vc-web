import { 
  all, 
  call, 
  fork, 
  put, 
  takeEvery,
} from "redux-saga/effects"

import * as types from "./ModelTypes"
import * as actions from "./ModelActions"
import api from "Api"

//=========================
// REQUESTS
//=========================
const getModelDataRequest = async(payload) => {
  const data = await api.get(`/categories/${payload.payload}`)
  return data
}

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* getModelData(e) {
  try {
    const data = yield call(getModelDataRequest, e)
    yield put(actions.getModelDataSuccess(data))
  } catch (error) {
    yield put(actions.getModelDataFailure(data))
    console.log("Error!")
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* getModelDataWatcher() {
  yield takeEvery(types.GET_MODEL_DATA, getModelData)
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* ModelSaga() {
  yield all([
    fork(getModelDataWatcher),
  ])
}
