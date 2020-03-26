import * as types from "./CheckoutTypes";
import { selectedStockId } from "Components/Helpers/helpers";

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
        ProductRims,
        ProductAccessories,
        ProductTotal
      } = action.payload;

      const exteriorStockId = selectedStockId(ProductExterior.stockhistory);
      const interiorStockId = selectedStockId(ProductInterior.stockhistory);
      const rimsStockId = selectedStockId(ProductRims.stockhistory);

      // Mapping of selected exterior and interio into productVariance[]
      let productVariance = [];
      // KIV: need to change exterior/interior to dynamic mapping eventually
      // ProductExterior & ProductInterior likely to hold an array
      productVariance.push({
        id: ProductExterior.id,
        name: ProductExterior.name,
        price: ProductExterior.price,
        thumbnail: ProductExterior.thumbnail,
        stockId: exteriorStockId
      });
      productVariance.push({
        id: ProductInterior.id,
        name: ProductInterior.name,
        price: ProductInterior.price,
        thumbnail: ProductInterior.thumbnail,
        stockId: interiorStockId
      });

      // Mapping of selected rims and accessories into productAccessories[]
      let productAccessories = [];
      productAccessories.push({
        id: ProductRims.id,
        name: ProductRims.name,
        price: ProductRims.price,
        thumbnail: ProductRims.thumbnail,
        stockId: rimsStockId
      });

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

    default:
      return { ...state };
  }
};
