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
  const data = await api.get(`/products/specificGrades/${payload.payload}`)
  return data
}

const getProductGradeDataRequest = async(payload) => {
  const exteriorData = await api.get(`/products/specificVariantExterior/${payload.payload}`)
  const interiorData = await api.get(`/products/specificVariantInterior/${payload.payload}`)
  const accessoriesData = await api.get(`/products/specificGradeProductOption/${payload.payload}`)
  const data = {
    exteriorData: exteriorData,
    interiorData: interiorData,
    accessoriesData: accessoriesData
  }
  return data
}

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* getProductGrades(e) {
  try {
    const data = yield call(getProductGradesRequest, e)
    yield put(actions.getProductGradesSuccess(data))
  } catch (error) {
    yield put(actions.getProductGradesFailure(data))
    console.log("Error!")
  }
}

function* getProductGradeData(e) {
  try {
    const data = yield call(getProductGradeDataRequest, e)
    yield put(actions.getProductGradeDataSuccess(data))
  } catch (error) {
    yield put(actions.getProductGradeDataFailure(data))
    console.log("Error!")
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* getProductGradesWatcher() {
  yield takeEvery(types.GET_PRODUCT_GRADES, getProductGrades)
}

export function* getProductGradeDataWatcher() {
  yield takeEvery(types.GET_PRODUCT_GRADE_DATA, getProductGradeData)
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* productSaga() {
  yield all([
    fork(getProductGradesWatcher),
    fork(getProductGradeDataWatcher)
  ])
}
