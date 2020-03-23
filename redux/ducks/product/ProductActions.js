import * as types from "./ProductTypes";

// Get data of selected model
export const getProductModelData = e => ({
  type: types.GET_PRODUCT_MODEL_DATA,
  payload: e
});

export const getProductModelDataSuccess = e => ({
  type: types.GET_PRODUCT_MODEL_DATA_SUCCESS,
  payload: e
});

export const getProductModelDataFailure = e => ({
  type: types.GET_PRODUCT_MODEL_DATA_FAILURE,
  payload: e
});

// Get grades of selected model
export const getProductGrades = (modelId, gradeId) => ({
  type: types.GET_PRODUCT_GRADES,
  payload: { modelId, gradeId }
});

export const getProductGradesSuccess = e => ({
  type: types.GET_PRODUCT_GRADES_SUCCESS,
  payload: e
});

export const getProductGradesFailure = e => ({
  type: types.GET_PRODUCT_GRADES_FAILURE,
  payload: e
});

// Update selected grade
export const selectedProductGrade = e => ({
  type: types.SELECTED_PRODUCT_GRADE,
  payload: e
});

// Get data of selected grade
export const getProductGradeData = e => ({
  type: types.GET_PRODUCT_GRADE_DATA,
  payload: e
});

export const getProductGradeDataSuccess = e => ({
  type: types.GET_PRODUCT_GRADE_DATA_SUCCESS,
  payload: e
});

export const getProductGradeDataFailure = e => ({
  type: types.GET_PRODUCT_GRADE_DATA_FAILURE,
  payload: e
});

// Update selected exterior
export const selectedProductExterior = e => ({
  type: types.SELECTED_PRODUCT_EXTERIOR,
  payload: e
});

// Update selected interior
export const selectedProductInterior = e => ({
  type: types.SELECTED_PRODUCT_INTERIOR,
  payload: e
});

// Update selected rims
export const selectedProductRims = e => ({
  type: types.SELECTED_PRODUCT_RIMS,
  payload: e
});

// Update selected accessories
export const selectedProductAccessories = e => ({
  type: types.SELECTED_PRODUCT_ACCESSORIES,
  payload: e
});

// Update total price
export const updateProductTotal = e => ({
  type: types.UPDATE_PRODUCT_TOTAL,
  payload: e
});

// Update loan calculator
export const updateLoanCalculator = e => ({
  type: types.UPDATE_LOAN_CALCULATOR,
  payload: e
});

// Generate PDF
export const printConfigurator = () => ({
  type: types.PRINT_CONFIGURATOR
});
export const printConfiguratorSuccess = () => ({
  type: types.PRINT_CONFIGURATOR_SUCCESS
});
export const printConfiguratorFailure = e => ({
  type: types.PRINT_CONFIGURATOR_FAILURE,
  payload: e
});

// Featured Cars
export const getFeaturedCars = () => ({
  type: types.GET_FEATURED_CARS
});
export const getFeaturedCarsSuccess = data => ({
  type: types.GET_FEATURED_CARS_SUCCESS,
  payload: data
});
export const getFeaturedCarsFailure = error => ({
  type: types.GET_FEATURED_CARS_FAILURE,
  payload: error
});

// Get interest rate
export const getInterestRate = () => ({
  type: types.GET_INTEREST_RATE
});
export const getInterestRateSuccess = data => ({
  type: types.GET_INTEREST_RATE_SUCCESS,
  payload: data
});
export const getInterestRateFailure = error => ({
  type: types.GET_INTEREST_RATE_FAILURE,
  payload: error
});
