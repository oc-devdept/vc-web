import * as types from "./RentTypes";

const INIT_STATE = {
  loading: false,
  Categories: [],
  SearchParameters: {},
  SearchData: [],
  SelectedVehicle: {}
};

export default (state = INIT_STATE, action) => {
  // console.log("redux state= ", state);
  switch (action.type) {
    case types.GET_SEARCH:
      return { ...state, loading: true, SearchParameters: action.payload };

    case types.GET_SEARCH_SUCCESS:
      return { ...state, loading: false, SearchData: action.payload };

    case types.GET_SEARCH_FAILURE:
      console.log("Error!");
      return { ...state, loading: false };

    case types.GET_CATEGORIES:
      return { ...state, loading: true };

    case types.GET_CATEGORIES_SUCCESS:
      return { ...state, loading: false, Categories: action.payload };

    case types.GET_CATEGORIES_FAILURE:
      console.log("Error!");
      return { ...state, loading: false };

    case types.UPDATE_SELECTED_VEHICLE:
      var id = action.payload;
      var { SearchData } = state;
      var object = SearchData.find(element => element.car_id === id);
      return { ...state, SelectedVehicle: object };

    default:
      return { ...state };
  }
};
