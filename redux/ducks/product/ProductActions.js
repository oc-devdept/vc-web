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
export const selectedProductAccessories = (variance, selectedIds) => ({
  type: types.SELECTED_PRODUCT_ACCESSORIES,
  payload: { variance, selectedIds }
});

//update coe selected
export const selectedCoePackage = e => ({
  type: types.SELECTED_COE_PACKAGE,
  payload: e
})
//update servicing package
export const selectedServicingPackage = e => ({
  type: types.SELECTED_AFTERSALES_PACKAGE,
  payload: e
});

// Update total price
export const updateProductTotal = e => { 
  return ({
  type: types.UPDATE_PRODUCT_TOTAL,
  payload: e
});
}

// Update loan calculator
export const updateLoanCalculator = e => ({
  type: types.UPDATE_LOAN_CALCULATOR,
  payload: e
});

// Generate PDF
export const printConfigurator = () => {
  return {
  type: types.PRINT_CONFIGURATOR
}};
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

export const getMakes = () => ({
  type: types.GET_ALL_MAKE
});
export const getMakeSuccess = data => ({
  type: types.GET_ALL_MAKE_SUCCESS,
  payload: data
});
export const getMakeFailure = error => ({
  type: types.GET_ALL_MAKE_FAILURE,
  payload: error
})

export const getTags = () => ({
  type: types.GET_ALL_TAGS
});
export const getTagsSuccess = data => ({
  type: types.GET_ALL_TAGS_SUCCESS,
  payload: data
});
export const getTagsFailure = error => ({
  type: types.GET_ALL_TAGS_FAILURE,
  payload: error
})

export const getAllCars = (limit, skip, filter, searchText, orderBy) => ({
  type: types.GET_ALL_CARS,
  payload: { limit, skip, filter, searchText, orderBy}
})
export const getAllCarsSuccess = data => ({
  type: types.GET_ALL_CARS_SUCCESS,
  payload: data
});
export const getAllCarsFailure = error => ({
  type: types.GET_ALL_CARS_FAILURE,
  payload: error
})

export const getAllConfig = () => ({
  type: types.GET_ALL_CONFIG
})
export const getAllConfigSuccess = (coe, servicing, warranty) => ({
  type: types.GET_ALL_CONFIG_SUCCESS,
  payload: { coe, servicing, warranty}
})
export const getAllConfigFailure = error => ({
  type: types.GET_ALL_CONFIG_FAILURE,
  payload: error
})