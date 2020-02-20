import { all, call, fork, put, takeEvery, select } from "redux-saga/effects";

import * as types from "./ProductTypes";
import * as actions from "./ProductActions";
import { saveAs } from "file-saver";
import api from "Api";

//=========================
// REQUESTS
//=========================
const getProductModelDataRequest = async payload => {
  const data = await api.get(`/categories/${payload.payload}`);
  return data;
};

const getProductGradesRequest = async payload => {
  const gradesData = await api.get(
    `/products/specificGrades/${payload.payload.modelId}`
  );

  let gradeId = null;
  !!payload.payload.gradeId
    ? (gradeId = payload.payload.gradeId)
    : (gradeId = gradesData.data.fields[0].id);

  const exteriorData = await api.get(
    `/products/specificVariantExterior/${gradeId}`
  );
  const interiorData = await api.get(
    `/products/specificVariantInterior/${gradeId}`
  );
  const accessoriesData = await api.get(
    `/products/specificGradeProductOption/${gradeId}`
  );

  const data = {
    gradeId: gradeId,
    gradesData: gradesData,
    exteriorData: exteriorData,
    interiorData: interiorData,
    accessoriesData: accessoriesData
  };

  return data;
};

const getProductGradeDataRequest = async payload => {
  const exteriorData = await api.get(
    `/products/specificVariantExterior/${payload.payload}`
  );
  const interiorData = await api.get(
    `/products/specificVariantInterior/${payload.payload}`
  );
  const accessoriesData = await api.get(
    `/products/specificGradeProductOption/${payload.payload}`
  );
  const data = {
    exteriorData: exteriorData,
    interiorData: interiorData,
    accessoriesData: accessoriesData
  };
  return data;
};

const formatReportState = state => {
  var reportVals = {};

  reportVals.model_name = state.ProductModel.name;
  reportVals.model_description = state.ProductModel.description;
  reportVals.model_image = state.ProductModel.image;

  reportVals.grade_name = state.ProductGrade.name;
  reportVals.grade_price = state.ProductGrade.price;
  reportVals.grade_image = state.ProductGrade.images[0];
  reportVals.grade_description = state.ProductGrade.description;

  reportVals.exterior_name = state.ProductExterior.name;
  reportVals.exterior_price = state.ProductExterior.price;
  reportVals.exterior_image = state.ProductExterior.thumbnail;

  reportVals.interior_name = state.ProductInterior.name;
  reportVals.interior_price = state.ProductInterior.price;
  reportVals.interior_image = state.ProductInterior.thumbnail;

  reportVals.rims_name = state.ProductRims.name;
  reportVals.rims_price = state.ProductRims.price;
  reportVals.rims_image = state.ProductRims.thumbnail;

  if (!!state.ProductAccessories.selectedAccessories) {
    reportVals.accessories = state.ProductAccessories.selectedAccessories.map(
      item => {
        return {
          name: item.name,
          price: item.price,
          image: item.image,
          description: item.description
        };
      }
    );
  }

  reportVals.total_subtotal = state.ProductTotal.subtotal;
  reportVals.total_misc = state.ProductTotal.misc;
  reportVals.total_gst = state.ProductTotal.gst;
  reportVals.total_total = state.ProductTotal.total;

  reportVals.calculator_loanTerm = state.LoanCalculator.loanTerm;
  reportVals.calculator_loanAmount = state.LoanCalculator.loanAmount;
  reportVals.calculator_interestRate = state.LoanCalculator.interestRate;
  reportVals.calculator_downPayment = state.LoanCalculator.downPayment;
  reportVals.calculator_deposit = state.LoanCalculator.deposit;
  reportVals.calculator_monthlyInstallment =
    state.LoanCalculator.monthlyInstallment;

  return reportVals;
};

const printConfiguratorPDF = async state => {
  var reportVals = formatReportState(state);
  const result = await api.post("/create-pdf", reportVals);
  return result.data;
};

const fetchConfiguratorPDF = async dirName => {
  var filedata = await api.get("/fetch-pdf/" + dirName, {
    responseType: "blob"
  });
  var fileblob = new Blob([filedata.data], { type: "application/pdf" });
  saveAs(fileblob, "vehicle-configuration.pdf");
};

const getFeaturedCarsRequest = async () => {
  const result = await api.get(`/products/getAllFeaturedCars`);
  return result.data.fields;
};

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* getProductModelData(e) {
  try {
    const data = yield call(getProductModelDataRequest, e);
    yield put(actions.getProductModelDataSuccess(data));
  } catch (error) {
    yield put(actions.getProductModelDataFailure(data));
  }
}

function* getProductGrades(e) {
  try {
    const data = yield call(getProductGradesRequest, e);
    yield put(actions.getProductGradesSuccess(data));
  } catch (error) {
    yield put(actions.getProductGradesFailure(data));
  }
}
function* getProductGradeData(e) {
  try {
    const data = yield call(getProductGradeDataRequest, e);
    yield put(actions.getProductGradeDataSuccess(data));
  } catch (error) {
    yield put(actions.getProductGradeDataFailure(data));
  }
}
function* generateConfiguratorPDF() {
  try {
    const getProductState = state => state.ProductState;
    var productState = yield select(getProductState);
    var data = yield call(printConfiguratorPDF, productState, "full");
    yield call(fetchConfiguratorPDF, data);
    yield put(actions.printConfiguratorSuccess());
  } catch (error) {
    yield put(actions.printConfiguratorFailure(error));
  }
}
function* getFeaturedCars() {
  try {
    const data = yield call(getFeaturedCarsRequest);
    yield put(actions.getFeaturedCarsSuccess(data));
  } catch (error) {
    yield put(actions.getFeaturedCarsFailure(data));
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* getProductModelDataWatcher() {
  yield takeEvery(types.GET_PRODUCT_MODEL_DATA, getProductModelData);
}
export function* getProductGradesWatcher() {
  yield takeEvery(types.GET_PRODUCT_GRADES, getProductGrades);
}
export function* getProductGradeDataWatcher() {
  yield takeEvery(types.GET_PRODUCT_GRADE_DATA, getProductGradeData);
}
export function* generateConfiguratorPDFWatcher() {
  yield takeEvery(types.PRINT_CONFIGURATOR, generateConfiguratorPDF);
}
export function* getFeaturedCarsWatcher() {
  yield takeEvery(types.GET_FEATURED_CARS, getFeaturedCars);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* productSaga() {
  yield all([
    fork(getProductModelDataWatcher),
    fork(getProductGradesWatcher),
    fork(getProductGradeDataWatcher),
    fork(generateConfiguratorPDFWatcher),
    fork(getFeaturedCarsWatcher)
  ]);
}
