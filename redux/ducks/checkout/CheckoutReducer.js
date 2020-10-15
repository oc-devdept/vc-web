import * as types from "./CheckoutTypes";

let localCart;

if (typeof window !== "undefined") {
  localCart = JSON.parse(localStorage.getItem("vc-shoppingcart"));
}

const INIT_STATE = localCart
  ? localCart
  : {      
      subtotal: 0,
      misc: 0,
      gst: 0,
      total: 0
    };

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.GET_CHECKOUT_DATA:
    case types.SAVE_CHECKOUT:
      const {
        ProductGrade,
        ProductExterior,
        ProductInterior,
        ProductRims,
        ProductAccessories,
        CoeSelected,
        AftersaleSelected,
        ProductTotal
      } = action.payload;

      // Mapping of selected exterior/interior into productVariance[]
     //var productVariance = [];
     let returnData = {
      ProductGrade: ProductGrade,
      ProductExterior: ProductExterior.selected,
      ProductInterior: ProductInterior.selected,
      ProductRims: ProductRims.selected,
      ProductAccessories: ProductAccessories.selected,
      CoeSelected: CoeSelected,
      AftersaleSelected: AftersaleSelected,
      subtotal: ProductTotal.subtotal,
      misc: ProductTotal.misc,
      gst: ProductTotal.gst,
      total: ProductTotal.total
     }
     if(action.type == types.SAVE_CHECKOUT){
      localStorage.setItem("vc-shoppingcart", JSON.stringify(returnData));
     }
      
      return returnData;

    case types.GET_CHECKOUT:
      const checkout = JSON.parse(localStorage.getItem("vc-shoppingcart"));
      return { ...checkout };

    case types.DO_CHECKOUT_SUCCESS:
      localStorage.removeItem("vc-shoppingcart");
      return INIT_STATE;

    case types.DO_CHECKOUT_FAILURE:
      console.log("DoCheckout failure");
      return { ...state };

    default:
      return { ...state };
  }
};
