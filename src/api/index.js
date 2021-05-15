import axios from 'axios';

// const API = axios.create({ baseURL: 'http://localhost:5000/api/'});
const API = axios.create({ baseURL: 'https://learninmsbyashkhan.herokuapp.com/api/'});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

//Authentication

export const signIn = (formData) => API.post('signin', formData);
export const signUp = (formData) => API.post('signup', formData);

//profile
export const getprofile = () => API.get('profile');
export const updateProfile = (id, updatedProfile) => API.patch(`profile/${id}`, updatedProfile);

//courses
export const getAllCourses = () => API.get('courses');
export const getCourseByFaculty = () => API.get('course');
export const createCourse = (Newcourse) => API.post('course', Newcourse)
export const deleteCourse = (id) => API.delete(`course/${id}`);












//By ashkhan ahmed 
//dated on 15-5-2021