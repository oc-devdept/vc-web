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

    default:
      return {...state}
  }
}