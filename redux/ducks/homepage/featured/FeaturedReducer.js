import * as types from "./FeaturedTypes";

const INIT_STATE = {
    featuredHtml: {
        loading: false,
        html: ""        
    },    
}

export default(state = INIT_STATE, action) => {
    switch(action.type){
        case types.GET_FEATURED_HTML:
            return {
                ...state,
                featuredHtml: {
                    ...state.featuredHtml,
                    loading: true
                }
            }
        case types.GET_FEATURED_HTML_SUCCESS:
            return {
                ...state,
                featuredHtml: {
                    html: action.payload,
                    loading: false
                }
            }
        case types.GET_FEATURED_HTML_FAILURE:
            return {
                ...state,
                featuredHtml: {
                    ...state.featuredHtml,
                    loading: false
                }
            }
        default:
            return { ...state }
    }
}