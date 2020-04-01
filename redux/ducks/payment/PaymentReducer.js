import * as types from "./PaymentTypes";

const INIT_STATE = {
  client_secret: ""
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.CREATE_PAYMENT:
      return { ...state };

    case types.CREATE_PAYMENT_SUCCESS:
      const { client_secret } = action.payload.result;
      return { ...state, client_secret: client_secret };

    case types.CREATE_PAYMENT_FAILURE:
      return { ...state };

    case types.CLEAR_PAYMENT:
      return { INIT_STATE };

    default:
      return { ...state };
  }
};
