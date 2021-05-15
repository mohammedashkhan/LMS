import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (Courses = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...Courses, action.payload];
    // case UPDATE:
    //   return Courses.map((course) => (course._id === action.payload._id ? action.payload : course));
    case DELETE:
      return Courses.filter((course) => course._id !== action.payload);
    default:
      return Courses;
  }
};

