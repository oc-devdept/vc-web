import * as types from "./UserTypes"
import api from 'Api'

import { NotificationManager } from "react-notifications";


const INIT_STATE = {
  userId: null,
  accessToken: null,
  profile: null,
  customerId: null
}

export default (state = INIT_STATE, action) => {
  switch(action.type){
    // case types.SAVE_ACCESS_TOKEN_SUCCESS:
      // const {id, ttl, userId} = action.payload
      // api.AuthorizationHeader(id)
      // return {
      //   ...state,
      //   user : userId,
      //   accessToken: id
      // }
    // case types.SAVE_ACCESS_TOKEN_FAILURE:
    //   return {
    //     ...state,
    //   }

    case types.LOGIN_ACCOUNT_SUCCESS:
      const {id, ttl, userId} = action.payload.data
      api.AuthorizationHeader(id)
      NotificationManager.success("You've successfully logged in");
      return {
        ...state,
        userId : userId,
        accessToken: id
      }

    case types.LOGIN_ACCOUNT_FAILURE:
      NotificationManager.error(action.payload.response.data.error.message);
      return {
        ...state,
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
        customerId: action.payload.customer.customerId
      }

 
    case types.RETRIEVE_USER_PROFILE_FAILURE:
      return {
        ...state,
        ...INIT_STATE
      }
                    
    default:
      return {...state}
  }
}