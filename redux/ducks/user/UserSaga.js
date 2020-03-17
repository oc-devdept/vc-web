import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import * as types from "./UserTypes";
import * as actions from "./UserActions";
import api from "Api";

import { ttlToDays } from "Components/Helpers/helpers";

// save cookies
import { login, logout } from "../../../utils/auth";

//=========================
// REQUESTS
//=========================

const userLoginRequest = async e => {
  const data = await api.post(`/basecustomerusers/login`, e.payload);
  return data.data;
};
const userLogoutRequest = async e => {
  const data = await api.post(`/basecustomerusers/logout`);
  return data;
};
const userProfileRequest = async e => {
  const result = await api.get(`/basecustomerusers/customer`);
  return result.data.customer;
};
const updateUserProfileRequest = async e => {
  const result = await api.post(`/basecustomerusers/updateContact`, {
    data: e.payload
  });
  return result.data.fields;
};

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* userLogin(e) {
  try {
    const data = yield call(userLoginRequest, e);
    login({ token: data.id, expires: ttlToDays(data.ttl) });
    yield put(actions.handleAccountLogin_success(data));
  } catch (error) {
    yield put(actions.handleAccountLogin_failure(error));
  }
}

function* userLogout(e) {
  try {
    const data = yield call(userLogoutRequest, e);
    logout();
    yield put(actions.handleAccountLogout_success(data));
  } catch (error) {
    yield put(actions.handleAccountLogout_failure(error));
  }
}

function* userProfile() {
  try {
    const data = yield call(userProfileRequest);
    yield put(actions.retrieveUserProfileSuccess(data));
  } catch (error) {
    yield put(actions.retrieveUserProfileFailure(error));
  }
}

function* updateUserProfile(e) {
  try {
    const data = yield call(updateUserProfileRequest, e);
    yield put(actions.updateUserProfileSuccess(data));
  } catch (error) {
    yield put(actions.updateUserProfileFailure(error));
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* userLoginWatcher() {
  yield takeEvery(types.LOGIN_ACCOUNT, userLogin);
}

export function* userLogoutWatcher() {
  yield takeEvery(types.LOGOUT_ACCOUNT, userLogout);
}

export function* retrieveUserProfileWatcher() {
  yield takeEvery(types.RETRIEVE_USER_PROFILE, userProfile);
}

export function* updateUserProfileWatcher() {
  yield takeEvery(types.UPDATE_USER_PROFILE, updateUserProfile);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* productSaga() {
  yield all([
    fork(userLoginWatcher),
    fork(userLogoutWatcher),
    fork(retrieveUserProfileWatcher),
    fork(updateUserProfileWatcher)
  ]);
}
