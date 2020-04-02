import * as types from "./CheckoutTypes";

// Get data of configured product
export const getCheckoutData = e => ({
  type: types.GET_CHECKOUT_DATA,
  payload: e
});

export const doCheckout = ({
  productVariance,
  productAccessories,
  productGradeId,
  subtotal,
  gst,
  total
}) => ({
  type: types.DO_CHECKOUT,
  payload: {
    productVariance,
    productAccessories,
    productGradeId,
    subtotal,
    gst,
    total
  }
});

export const doCheckoutSuccess = data => ({
  type: types.DO_CHECKOUT_SUCCESS,
  payload: data
});
export const doCheckoutFailure = error => ({
  type: types.DO_CHECKOUT_FAILURE,
  payload: error
});

export const saveCheckout = data => ({
  type: types.SAVE_CHECKOUT,
  payload: data
});
export const getCheckout = () => ({
  type: types.GET_CHECKOUT
});

// export const updateSelectedExterior = data => ({
//   type: types.UPDATE_SELECTED_EXTERIOR,
//   payload: data
// });
