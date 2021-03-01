import { all, call, fork, put, takeEvery, delay } from "redux-saga/effects";
import api from "Api";

import {
    GET_CMS_PAGE
} from './CmspageTypes';

import * as actions from './CmspageActions';

const getCmspageRequest = async(url) => {
    const result = await api.get("/cmspages/getPage/"+url);
    return result.data;
}
function* getCmsPageFromDB({ payload }){
    try{
        const data = yield call(getCmspageRequest, payload);
        yield put(actions.getCmspageSuccess({ url: payload, html: data.data}));
    }
    catch(error){
        yield put(actions.getCmspageFailure(error));
    }
}
export function* getCmspageWatcher(){
    yield takeEvery(GET_CMS_PAGE, getCmsPageFromDB);    
}

export default function* rootSaga(){
    yield all([
        fork(getCmspageWatcher)
    ])
}