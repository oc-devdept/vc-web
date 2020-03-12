import * as types from "./RentTypes";

// Get search parameters
export const getSearch = e => ({
  type: types.GET_SEARCH,
  payload: e
});

export const getSearchSuccess = e => ({
  type: types.GET_SEARCH_SUCCESS,
  payload: e
});

export const getSearchFailure = e => ({
  type: types.GET_SEARCH_FAILURE,
  payload: e
});

// Get categories list
export const getCategories = e => ({
  type: types.GET_CATEGORIES,
  payload: e
});

export const getCategoriesSuccess = e => ({
  type: types.GET_CATEGORIES_SUCCESS,
  payload: e
});

export const getCategoriesFailure = e => ({
  type: types.GET_CATEGORIES_FAILURE,
  payload: e
});

// Update selected vehicle
export const updateSelectedVehicle = e => ({
  type: types.UPDATE_SELECTED_VEHICLE,
  payload: e
});

// Update extra options
export const updateExtraOptions = e => ({
  type: types.UPDATE_EXTRA_OPTIONS,
  payload: e
});

// Update price breakdown
export const updatePrice = e => ({
  type: types.UPDATE_PRICE,
  payload: e
});
