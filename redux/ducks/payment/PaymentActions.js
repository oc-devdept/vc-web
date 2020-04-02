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

export const getPayment = data => ({
  type: types.GET_PAYMENT,
  payload: data
});

export const getPaymentSuccess = data => ({
  type: types.GET_PAYMENT_SUCCESS,
  payload: data
});

export const getPaymentFailure = error => ({
  type: types.GET_PAYMENT_FAILURE,
  payload: error
});

export const clearPayment = () => ({
  type: types.CLEAR_PAYMENT
});
