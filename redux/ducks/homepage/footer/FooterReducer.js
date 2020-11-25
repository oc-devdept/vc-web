import * as types from "./FooterTypes";

const INIT_STATE = {
    footerHtml: {
        loading: false,
        html: ""        
    },    
}

export default(state = INIT_STATE, action) => {
    switch(action.type){
        case types.GET_FOOTER_HTML:
            return {
                ...state,
                footerHtml: {
                    ...state.footerHtml,
                    loading: true
                }
            }
        case types.GET_FOOTER_HTML_SUCCESS:
            return {
                ...state,
                footerHtml: {
                    html: action.payload,
                    loading: false
                }
            }
        case types.GET_FOOTER_HTML_FAILURE:
            return {
                ...state,
                footerHtml: {
                    ...state.footerHtml,
                    loading: false
                }
            }
        default:
            return { ...state }
    }
}