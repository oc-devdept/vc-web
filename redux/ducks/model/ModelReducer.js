import * as types from "./ModelTypes"

const INIT_STATE = {
  ModelData: {
    id: null,
    name: null,
    ProductGradeData: { }
  },
}

export default (state = INIT_STATE, action) => {
  // console.log("redux state= ", state)
  switch(action.type){

    case types.GET_MODEL_DATA:
      return {
        ...state
      }
    
    case types.GET_MODEL_DATA_SUCCESS:
      const { data } = action.payload
      return {
        id: data.id,
        name: data.name,
        ProductGradeData: data
      }

    case types.GET_MODEL_DATA_FAILURE:
      return {
        ...state
      }
    
    // case types.SELECTED_PRODUCT_GRADE:
    //   const id = action.payload
    //   const { fields } = state.productGrade.data
    //   const object = fields.find(element => element.id === id)

    //   return {
    //     ...state,
    //     productGrade: {
    //       ...state.productGrade,
    //       id: object.id,
    //       name: object.name,
    //       price: object.selling_Price
    //     }
    //   }

    // case types.GET_PRODUCT_GRADE_DATA:
    //   return {
    //     ...state
    //   }

    // case types.GET_PRODUCT_GRADE_DATA_SUCCESS:
    //   let accessoriesIdList = { }
    //   const populateAccessoriesIds = action => {
    //     action.payload.accessoriesData.data.fields.map(item => {
    //       Object.values(item).map(key => {
    //         key.map(item => {
    //           accessoriesIdList[item.id] = false
    //         })
    //       })
    //     })
    //   }
    //   populateAccessoriesIds(action)

    //   return {
    //     ...state,
    //     productExterior: {
    //       ...state.productExterior,
    //       data: action.payload.exteriorData.data
    //     },
    //     productInterior: {
    //       ...state.productInterior,
    //       data: action.payload.interiorData.data
    //     },
    //     productRims: {
    //       ...state.productInterior,
    //       data: action.payload.interiorData.data
    //     },
    //     productAccessories: {
    //       selectedIds: accessoriesIdList,
    //       data: action.payload.accessoriesData.data
    //     }
    //   }

    // case types.GET_PRODUCT_GRADE_DATA_FAILURE:
    //   return {
    //     ...state
    //   }

    // case types.SELECTED_PRODUCT_EXTERIOR:
    //   return {
    //     ...state,
    //     productExterior: {
    //       ...state.productExterior,
    //       id: action.payload
    //     }
    //   }

    // case types.SELECTED_PRODUCT_INTERIOR:
    //   return {
    //     ...state,
    //     productInterior: {
    //       ...state.productInterior,
    //       id: action.payload
    //     }
    //   }

    // case types.SELECTED_PRODUCT_RIMS:
    //   return {
    //     ...state,
    //     productRims: {
    //       ...state.productRims,
    //       id: action.payload
    //     }
    //   }

    // case types.SELECTED_PRODUCT_ACCESSORIES:
    //   const newValue = !state.productAccessories.selectedIds[action.payload]
    //   return {
    //     ...state,
    //     productAccessories: {
    //       ...state.productAccessories,
    //       selectedIds: {
    //         ...state.productAccessories.selectedIds,
    //         [action.payload]: newValue
    //       }
    //     }
    //   }

    default:
      return {...state}
  }
}