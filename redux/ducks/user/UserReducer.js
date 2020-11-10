import * as types from "./UserTypes";
import cookie from "js-cookie";

import { NotificationManager } from "react-notifications";

const INIT_STATE = {
  profile: null,
  customerId: null,
  loading: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_ACCOUNT:
      return {
        ...state,
        loading: true
      };

    case types.LOGIN_ACCOUNT_SUCCESS:
      NotificationManager.success("You've successfully logged in");
      cookie.set("user-email", action.payload.email, {expires: action.payload.expires});
      return { ...state, loading: false };

    case types.LOGIN_ACCOUNT_FAILURE:
      console.log(action.payload);
      NotificationManager.error("Error in logging in");
      return {
        ...state,
        loading: false
      };

    case types.LOGOUT_ACCOUNT_SUCCESS:
      NotificationManager.success("You've logged out successfully");
      return {
        ...state,
        ...INIT_STATE
      };
    case types.LOGOUT_ACCOUNT_FAILURE:
      return {
        ...state
      };

    case types.RETRIEVE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        customerId: action.payload.id,
        loading: false
      };

    case types.RETRIEVE_USER_PROFILE_FAILURE:
      return {
        ...state,
        ...INIT_STATE
      };

    case types.UPDATE_USER_PROFILE_SUCCESS:
      let profile = JSON.parse(JSON.stringify(state.profile));

      profile = action.payload;
      NotificationManager.success("Your profile has been successfully updated");
      return {
        ...state,
        profile: profile
      };

    case types.UPDATE_USER_PROFILE_FAILURE:
      return {
        ...state
        // ...INIT_STATE
      };

    default:
      return { ...state };
  }
};
