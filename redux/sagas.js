/**
 * Root Sagas
 */
import { all } from "redux-saga/effects";

// import Sagas
import { LeadSaga } from "Ducks/lead";
import { TestSaga } from "Ducks/lead/test";

export default function* rootSaga() {
  yield all([
    // CRM
    LeadSaga(),
    TestSaga()
  ]);
}
