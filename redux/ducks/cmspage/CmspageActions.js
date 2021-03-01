import * as types from "./CmspageTypes";

export const getCmspage = (pageurl) => ({
    type: types.GET_CMS_PAGE,
    payload: pageurl
});
export const getCmspageSuccess = data => ({
    type: types.GET_CMS_PAGE_SUCCESS,
    payload: data
});
export const getCmspageFailure = error => ({
    type: types.GET_CMS_PAGE_FAILURE,
    payload: error
});