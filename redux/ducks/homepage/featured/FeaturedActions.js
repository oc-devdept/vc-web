import * as types from "./FeaturedTypes";

export const getFeaturedCars = () => ({
    type: types.GET_FEATURED_CARS
});
export const getFeaturedCarsSuccess = data => ({
    type: types.GET_FEATURED_CARS_SUCCESS,
    payload: data
});
export const getFeaturedCarsFailure = error => ({
    type: types.GET_FEATURED_CARS_FAILURE,
    payload: error
});