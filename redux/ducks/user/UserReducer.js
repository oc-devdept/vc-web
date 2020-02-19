import * as types from "./UserTypes"
import api from 'Api'

import { NotificationManager } from "react-notifications";


const INIT_STATE = {
  userId: null,
  accessToken: null,
  profile: null,
  customerId: null,
  loading: false
}

export default (state = INIT_STATE, action) => {
  switch(action.type){
   
    case types.LOGIN_ACCOUNT:
      return {
        ...state,
        loading: true
      }

    case types.LOGIN_ACCOUNT_SUCCESS:
      const {id, ttl, userId} = action.payload.data
      api.AuthorizationHeader(id)
      NotificationManager.success("You've successfully logged in");

      return {
        ...state,
        userId : userId,
        accessToken: id,
      }

    case types.LOGIN_ACCOUNT_FAILURE:
      NotificationManager.error(action.payload.response.data.error.message);
      return {
        ...state,
        loading: false
      }

    case types.LOGOUT_ACCOUNT_SUCCESS:
      api.clearToken()
      NotificationManager.success("You've logged out successfully");
      return {
        ...state,
        ...INIT_STATE
      }
    case types.LOGOUT_ACCOUNT_FAILURE:
      return {
        ...state,
      }
        
    case types.RETRIEVE_USER_PROFILE_SUCCESS:

      return {
        ...state,
        profile: action.payload,
        customerId: action.payload.customer.customerId,
        loading: false
      }

    case types.RETRIEVE_USER_PROFILE_FAILURE:
      return {
        ...state,
        ...INIT_STATE
      }

    case types.UPDATE_USER_PROFILE_SUCCESS:
      let profile = JSON.parse(JSON.stringify(state.profile)); 

      profile = action.payload
      NotificationManager.success("Your profile has been successfully updated");
      return {
        ...state,
        profile: profile
      }

    case types.UPDATE_USER_PROFILE_FAILURE:

      return {
        ...state,
        // ...INIT_STATE
      }
                    
    default:
      return {...state}
  }
}