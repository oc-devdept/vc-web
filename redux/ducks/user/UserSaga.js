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

import * as types from "./UserTypes"
import * as actions from "./UserActions"
import api from "Api"

//=========================
// REQUESTS
//=========================

const userLoginRequest = async(e) => {
  const data = await api.post(`/basecustomerusers/login`, e.payload)
  return data
}

const userLogoutRequest = async(e) => {
  const data = await api.post(`/basecustomerusers/logout`)
  return data
}

const userProfileRequest = async(e) => {
  const result = await api.get(`/basecustomerusers/${e.payload}/customer`)
  return result.data
}


//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* userLogin(e) {
  try {
    const data = yield call(userLoginRequest, e)
    yield put(actions.handleAccountLogin_success(data))
  } catch (error) {
    yield put(actions.handleAccountLogin_failure(error))
  }
}

function* userLogout(e) {
  try {
    const data = yield call(userLogoutRequest, e)
    yield put(actions.handleAccountLogout_success(data))
  } catch (error) {
    yield put(actions.handleAccountLogout_failure(error))
  }
}

function* userProfile(e) {
  try {
    const data = yield call(userProfileRequest, e)
    yield put(actions.retrieveUserProfileSuccess(data))
  } catch (error) {
    console.log('userProfile Error')
    yield put(actions.retrieveUserProfileFailure(error))
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* userLoginWatcher() {
  yield takeEvery(types.LOGIN_ACCOUNT, userLogin)
}

export function* userLogoutWatcher() {
  yield takeEvery(types.LOGOUT_ACCOUNT, userLogout)
}

export function* retrieveUserProfileWatcher() {
  yield takeEvery(types.RETRIEVE_USER_PROFILE, userProfile)
}


//=======================
// FORK SAGAS TO STORE
//=======================
export default function* productSaga() {
  yield all([
    fork(userLoginWatcher),
    fork(userLogoutWatcher),
    fork(retrieveUserProfileWatcher),
  ])
}
