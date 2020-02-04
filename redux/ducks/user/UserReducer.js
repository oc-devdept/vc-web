import * as types from "./UserTypes"
import api from 'Api'

import { NotificationManager } from "react-notifications";


const INIT_STATE = {
  user: null,
  accessToken: null,
  profile: null
}

export default (state = INIT_STATE, action) => {
  switch(action.type){
    case types.SAVE_ACCESS_TOKEN_SUCCESS:
      const {id, ttl, userId} = action.payload

      api.AuthorizationHeader(id)

      return {
        ...state,
        user : userId,
        accessToken: id
      }

    case types.SAVE_ACCESS_TOKEN_FAILURE:
        return {
          ...state,
        }

    case types.LOGOUT_ACCOUNT_SUCCESS:
    
          api.clearToken()

          NotificationManager.success("You've logged out successfully");

          return {
            ...state,
            user: null,
            accessToken: null
          }

    case types.LOGOUT_ACCOUNT_FAILURE:
          return {
            ...state,
          }
        
    case types.RETRIEVE_USER_PROFILE_SUCCESS:

          return {
            ...state,
            profile: action.payload
          }

 
    case types.RETRIEVE_USER_PROFILE_FAILURE:

          return {
            ...state,
            user: null,
            accessToken: null
          }
                    
    default:
      return {...state}
  }
}