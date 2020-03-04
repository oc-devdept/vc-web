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
