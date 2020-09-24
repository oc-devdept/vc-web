import * as types from "./FeaturedTypes";

export const getFeaturedHtml = () => ({
    type: types.GET_FEATURED_HTML
});
export const getFeaturedHtmlSuccess = data => ({
    type: types.GET_FEATURED_HTML_SUCCESS,
    payload: data
});
export const getFeaturedHtmlFailure = error => ({
    type: types.GET_FEATURED_HTML_FAILURE,
    payload: error
});