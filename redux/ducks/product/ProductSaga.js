import { 
  all, 
  call, 
  fork, 
  put, 
  takeEvery, 
  takeLatest, 
  select, 
  delay 
} from "redux-saga/effects"

import * as types from "./ProductTypes"
import * as actions from "./ProductActions"
import api from "Api"

//=========================
// REQUESTS
//=========================
const getProductGradesRequest = async(payload) => {
  // console.log("in ProductSaga.js getProductGradesRequest")
  // console.log("payload= ", payload)
  const data = await api.get(`/products/specificGrades/${payload.payload}`)
  // console.log("data= ", data)
  return data
}

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* getProductGrades(e) {
  // console.log("in ProductSaga.js getProductGrades")
  try {
    const data = yield call(getProductGradesRequest, e)
    // console.log("last step, data= ", data)
    yield put(actions.getProductGradesSuccess(data))
  } catch (error) {
    yield put(actions.getProductGradesFailure(data))
    console.log("Error!")
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* getProductGradesWatcher() {
  yield takeEvery(types.GET_PRODUCT_GRADES, getProductGrades)
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* productSaga() {
  yield all([
    fork(getProductGradesWatcher),
  ])
}
