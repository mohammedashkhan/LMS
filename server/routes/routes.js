import express from 'express';

import { signin, signup } from '../controllers/users.js';
import { getProfile, updateProfile } from '../controllers/profile.js';
import { getCourseByFaculty, createCourse, deleteCourse, getAllCourses } from '../controllers/course.js';

import auth from '../middleware/auth.js';
const router = express.Router();

//users routes
router.post('/signin', signin);
router.post('/signup', signup);

//profile routes

router.get('/profile',auth, getProfile);
router.patch('/profile/:id', auth,updateProfile);

//courses

router.get('/course',auth, getCourseByFaculty);
router.post('/course',auth, createCourse);
router.delete('/course/:id',auth, deleteCourse);
router.get('/courses',auth,getAllCourses);

export default router;