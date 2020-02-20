import * as types from "./LayoutTypes";

export const getMenuTabs = () => ({
  type: types.GET_MENU_TABS
});
export const getMenuTabsSuccess = data => ({
  type: types.GET_MENU_TABS_SUCCESS,
  payload: data
});
export const getMenuTabsFailure = error => ({
  type: types.GET_MENU_TABS_FAILURE,
  payload: error
});
