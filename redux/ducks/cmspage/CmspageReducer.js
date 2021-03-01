import * as types from "./CmspageTypes";

const INIT_STATE = {
    loading: false,
    pages: {},    
}

export default(state = INIT_STATE, action) => {
    switch(action.type){
        case types.GET_CMS_PAGE:
            return {
                ...state,
                loading: true
            }
        case types.GET_CMS_PAGE_SUCCESS:
            return {
                loading: false,
                pages: {
                    ...state.pages,
                    [action.payload.url]: action.payload.html                                        
                }
            }
        case types.GET_CMS_PAGE_FAILURE:
            return {
                ...state,
                loading: false,                
            }
        default:
            return { ...state }
    }
}