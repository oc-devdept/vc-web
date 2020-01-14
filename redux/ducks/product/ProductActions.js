import * as types from "./ProductTypes";

// Retrieve grades of selected model
export const getProductGrades = e => ({
  type: types.GET_PRODUCT_GRADES,
  payload: e
})

export const getProductGradesSuccess = e => ({
  type: types.GET_PRODUCT_GRADES_SUCCESS,
  payload: e
})

export const getProductGradesFailure = e => ({
  type: types.GET_PRODUCT_GRADES_FAILURE,
  payload: e
})

// Update selected grade
export const selectedProductGrade = e => ({
  type: types.SELECTED_PRODUCT_GRADE,
  payload: e
})

// Retrieve exterior product variants of a selected grade
export const getExteriorList = e => ({
  type: types.GET_EXTERIOR_LIST,
  payload: e
})

export const getExteriorListSuccess = e => ({
  type: types.GET_EXTERIOR_LIST_SUCCESS,
  payload: e
})

export const getExteriorListFailure = e => ({
  type: types.GET_EXTERIOR_LIST_FAILURE,
  payload: e
})

// Retrieve interior product variants of a selected grade
export const getInteriorList = e => ({
  type: types.GET_INTERIOR_LIST,
  payload: e
})

export const getInteriorListSuccess = e => ({
  type: types.GET_INTERIOR_LIST_SUCCESS,
  payload: e
})

export const getInteriorListFailure = e => ({
  type: types.GET_INTERIOR_LIST_FAILURE,
  payload: e
})

// Retrieve product options of a selected grade
export const getProductOptions = e => ({
  type: types.GET_PRODUCT_OPTIONS,
  payload: e
})

export const getProductOptionsSuccess = e => ({
  type: types.GET_PRODUCT_OPTIONS_SUCCESS,
  payload: e
})

export const getProductOptionsFailure = e => ({
  type: types.GET_PRODUCT_OPTIONS_FAILURE,
  payload: e
})