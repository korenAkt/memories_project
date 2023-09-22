import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container, IconButton, InputAdornment, TextField } from '@mui/material';
import { useHistory } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { signin, signup } from '../../actions/auth';
import useStyles from './styles';


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const SignUp = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);

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

  // regex 
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const namePattern = /^[A-Za-z\s]+$/;
  const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d{4,})(?=.*[!@%$#^&*()_\-*])[A-Za-z\d!@%$#^&*()_\-*]{8,}$/;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={6}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{isSignup ? 'Sign up' : 'Sign in'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="firstName"
                    label="First Name"
                    variant="outlined"
                    required
                    fullWidth
                    autoFocus
                    onChange={handleChange}
                    value={form.firstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="lastName"
                    label="Last Name"
                    variant="outlined"
                    required
                    fullWidth
                    onChange={handleChange}
                    value={form.lastName}
                  />
                </Grid>
              </>
            )}
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email Address"
                variant="outlined"
                required
                fullWidth
                type="email"
                onChange={handleChange}
                value={form.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                label="Password"
                variant="outlined"
                required
                fullWidth
                type={showPassword ? 'text' : 'password'}
                onChange={handleChange}
                value={form.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            {isSignup && (
              <Grid item xs={12}>
                <TextField
                  name="confirmPassword"
                  label="Repeat Password"
                  variant="outlined"
                  required
                  fullWidth
                  type="password"
                  onChange={handleChange}
                  value={form.confirmPassword}
                />
              </Grid>
            )}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;
