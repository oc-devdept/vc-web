import * as types from "./pdtTypes";


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

//exterior
export const getExteriorList = e => ({
    type: types.GET_EXTERIOR_LIST,
    payload: e
  });
  
  export const getExteriorList_Success = e => ({
    type: types.GET_EXTERIOR_LIST_SUCCESS,
    payload: e
  });
  
  export const getExteriorList_Failure = e => ({
    type: types.GET_EXTERIOR_LIST_FAILURE,
    payload: e
  });
  