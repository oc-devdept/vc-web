import * as types from "./CheckoutTypes";

let localCart;

if (typeof window !== "undefined") {
  localCart = JSON.parse(localStorage.getItem("vc-shoppingcart"));
}

const INIT_STATE = localCart
  ? localCart
  : {
      productGradeId: "",
      productVariance: {},
      productAccessories: [],
      subtotal: 0,
      misc: 0,
      gst: 0,
      total: 0
    };

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.GET_CHECKOUT_DATA:
      const {
        ProductGrade,
        ProductExterior,
        ProductInterior,
        ProductAccessories,
        ProductTotal
      } = action.payload;

      // Mapping of selected exterior/interior into productVariance[]
      var productVariance = [];
      Object.values(ProductExterior.selected).map(item => {
        productVariance.push({
          id: item.id,
          name: item.name,
          price: item.price,
          thumbnail: item.thumbnail,
          stockId: item.stockId
        });
      });
      Object.values(ProductInterior.selected).map(item => {
        productVariance.push({
          id: item.id,
          name: item.name,
          price: item.price,
          thumbnail: item.thumbnail,
          stockId: item.stockId
        });
      });

      // Mapping of accessories into productAccessories[]
      let productAccessories = [];

      if (ProductAccessories.selectedAccessories.length !== 0) {
        ProductAccessories.selectedAccessories.map(item =>
          productAccessories.push({
            id: item.productOptionId,
            name: item.name,
            price: item.price,
            thumbnail: item.image
          })
        );
      }

      return {
        productGradeId: ProductGrade.id,
        productVariance: productVariance,
        productAccessories: productAccessories,
        subtotal: ProductTotal.subtotal,
        misc: ProductTotal.misc,
        gst: ProductTotal.gst,
        total: ProductTotal.total
      };

    case types.SAVE_CHECKOUT:
      localStorage.setItem("vc-shoppingcart", JSON.stringify(action.payload));
      return { ...action.payload };

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
