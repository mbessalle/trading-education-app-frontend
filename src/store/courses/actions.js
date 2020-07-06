import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";
import axios from "axios";

export const FETCH_COURSES_SUCCESS = "FETCH_COURSES_SUCCESS";

export const fetchCoursesSuccess = (courses) => ({
  type: FETCH_COURSES_SUCCESS,
  payload: courses,
});

export const fetchCourses = () => {
  return async (dispatch, getState) => {
    // const coursesCount = getState().courses.length;
    const response = await axios.get(
      `${apiUrl}/courses`
    );
    console.log('WHAT DO I GET HERE', response)

    dispatch(fetchCoursesSuccess(response.data));
  };
};
