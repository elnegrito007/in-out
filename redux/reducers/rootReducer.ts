import { combineReducers } from "redux";
import { fruitReducer } from "./fruitsReducer";
import { userReducer } from "./userReducer";

export const rootReducers = combineReducers({
  allFruits: fruitReducer,
  user: userReducer
})
