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
