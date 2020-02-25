import * as types from "./RentTypes";

const INIT_STATE = {
  loading: false,
  SearchParameters: {},
  SearchData: {}
};

export default (state = INIT_STATE, action) => {
  // console.log("redux state= ", state);
  switch (action.type) {
    case types.GET_SEARCH:
      return { ...state, loading: true, SearchParameters: action.payload };

    case types.GET_SEARCH_SUCCESS:
      return { ...state, loading: false, SearchData: action.payload };

    case types.GET_SEARCH_FAILURE:
      return { ...state, loading: false };

    default:
      return { ...state };
  }
};
