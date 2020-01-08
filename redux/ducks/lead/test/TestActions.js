import * as types from "./TestTypes";


export const getProductList = e => ({
  type: types.GET_PRODUCT_LIST,
  payload: e
});

export const getProductList_Success = e => ({
  type: types.GET_PRODUCT_LIST_SUCCESS,
  payload: e
});

export const getProductList_Failure = e => ({
  type: types.GET_PRODUCT_LIST_FAILURE,
  payload: e
});
