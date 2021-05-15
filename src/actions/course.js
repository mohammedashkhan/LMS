import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getAllCourses = () => async (dispatch) => {
  try {
    const { data } = await api.getAllCourses();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getCourseByFaculty = () => async (dispatch) => {
  try {
    const { data } = await api.getCourseByFaculty();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createCourse = (Newcourse, router) => async (dispatch) => {
    try {
      const { data } = await api.createCourse(Newcourse);
  
      dispatch({ type: CREATE, payload: data });
      router.push('/faculty');
    } catch (error) {
      console.log(error);
    }
  };

export const deleteCourse = (id) => async (dispatch) => {
  try {
    await api.deleteCourse(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
