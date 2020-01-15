import * as types from "./ProductTypes"

const INIT_STATE = {
  productModelId: null,
  productGrade: {
    id: null,
    data: { }
  },
  productExterior: {
    id: null,
    data: { }
  },
  productInterior: {
    id: null,
    data: { }
  },
  productRims: {
    id: null,
    data: { }
  },
  productAccessories: {
    selectedIds: [ ],
    data: { }
  }
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
        productGrade: {
          ...state.productGrade,
          data: action.payload.data
        }
      }

    case types.GET_PRODUCT_GRADES_FAILURE:
      return {
        ...state
      }
    
    case types.SELECTED_PRODUCT_GRADE:
      return {
        ...state,
        productGrade: {
          ...state.productGrade,
          id: action.payload
        }
      }

    case types.GET_PRODUCT_GRADE_DATA:
      return {
        ...state
      }

    case types.GET_PRODUCT_GRADE_DATA_SUCCESS:
      console.log("redux state= ", state)
      console.log("redux action= ", action)
      return {
        ...state,
        productExterior: {
          ...state.productExterior,
          data: action.payload.exteriorData.data
        },
        productInterior: {
          ...state.productInterior,
          data: action.payload.interiorData.data
        },
        productRims: {
          ...state.productInterior,
          data: action.payload.interiorData.data
        },
        productAccessories: {
          ...state.productAccessories,
          data: action.payload.accessoriesData.data
        }
      }

    case types.GET_PRODUCT_GRADE_DATA_FAILURE:
      return {
        ...state
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

    case types.SELECTED_PRODUCT_EXTERIOR:
      return {
        ...state,
        productExteriorId: action.payload
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