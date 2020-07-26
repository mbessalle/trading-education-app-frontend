import { combineReducers } from "redux";
import appState from "./appState/reducer";
import courses from './courses/reducer'
import user from './user/reducer';

export default combineReducers({
    appState,
    courses,
    user,
  });