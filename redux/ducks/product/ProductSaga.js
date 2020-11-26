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

    /*
  const specificationData = await api.get(
    `/products/specificGradeDetail/${gradeId}`
  );

  const exteriorData = await api.get(
    `/products/specificVariantExterior/${gradeId}`
  );
  const interiorData = await api.get(
    `/products/specificVariantInterior/${gradeId}`
  );
  const accessoriesData = await api.get(
    `/products/specificGradeProductOption/${gradeId}`
  );
  specificationData: specificationData,
    exteriorData: exteriorData,
    interiorData: interiorData,
    accessoriesData: accessoriesData
*/
  const data = {
    gradeId: gradeId,
    gradesData: gradesData
    
  };

  return data;
};

const getProductGradeDataRequest = async payload => {
  const specificationData = await api.get(
    `/products/specificGradeDetail/${payload.payload}`
  );
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
    id: payload.payload,
    specificationData: specificationData,
    exteriorData: exteriorData,
    interiorData: interiorData,
    accessoriesData: accessoriesData
  };
  return data;
};

const printConfiguratorPDF = async (userData, pdfData) => {
  //const result = await api.post("/create-pdf", pdfData);
  console.log(userData);
  const result = await api.post("/carconfigurators/generatePDF", {
    userdata: userData,
    pdfdata: pdfData
  });
  
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

const getInterestRateRequest = async () => {
  const data = await api.get(`/WebsiteSettings`);
  return data;
};

const getAllCarsRequest = async ({
  limit,
  skip,
  filter,
  searchText,
  orderBy
}) => {
  const result = await api.get("/products/getall", {
    params: {
      limit: limit,
      skip: skip,
      filter: filter,
      searchText: searchText,
      orderBy: orderBy
    }    
  });
  return result.data;
}
// New Stuff
const getAllPreownedCarsRequest = async ({
  limit,
  skip,
  filter,
  searchText,
  orderBy
}) => {
  const result = await api.get("/products/getallPreowned", {
    params: {
      limit: limit,
      skip: skip,
      filter: filter,
      searchText: searchText,
      orderBy: orderBy
    }    
  });
  return result.data;
}

const getAllMakeRequest = async () => {
  const result = await api.get("/products/getBrand");
  return result.data;
}

const getAllTagsRequest = async () => {
  const result = await api.get("/tags/getAllTags");
  return result.data;
}

const getAllCoeRequest = async () => {
  const result = await api.get("/coeselects?filter[order]=position%20ASC");
  return result.data;
}
const getAllServicingRequest = async () => {
  const result = await api.get("/servicingselects?filter[order]=position%20ASC");
  return result.data;
}
const getAllWarrantyRequest = async () => {
  const result = await api.get("/warrantyselects?filter[order]=position%20ASC");
  return result.data;
}

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* getProductModelData(e) {
  try {
    const data = yield call(getProductModelDataRequest, e);
    yield put(actions.getProductModelDataSuccess(data));
  } catch (error) {
    yield put(actions.getProductModelDataFailure(error));
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
function* generateConfiguratorPDF({payload}) {
  try {
    const getProductState = state => state.ProductState;
    
    var productState = yield select(getProductState);
    
    var data = yield call(printConfiguratorPDF, {email: payload }, productState);
    //yield call(fetchConfiguratorPDF, data);
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

function* getInterestRate() {
  try {
    const data = yield call(getInterestRateRequest);
    yield put(actions.getInterestRateSuccess(data));
  } catch (error) {
    yield put(actions.getInterestRateFailure(data));
  }
}

function* getAllCarsFromDB({ payload }){
  try {
    console.log(payload);
    const data = yield call(getAllCarsRequest, payload);
    yield put(actions.getAllCarsSuccess(data));
  }
  catch(error) {
    yield put(actions.getAllCarsFailure(error));
  }
}
// New Stuff
function* getAllPreownedCarsFromDB({ payload }){
  try {
    // console.log(payload);
    const data = yield call(getAllPreownedCarsRequest, payload);
    yield put(actions.getAllPreownedCarsSuccess(data));
  }
  catch(error) {
    yield put(actions.getAllPreownedCarsFailure(error));
  }
}

function* getAllMakesFromDB(){
  try {
    const data = yield call(getAllMakeRequest);
    yield put(actions.getMakeSuccess(data));
  }
  catch(error){
    yield put(actions.getMakeFailure(error));
  }
}

function* getAllTagsFromDB(){
  try {
    const data = yield call(getAllTagsRequest);
    yield put(actions.getTagsSuccess(data));
  }
  catch(error){
    yield put(actions.getTagsFailure(error));
  }
}

function* getAllConfigFromDB(){
  try {
    const coeSelected = yield call(getAllCoeRequest);
    const servicingSelected = yield call(getAllServicingRequest);
    const warrantySelected = yield call(getAllWarrantyRequest);
    yield put(actions.getAllConfigSuccess(coeSelected, servicingSelected, warrantySelected));
  }
  catch(error){
    yield put(actions.getAllConfigFailure(error));
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
export function* getInterestRateWatcher() {
  yield takeEvery(types.GET_INTEREST_RATE, getInterestRate);
}
export function* getAllCarsWatcher(){
  yield takeEvery(types.GET_ALL_CARS, getAllCarsFromDB);
}
// New Stuff
export function* getAllPreownedCarsWatcher(){
  yield takeEvery(types.GET_ALL_PREOWNED_CARS, getAllPreownedCarsFromDB);
}
export function* getMakesWatcher(){
  yield takeEvery(types.GET_ALL_MAKE, getAllMakesFromDB);
} 

export function* getTagsWatcher(){
  yield takeEvery(types.GET_ALL_TAGS, getAllTagsFromDB);
} 

export function* getAllConfigWatcher(){
  yield takeEvery(types.GET_ALL_CONFIG, getAllConfigFromDB);
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
    fork(getFeaturedCarsWatcher),
    fork(getInterestRateWatcher),
    fork(getAllCarsWatcher),
    fork(getAllPreownedCarsWatcher), // New Stuff
    fork(getMakesWatcher),
    fork(getTagsWatcher),
    fork(getAllConfigWatcher)
  ]);
}
