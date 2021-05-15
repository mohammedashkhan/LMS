import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { createCourse } from '../../actions/course';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';

const CourseForm = ({ }) => {
  const [course, setCourse] = useState({ courseName: '', courseDept: '', description: '', courseRoom: '', waitListCapacity: '',courseTeam: ''});
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('profile')); 


  const clear = () => {
    setCourse('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (currentId === 0) {
      dispatch(createCourse({ ...course, userId: user?.result?._id }, history));
      clear();
    // } else {
    //   dispatch(updateExpense(currentId, { ...expenseData, name: user?.result?.name }));
    //   clear();
    // }
  };

  
  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Create Course</Typography>
        <TextField name="courseName" variant="outlined" label="Course Name" fullWidth value={course.courseName} onChange={(e) => setCourse({ ...course, courseName: e.target.value })} />
        <TextField name="courseDept" variant="outlined" label="Course Dept" fullWidth value={course.courseDept} onChange={(e) => setCourse({ ...course, courseDept: e.target.value })} />
        <TextField name="description" variant="outlined" label="Description" rowsMax={4} fullWidth value={course.description} onChange={(e) => setCourse({ ...course, description: e.target.value })} />
        <TextField name="courseRoom" variant="outlined" label="Course Room" fullWidth value={course.courseRoom} onChange={(e) => setCourse({ ...course, courseRoom: e.target.value })} />
        <TextField name="waitListCapacity" variant="outlined" label="Wait List Capacity" fullWidth value={course.waitListCapacity} onChange={(e) => setCourse({ ...course, waitListCapacity: e.target.value })} />
        <TextField name="courseTeam" variant="outlined" label="Course Team" fullWidth value={course.courseTeam} onChange={(e) => setCourse({ ...course, courseTeam: e.target.value })} />
        
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Add</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default CourseForm;
