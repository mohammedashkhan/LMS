import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField,Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

// import Icon from './icon';
import { signin, signup } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';
import useStyles from './styles';
import Input from './Input';

const initialState = { name: '', role: '', email: '', password: ''};

const SignUp = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
  };

  

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && (
            <>
            {/* <TextField
                    id="outlined-select-currency-native" 
                    select      
                    name="s_id" 
                    variant="outlined" 
                    label="Select Student" 
                    fullWidth 
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={classDetailData.s_id} 
                    SelectProps={{ 
                        native: true,
                    }} 
                    onChange={(e) => setClassDetailData({ ...classDetailData, s_id: e.target.value })} >
                        <option aria-label="None" value="None">None</option>
                         <option value={student._id}>

                         </option>
                     
                </TextField> */}
              <Input name="name" label="Name" handleChange={handleChange} autoFocus fullWidth />
              <Input name="role" type="number" min="1"  max="2" label="Role (Student - 1, Faculty - 2)" handleChange={handleChange} autoFocus fullWidth />
              {/* <Input
                    fullWidth      
                    name="role" 
                    variant="outlined" 
                    label="Select Role (Enter Student or Faculty)" 
                    fullWidth 
                   
                    handleChange={handleChange} /> */}
                         {/* <option aria-label="None" value="None">None</option>
                         <option key={0} value={0}>Student</option>
                         <option key={1} value={1}>Faculty</option> */}           
            </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            { isSignup ? 'Sign Up' : 'Sign In' }
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;
