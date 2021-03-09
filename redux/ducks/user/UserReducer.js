import * as types from "./UserTypes";
import cookie from "js-cookie";

import { NotificationManager } from "react-notifications";

const INIT_STATE = {
  profile: null,
  customerId: null,
  loading: false,
  errormsg: ""
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.LOGIN_ACCOUNT:
      return {
        ...state,
        loading: true,
        errormsg: ""
      };

    case types.LOGIN_ACCOUNT_SUCCESS:
      NotificationManager.success("You've successfully logged in");
      cookie.set("user-email", action.payload.email, {expires: action.payload.expires});
      return { ...state, loading: false };

    case types.LOGIN_ACCOUNT_FAILURE:
      let errormsg = "An error occured. Please try again.";
      if(action.payload.response){
        errormsg = action.payload.response.data.error.message;
        if(errormsg == "login failed"){
          errormsg = "Your email or password is incorrect. Please try again.";
        }
      }
      //NotificationManager.error("Error in logging in");
      return {
        ...state,
        loading: false,
        errormsg: errormsg
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
