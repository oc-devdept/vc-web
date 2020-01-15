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
    selectedIds: { },
    data: { }
  }
}

export default (state = INIT_STATE, action) => {
  // console.log("redux state= ", state)
  switch(action.type){
    
    // TEMPORARY
    case types.SELECTED_PRODUCT_MODEL:
      return {
        ...state
      }

    case types.GET_PRODUCT_GRADES:
      return {
        ...state
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
      let accessoriesIdList = { }
      const populateAccessoriesIds = action => {
        action.payload.accessoriesData.data.fields.map(item => {
          Object.values(item).map(key => {
            key.map(item => {
              accessoriesIdList[item.id] = false
            })
          })
        })
      }
      populateAccessoriesIds(action)

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
          selectedIds: accessoriesIdList,
          data: action.payload.accessoriesData.data
        }
      }

    case types.GET_PRODUCT_GRADE_DATA_FAILURE:
      return {
        ...state
      }

    case types.SELECTED_PRODUCT_EXTERIOR:
      return {
        ...state,
        productExterior: {
          ...state.productExterior,
          id: action.payload
        }
      }

    case types.SELECTED_PRODUCT_INTERIOR:
      return {
        ...state,
        productInterior: {
          ...state.productInterior,
          id: action.payload
        }
      }

    case types.SELECTED_PRODUCT_RIMS:
      return {
        ...state,
        productRims: {
          ...state.productRims,
          id: action.payload
        }
      }

    case types.SELECTED_PRODUCT_ACCESSORIES:
      const newValue = !state.productAccessories.selectedIds[action.payload]
      return {
        ...state,
        productAccessories: {
          ...state.productAccessories,
          selectedIds: {
            ...state.productAccessories.selectedIds,
            [action.payload]: newValue
          }
        }
      }

    default:
      return {...state}
  }
}