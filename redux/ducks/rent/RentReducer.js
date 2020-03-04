import * as types from "./RentTypes";

const INIT_STATE = {
  loading: false,
  SearchParameters: {},
  SearchData: {},
  Categories: {}
};

export default (state = INIT_STATE, action) => {
  // console.log("redux state= ", state);
  switch (action.type) {
    case types.GET_SEARCH:
      console.log("get search");
      return { ...state, loading: true, SearchParameters: action.payload };

    case types.GET_SEARCH_SUCCESS:
      console.log("get search success");
      return { ...state, loading: false, SearchData: action.payload };

    case types.GET_SEARCH_FAILURE:
      console.log("an error occurred");
      return { ...state, loading: false };

    case types.GET_CATEGORIES:
      return { ...state, loading: true };

    case types.GET_CATEGORIES_SUCCESS:
      console.log("get categories success");
      console.log("payload= ", action.payload);
      return { ...state, loading: false };

    case types.GET_CATEGORIES_FAILURE:
      console.log("an error occurred");
      return { ...state, loading: false };

    default:
      return { ...state };
  }
};
