import { combineReducers } from 'redux';

import Profile from './profile'; 
import Courses from './course'; 
import Auth from './auth';

export const reducers = combineReducers({ Profile, Courses, Auth });
