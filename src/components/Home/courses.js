import React ,{ useEffect} from 'react';
import { Grid, CircularProgress, Button, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { getAllCourses } from '../../actions/course';
import Course from './Course/course';
import CoursesButton from './Course/addCourseButton';
import useStyles from './styles';

const Courses = () => {
  const courses = useSelector((state) => state.Courses);
  const classes = useStyles();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);

  console.log(courses);


   
  return (
    !courses.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {/* <Typography variant="h6" component={Link} to="/addCourse"  className={classes.title}> Add Course </Typography> */}
        {courses.map((c) => (
          <Grid key={c._id} item xs={12} sm={6} md={3}>
            <Course course={c} />
          </Grid>
         
        ))}
         {/* <Grid item md={2}>
            <Button className={classes.buttonSubmit} component={Link} to="/addCourse" variant="contained" color="primary" size="large"  fullWidth>Add New Course</Button>
          </Grid> */}
      </Grid>
    )
  );
};

export default Courses;
