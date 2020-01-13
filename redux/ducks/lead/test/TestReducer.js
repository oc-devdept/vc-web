import * as types from "./TestTypes";

const INIT_STATE = {
  ProductOption:{},
  ProductState: {
    Test:'Hello World'
  }
};


export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case types.GET_PRODUCT_LIST_SUCCESS:
      
        let ProductState = {...state.ProductState}

        ProductState.Test = action.payload

        return {
          ...state,
          ProductState
        };

    case types.GET_PRODUCT_LIST_FAILURE:
      return {
        ...state,
      };
   
    default:
      return { ...state };
  }
};
