import * as types from "./ModelTypes";

// Get grades of selected model
export const getModelData = e => ({
  type: types.GET_MODEL_DATA,
  payload: e
})

export const getModelDataSuccess = e => ({
  type: types.GET_MODEL_DATA_SUCCESS,
  payload: e
})

export const getModelDataFailure = e => ({
  type: types.GET_MODEL_DATA_FAILURE,
  payload: e
})