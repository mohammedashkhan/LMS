import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import * as actionType from '../../constants/actionTypes';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';
import HttpsIcon from '@material-ui/icons/Https';
import HomeIcon from '@material-ui/icons/Home';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import PersonIcon from '@material-ui/icons/Person';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: '10px 50px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  facultyButton:{
    marginLeft: '10px',
  }
 
}));

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Learning Management System
          </Typography>
          { user?.result.role == 1 && 
          <Button className={classes.buttonSubmit} color="action" variant="contained" component={Link} to="/home"    startIcon={<HomeIcon />} >Home</Button>}
          { user && 
          <Button className={classes.facultyButton} color="action" variant="contained" component={Link} to="/view_profile"    startIcon={<PersonIcon />} >Profile</Button>}
          
          { user?.result.role == 2 && 
          <Button className={classes.facultyButton} variant="contained" component={Link} to="/faculty"    startIcon={<PersonPinIcon />} >Faculty</Button>}
          <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Button variant="contained" startIcon={<ExitToAppIcon />} className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
           <Button component={Link} to="/auth" startIcon={<HttpsIcon />} className={classes.facultyButton} variant="contained" color="default">SignIn</Button>
        )}
      </Toolbar>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
