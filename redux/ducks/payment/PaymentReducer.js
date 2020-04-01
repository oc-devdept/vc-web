import * as types from "./PaymentTypes";

let paymentIntentId;

if (typeof window !== "undefined") {
  paymentIntentId = localStorage.getItem("stripe-paymentIntentId");
}

const INIT_STATE = !!paymentIntentId
  ? {
      paymentIntentId: paymentIntentId,
      client_secret: ""
    }
  : { paymentIntentId: "", client_secret: "" };

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.CREATE_PAYMENT:
      return { ...state };

    case types.CREATE_PAYMENT_SUCCESS:
      var { result } = action.payload;
      localStorage.setItem("stripe-paymentIntentId", result.id);
      return {
        ...state,
        paymentIntentId: result.id,
        client_secret: result.client_secret
      };

    case types.CREATE_PAYMENT_FAILURE:
      return { ...state };

    case types.GET_PAYMENT:
      const paymentIntentId = localStorage.getItem("stripe-paymentIntentId");
      return { ...state, paymentIntentId: paymentIntentId };

    case types.GET_PAYMENT_SUCCESS:
      var { result } = action.payload;
      return { ...state, client_secret: result.client_secret };

    case types.GET_PAYMENT_FAILURE:
      return { ...state };

    case types.CLEAR_PAYMENT:
      localStorage.removeItem("stripe-paymentIntentId");
      // removing of shopping cart should be done in doCheckout()?
      // localStorage.removeItem("vc-shoppingcart");
      return INIT_STATE;

    default:
      return { ...state };
  }
};
