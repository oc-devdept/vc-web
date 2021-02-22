import { all, call, fork, put, takeEvery, delay } from "redux-saga/effects";
import api from "Api";

import {
    GET_FEATURED_CARS
} from './FeaturedTypes';

import * as actions from './FeaturedActions';

const getFeaturedCars = async() => {
    const result = await api.get("/featuredcars/getall");
    return result.data;
}
function* getFeaturedFromDB(){
    try{
        const data = yield call(getFeaturedCars);
        yield put(actions.getFeaturedCarsSuccess(data.data));
    }
    catch(error){
        yield put(actions.getFeaturedCarsFailure(error));
    }
}
export function* getFeaturedWatcher(){
    yield takeEvery(GET_FEATURED_CARS, getFeaturedFromDB);    
}

export default function* rootSaga(){
    yield all([
        fork(getFeaturedWatcher)
    ])
}