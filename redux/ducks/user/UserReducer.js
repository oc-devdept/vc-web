import * as types from "./UserTypes"

import api from 'Api'

const INIT_STATE = {
  user: null,
  accessToken: null,
  profile: null
}

export default (state = INIT_STATE, action) => {
  switch(action.type){
    case types.SAVE_ACCESS_TOKEN_SUCCESS:
      const {id, ttl, userId} = action.payload

      api.interceptors.request.use(config => {
          config.headers = { Authorization: `${id}` };
          return config
      });

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
    
          api.interceptors.request.use(config => {
            config.headers = { Authorization: `` };
            return config
          });
    
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
          }

          
    default:
      return {...state}
  }
}