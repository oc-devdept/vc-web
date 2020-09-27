import { all, call, fork, put, takeEvery, delay } from "redux-saga/effects";
import {
    GET_ALL_BANNER,
} from './BannerTypes';
import * as actions from './BannerActions';


import api from "Api";

/* GET ALL */

const getAllBannerRequest = async () => {
    const result = await api.get("/homebanners?filter[order]=position");
    return result.data;
}

function* getAllBannerFromDB() {
    try {
        const data = yield call(getAllBannerRequest);        
        yield put(actions.getAllBannerSuccess(data));        
    }
    catch(error){        
        yield put(actions.getAllBannerFailure(error));
    }
}

export function* getAllBannerWatcher(){
    yield takeEvery(GET_ALL_BANNER, getAllBannerFromDB);    
}




export default function* rootSaga(){
    yield all([
        fork(getAllBannerWatcher)
    ])
}