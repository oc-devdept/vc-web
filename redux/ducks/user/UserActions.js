import * as types from "./UserTypes";

// Login
export const handleAccountLogin = e => ({
  type: types.LOGIN_ACCOUNT,
  payload: e
});
export const handleAccountLogin_success = e => ({
  type: types.LOGIN_ACCOUNT_SUCCESS,
  payload: e
});
export const handleAccountLogin_failure = e => ({
  type: types.LOGIN_ACCOUNT_FAILURE,
  payload: e
});

// Logout
export const handleAccountLogout = e => ({
  type: types.LOGOUT_ACCOUNT,
  payload: e
});
export const handleAccountLogout_success = e => ({
  type: types.LOGOUT_ACCOUNT_SUCCESS,
  payload: e
});
export const handleAccountLogout_failure = e => ({
  type: types.LOGOUT_ACCOUNT_FAILURE,
  payload: e
});

// Retrieve user profile
export const retrieveUserProfile = () => ({
  type: types.RETRIEVE_USER_PROFILE
});
export const retrieveUserProfileSuccess = e => ({
  type: types.RETRIEVE_USER_PROFILE_SUCCESS,
  payload: e
});
export const retrieveUserProfileFailure = e => ({
  type: types.RETRIEVE_USER_PROFILE_FAILURE,
  payload: e
});

// Update user profile
export const updateUserProfile = e => ({
  type: types.UPDATE_USER_PROFILE,
  payload: e
});
export const updateUserProfileSuccess = e => ({
  type: types.UPDATE_USER_PROFILE_SUCCESS,
  payload: e
});
export const updateUserProfileFailure = e => ({
  type: types.UPDATE_USER_PROFILE_FAILURE,
  payload: e
});

// Checkout Login
export const handleCheckoutLogin = e => ({
  type: types.CHECKOUT_LOGIN,
  payload: e
});
