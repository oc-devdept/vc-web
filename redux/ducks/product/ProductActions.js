import * as types from "./ProductTypes";

// TEMPORARY: Update selected model
export const selectedProductModel = e => ({
  type: types.SELECTED_PRODUCT_MODEL,
  payload: e
})

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

// Retrieve data of selected grade
export const getProductGradeData = e => ({
  type: types.GET_PRODUCT_GRADE_DATA,
  payload: e
})

export const getProductGradeDataSuccess = e => ({
  type: types.GET_PRODUCT_GRADE_DATA_SUCCESS,
  payload: e
})

export const getProductGradeDataFailure = e => ({
  type: types.GET_PRODUCT_GRADE_DATA_FAILURE,
  payload: e
})

// Update selected exterior
export const selectedProductExterior = e => ({
  type: types.SELECTED_PRODUCT_EXTERIOR,
  payload: e
})

// Update selected interior
export const selectedProductInterior = e => ({
  type: types.SELECTED_PRODUCT_INTERIOR,
  payload: e
})

// Update selected rims
export const selectedProductRims = e => ({
  type: types.SELECTED_PRODUCT_RIMS,
  payload: e
})

// Update selected accessories
export const selectedProductAccessories = e => ({
  type: types.SELECTED_PRODUCT_ACCESSORIES,
  payload: e
})