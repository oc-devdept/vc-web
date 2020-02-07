import * as types from "./UserTypes";

// Retrieve grades of selected model
// export const saveAccessToken = e => ({
//   type: types.SAVE_ACCESS_TOKEN,
//   payload: e
// })

// export const saveAccessTokenSuccess = e => ({
//   type: types.SAVE_ACCESS_TOKEN_SUCCESS,
//   payload: e
// })

// export const saveAccessTokenFailure = e => ({
//   type: types.SAVE_ACCESS_TOKEN_FAILURE,
//   payload: e
// })

export const handleAccountLogin = e => ({
  type: types.LOGIN_ACCOUNT,
  payload: e
})

export const handleAccountLogin_success = e => ({
  type: types.LOGIN_ACCOUNT_SUCCESS,
  payload: e
})

export const handleAccountLogin_failure = e => ({
  type: types.LOGIN_ACCOUNT_FAILURE,
  payload: e
})



export const handleAccountLogout = e => ({
  type: types.LOGOUT_ACCOUNT,
  payload: e
})

export const handleAccountLogout_success = e => ({
  type: types.LOGOUT_ACCOUNT_SUCCESS,
  payload: e
})

export const handleAccountLogout_failure = e => ({
  type: types.LOGOUT_ACCOUNT_FAILURE,
  payload: e
})



export const retrieveUserProfile = e => ({
  type: types.RETRIEVE_USER_PROFILE,
  payload: e
})

export const retrieveUserProfileSuccess = e => ({
  type: types.RETRIEVE_USER_PROFILE_SUCCESS,
  payload: e
})

export const retrieveUserProfileFailure = e => ({
  type: types.RETRIEVE_USER_PROFILE_FAILURE,
  payload: e
})

