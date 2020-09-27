import * as types from "./BannerTypes";

export const getAllBanner = () => ({
    type: types.GET_ALL_BANNER
});
export const getAllBannerSuccess = data => ({
    type: types.GET_ALL_BANNER_SUCCESS,
    payload: data
});
export const getAllBannerFailure = error => ({
    type: types.GET_ALL_BANNER_FAILURE,
    payload: error
});




