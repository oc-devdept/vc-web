import * as types from "./FeaturedTypes";

const INIT_STATE = {
    featuredCars: {
        loading: false,
        data: []        
    },    
}

export default(state = INIT_STATE, action) => {
    switch(action.type){
        case types.GET_FEATURED_CARS:
            return {
                ...state,
                featuredCars: {
                    ...state.featuredCars,
                    loading: true
                }
            }
        case types.GET_FEATURED_CARS_SUCCESS:
            return {
                ...state,
                featuredCars: {
                    data: action.payload,
                    loading: false
                }
            }
        case types.GET_FEATURED_CARS_FAILURE:
            return {
                ...state,
                featuredCars: {
                    ...state.featuredCars,
                    loading: false
                }
            }
        default:
            return { ...state }
    }
}