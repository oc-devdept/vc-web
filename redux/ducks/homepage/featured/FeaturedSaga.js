import { all, call, fork, put, takeEvery, delay } from "redux-saga/effects";
import api from "Api";

import {
    GET_FEATURED_HTML
} from './FeaturedTypes';

import * as actions from './FeaturedActions';

const getFeaturedHtml = async() => {
    const result = await api.get("/templatecomponents/getHtml/FeaturedContainer");
    return result.data;
}
function* getFeaturedFromDB(){
    try{
        const data = yield call(getFeaturedHtml);
        yield put(actions.getFeaturedHtmlSuccess(data.data));
    }
    catch(error){
        yield put(actions.getFeaturedHtmlFailure(error));
    }
}
export function* getFeaturedWatcher(){
    yield takeEvery(GET_FEATURED_HTML, getFeaturedFromDB);    
}

export default function* rootSaga(){
    yield all([
        fork(getFeaturedWatcher)
    ])
}