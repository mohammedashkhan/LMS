import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/courses';
import Faculty from './components/Home/FacultyCourses';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import CourseForm from './components/Home/NewCourse';
import Profile from './components/Profile/Profile';
import UserProfile from './components/Profile/viewProfile';

const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/home" exact component={Home} />
        <Route path="/addCourse" exact component={CourseForm} />
        <Route path="/faculty" exact component={Faculty} />
        <Route path="/view_profile" exact component={UserProfile} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;
