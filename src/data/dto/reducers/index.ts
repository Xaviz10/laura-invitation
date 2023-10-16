import { combineReducers } from "@reduxjs/toolkit";
import * as exampleReducer from "./example.reducer";
import * as languageReducer from "./language.reducer";
export default combineReducers({
  ...exampleReducer,
  ...languageReducer,
});
