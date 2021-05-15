import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { TextField,Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import FileBase from 'react-file-base64';
import PersonIcon from '@material-ui/icons/Person';

// import Icon from './icon';
import { getProfile, updateProfile } from '../../actions/profile';
import { AUTH } from '../../constants/actionTypes';
import useStyles from './styles';


const Profile = () => {
  const userProfile = useSelector((state) => state.Profile);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [profile, setProfile] = useState({ profile_image: '', phone: '', about: '', city: '', Country: '',Company: '',School: '',Hometown: '',Languages: '',gender: '' });
  const history = useHistory();
  const userId = user?.result?._id;
  const classes = useStyles();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  console.log(userId);
  
  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(updateProfile(userId,profile,history));
      setProfile({profile_image: '', phone: '', about: '', city: '', Country: '',Company: '',School: '',Hometown: '',Languages: '',gender: '' });
  };

  

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <PersonIcon />
        </Avatar>
        <Typography component="h1" variant="h5">Profile</Typography>
          <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
              <Typography variant="h6">Create Course</Typography>
            {/* <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField name="name" variant="outlined" label="Name"  value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField name="email" variant="outlined" label="Email" fullWidth value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
              </Grid>
            </Grid> */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <div className={classes.fileInput}><FileBase label="profile" type="file" multiple={false} onDone={({ base64 }) => setProfile({ ...profile, profile_image: base64 })} /></div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField name="city" variant="outlined" label="City" fullWidth value={profile.city} onChange={(e) => setProfile({ ...profile, city: e.target.value })} />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField name="gender" variant="outlined" label="Gender" fullWidth value={profile.gender} onChange={(e) => setProfile({ ...profile, gender: e.target.value })} />
                </Grid>
                <Grid item xs={12} sm={6}>
                   <TextField name="Country" variant="outlined" label="Country" fullWidth value={profile.Country} onChange={(e) => setProfile({ ...profile, Country: e.target.value })} />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField name="company" variant="outlined" label="Company" fullWidth value={profile.Company} onChange={(e) => setProfile({ ...profile, Company: e.target.value })} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField name="School" variant="outlined" label="School" fullWidth value={profile.School} onChange={(e) => setProfile({ ...profile, School: e.target.value })} />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField name="Hometown" variant="outlined" label="HomeTown" fullWidth value={profile.Hometown} onChange={(e) => setProfile({ ...profile, Hometown: e.target.value })} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField name="Languages" variant="outlined" label="Languages" fullWidth value={profile.Languages} onChange={(e) => setProfile({ ...profile, Languages: e.target.value })} />
               </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField name="phone" variant="outlined" label="phone" fullWidth value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} />
                </Grid>
                <Grid item xs={12} sm={6}>
                   <TextField name="about" variant="outlined" label="About" rowsMax="4" fullWidth value={profile.about} onChange={(e) => setProfile({ ...profile, about: e.target.value })} />
               </Grid>
            </Grid>
              
              <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Update</Button>
       </form>     
    {/* </Grid> */}
      </Paper>
    </Container>
  );
};

export default Profile;
