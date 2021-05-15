import React ,{ useEffect, useState} from 'react';
import { Grid, CircularProgress, Button, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { getCourseByFaculty } from '../../actions/course';
import Course from './Course/course';
import CoursesButton from './Course/addCourseButton';
import useStyles from './styles';

const Courses = () => {
  const courses = useSelector((state) => state.Courses);
  const [message,setMessage] = useState('');
  const classes = useStyles();
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getCourseByFaculty());
  }, [dispatch]);

  console.log(courses);


   
  return (
    
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        <CoursesButton />
        {courses.map((c) => (
          <Grid key={c._id} item xs={12} sm={6} md={3}>
            <Course course={c} />
          </Grid>
        ))}
      </Grid>
    // )
  );
};

export default Courses;
