import * as types from "./RentTypes";

const INIT_STATE = {
  loading: false,
  Categories: [],
  SearchParameters: {},
  SearchData: [],
  SelectedVehicle: {},
  ExtraOptions: {},
  PriceBreakdown: {}
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

    case types.UPDATE_EXTRA_OPTIONS:
      let render = {};
      Object.entries(action.payload).map(([key, value]) => {
        switch (key) {
          case "childSeats":
            if (!!value) {
              render[key] = { text: "Child Seat(s)", value: value };
            }
            break;
          case "malaysiaTravel":
            if (!!value) {
              render[key] = { text: "Travel to Malaysia" };
            }
            break;
          case "fullCoverage":
            if (!!value) {
              render[key] = {
                text: "Collision Damage Waiver"
              };
            }
            break;
          default:
            break;
        }
      });

      return {
        ...state,
        ExtraOptions: { data: action.payload, render: render }
      };

    case types.UPDATE_PRICE:
      const rentalCharge = state.SelectedVehicle.totalPrice;
      const childSeatCharge = !!state.ExtraOptions.data.childSeats
        ? state.ExtraOptions.data.childSeats * 30
        : 0;
      const coverageCharge = !!state.ExtraOptions.data.fullCoverage
        ? state.SelectedVehicle.cdwPrice
        : 0;
      const subtotal = rentalCharge + childSeatCharge + coverageCharge;
      const gst = subtotal * 0.07;
      const total = subtotal + gst;
      return {
        ...state,
        PriceBreakdown: {
          rentalCharge: rentalCharge,
          childSeatCharge: childSeatCharge,
          coverageCharge: coverageCharge,
          subtotal: subtotal,
          gst: gst,
          total: total
        }
      };

    default:
      return { ...state };
  }
};
