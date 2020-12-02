import { all, call, fork, put, takeEvery, delay } from "redux-saga/effects";
import api from "Api";

import {
    GET_FOOTER_HTML
} from './FooterTypes';

import * as actions from './FooterActions';

const getFooterHtml = async() => {
    const result = await api.get("/templatecomponents/getHtml/FooterContainer");
    return result.data;
}
function* getFooterFromDB(){
    try{
        const data = yield call(getFooterHtml);
        yield put(actions.getFooterHtmlSuccess(data.data));
    }
    catch(error){
        yield put(actions.getFooterHtmlFailure(error));
    }
}
export function* getFooterWatcher(){
    yield takeEvery(GET_FOOTER_HTML, getFooterFromDB);    
}

export default function* rootSaga(){
    yield all([
        fork(getFooterWatcher)
    ])
}