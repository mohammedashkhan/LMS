
import React ,{ useEffect} from 'react';
import { Link} from 'react-router-dom';
import { Grid, CircularProgress, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useStyles from './styles';

const CoursesButton = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
   
  return (
    
      <Grid className={classes.addcourse} container alignItems="stretch" spacing={1}>
        <Grid item xs={12} sm={6} md={12}>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" component={Link} to="/addCourse"  fullWidth>Add New Course</Button>
        </Grid>
      </Grid>
    
  );
};

export default CoursesButton;
