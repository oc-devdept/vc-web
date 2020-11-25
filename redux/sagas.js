/**
 * Root Sagas
 */
import { all } from "redux-saga/effects";

// import Sagas
import { LayoutSaga } from "Ducks/layout";
import { ProductSaga } from "Ducks/product";
import { ModelSaga } from "Ducks/model";
import { UserSaga } from "Ducks/user";
import { CheckoutSaga } from "Ducks/checkout";
import { RentSaga } from "Ducks/rent";
import { PaymentSaga } from "Ducks/payment";
import { BannerSaga, FeaturedSaga, FooterSaga } from "Ducks/homepage";

export default function* rootSaga() {
  yield all([
    LayoutSaga(),
    ProductSaga(),
    ModelSaga(),
    UserSaga(),
    CheckoutSaga(),
    RentSaga(),
    PaymentSaga(),
    BannerSaga(),
    FeaturedSaga(),
    FooterSaga()
  ]);
}
