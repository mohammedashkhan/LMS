import { FETCH, UPDATE  } from '../constants/actionTypes';
import * as api from '../api/index.js';
export const getProfile = () => async (dispatch) => {
    try {
      const { data } = await api.getprofile();
  
      dispatch({ type: FETCH, payload: data });
    } catch (error) {
      console.log(error);
    }
  };


  export const updateProfile = (id, profile, router) => async (dispatch) => {
    try {
      const { data } = await api.updateProfile(id, profile);
  
      dispatch({ type: UPDATE, payload: data });
      router.push('/view_profile');
    } catch (error) {
      console.log(error.message);
    }
  };