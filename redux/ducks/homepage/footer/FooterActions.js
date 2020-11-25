import * as types from "./FooterTypes";

export const getFooterHtml = () => ({
    type: types.GET_FOOTER_HTML
});
export const getFooterHtmlSuccess = data => ({
    type: types.GET_FOOTER_HTML_SUCCESS,
    payload: data
});
export const getFooterHtmlFailure = error => ({
    type: types.GET_FOOTER_HTML_FAILURE,
    payload: error
});