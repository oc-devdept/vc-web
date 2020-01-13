/**
 * App Reducers
 */
import { combineReducers } from "redux";

//import { LeadReducer } from "Ducks/lead";
import { TestReducer } from "Ducks/lead/test";

const reducers = combineReducers({
  // reducers
  // leadState: LeadReducer,
  TestState: TestReducer
});

export default reducers;
