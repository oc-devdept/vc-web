import { NotificationManager } from "react-notifications";
import * as types from "./BannerTypes";

const INIT_STATE = {
    bannerList: {
        loading: false,
        action: false,
        tableData: [],
        totalCount: 0
    }
}

export default (state = INIT_STATE, action) => {
    switch(action.type){
        case types.GET_ALL_BANNER:            
            return {
                ...state,
                bannerList: { ...state.bannerList, loading: true }
            }
        case types.GET_ALL_BANNER_FAILURE:
            NotificationManager.warning("Error in fetching Banner data");
            return {
                ...state,
                bannerToView: INIT_STATE.bannerToView,
                bannerList: INIT_STATE.bannerList
            }
        case types.GET_ALL_BANNER_SUCCESS:
            let totalCount = action.payload.length;            
            return {
                ...state,
                bannerList: {
                    ...state.bannerList,
                    loading: false,
                    tableData: action.payload,
                    totalCount: totalCount
                }
            }
        default:
            return { ...state };
    }
}