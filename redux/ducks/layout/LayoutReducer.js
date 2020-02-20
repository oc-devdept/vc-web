import * as types from "./LayoutTypes";

const INIT_STATE = {
  MegaMenu: {
    loading: false,
    tabs: []
  }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.GET_MENU_TABS:
      return { ...state, MegaMenu: { ...state.MegaMenu, loading: true } };
    case types.GET_MENU_TABS_SUCCESS:
      const megaTabs = Object.entries(action.payload);
      return {
        ...state,
        MegaMenu: { ...state.MegaMenu, loading: false, tabs: megaTabs }
      };
    case types.GET_MENU_TABS_FAILURE:
      console.log(action.payload);
      return { ...state, MegaMenu: { ...state.MegaMenu, loading: false } };
    default:
      return { ...state };
  }
};
