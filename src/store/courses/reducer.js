import { FETCH_COURSES_SUCCESS } from "./actions";
//import { COURSE_UPDATED } from "../user/actions";

const initialState = [];

export default (state = initialState, action) => {
  console.log("Hola");
  switch (action.type) {
    case FETCH_COURSES_SUCCESS:
      console.log("state", state, "action", action);
      console.log([...state, ...action.payload]);
      return [...state, ...action.payload];

    default:
      return state;
  }
};
