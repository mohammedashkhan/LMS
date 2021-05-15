import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { TextField,Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useHistory,Link } from 'react-router-dom';
import FileBase from 'react-file-base64';
import PersonIcon from '@material-ui/icons/Person';

// import Icon from './icon';
import { getProfile, updateProfile } from '../../actions/profile';
import { AUTH } from '../../constants/actionTypes';
import useStyles from './styles';


const UserProfile = () => {
  const userProfile = useSelector((state) => state.Profile);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const classes = useStyles();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar} src={userProfile.profile_image} />
        <Typography component="h1" variant="h5">{userProfile.name}</Typography>
        <Typography component="h4"  variant="h6">{userProfile.about}</Typography>
        <Typography component="h4"  variant="h6">{userProfile.email}</Typography>
        <Typography component="h4"  variant="h6">{userProfile.phone}</Typography>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          <Grid  item xs={12} sm={6} md={6}>
           <Typography component="h4"  variant="h6">Native: <span>{userProfile.Hometown}</span></Typography>
          </Grid>
          <Grid  item xs={12} sm={6} md={6}>
           <Typography component="h4"  variant="h6">City: <span>{userProfile.city}</span></Typography>
          </Grid>
       </Grid>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          <Grid  item xs={12} sm={6} md={6}>
           <Typography component="h4"  variant="h6">Country: <span>{userProfile.Country}</span></Typography>
          </Grid>
          <Grid  item xs={12} sm={6} md={6}>
           <Typography component="h4"  variant="h6">School: <span>{userProfile.School}</span></Typography>
          </Grid>
       </Grid>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          <Grid  item xs={12} sm={6} md={6}>
           <Typography component="h4"  variant="h6">Gender: <span>{userProfile.gender}</span></Typography>
          </Grid>
          <Grid  item xs={12} sm={6} md={6}>
           <Typography component="h4"  variant="h6">Gender: <span>{userProfile.Company}</span></Typography>
          </Grid>
       </Grid>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            <Grid  item xs={12} sm={12} md={12}>
              <Typography component="h4"  variant="h6">Languages: <span>{userProfile.Languages}</span></Typography>
            </Grid>
        </Grid>
        
        <Button  variant="contained" color="primary" component={Link} to="/profile">Update Profile</Button>
         
          
          
    {/* </Grid> */}
      </Paper>
    </Container>
  );
};

export default UserProfile;
