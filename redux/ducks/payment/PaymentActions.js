import * as types from "./PaymentTypes";

// Get data of configured product
export const createPayment = () => ({
  type: types.CREATE_PAYMENT
});

export const createPaymentSuccess = data => ({
  type: types.CREATE_PAYMENT_SUCCESS,
  payload: data
});
export const createPaymentFailure = error => ({
  type: types.CREATE_PAYMENT_FAILURE,
  payload: error
});

export const clearPayment = () => ({
  type: types.CLEAR_PAYMENT
});
