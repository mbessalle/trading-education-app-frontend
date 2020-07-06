import { combineReducers } from "redux";
import appState from "./appState/reducer";
import courses from './courses/reducer'

export default combineReducers({
    appState,
    courses,
  });