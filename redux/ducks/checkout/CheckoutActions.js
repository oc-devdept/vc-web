import * as types from "./CheckoutTypes";

// Get data of configured product
export const getCheckoutData = e => ({
  type: types.GET_CHECKOUT_DATA,
  payload: e
});
