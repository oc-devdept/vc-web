import * as types from "./ProductTypes"

const INIT_STATE = {
  productModelId: null,
  productGradeId: null,
  productExteriorId: null,
  productInteriorId: null,
  productRimsId: null,
  productOptionsId: []
}

export default (state = INIT_STATE, action) => {
  switch(action.type){
    case types.GET_PRODUCT_GRADES:
      return {
        ...state,
      }
    
    case types.GET_PRODUCT_GRADES_SUCCESS:
      return {
        ...state,
        data: action.payload.data
      }

    case types.GET_PRODUCT_GRADES_FAILURE:
      return {
        ...state
      }
    
    case types.SELECTED_PRODUCT_GRADE:
      console.log("payload= ", action.payload)
      return {
        ...state,
        productGradeId: action.payload
      }

    case types.GET_EXTERIOR_LIST:
      return {
        ...state
      }

    case types.GET_EXTERIOR_LIST_SUCCESS:
      return {
        ...state
      }

    case types.GET_EXTERIOR_LIST_FAILURE:
      return {
        ...state
      }

    case types.GET_INTERIOR_LIST:
      return {
        ...state
      }

    case types.GET_INTERIOR_LIST_SUCCESS:
      return {
        ...state
      }

    case types.GET_INTERIOR_LIST_FAILURE:
      return {
        ...state
      }

    case types.GET_PRODUCT_OPTIONS:
      return {
        ...state
      }

    case types.GET_PRODUCT_OPTIONS_SUCCESS:
      return {
        ...state
      }

    case types.GET_PRODUCT_OPTIONS_FAILURE:
      return {
        ...state
      }

    default:
      return {...state}
  }
}