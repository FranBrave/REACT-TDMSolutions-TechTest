import React, { useEffect, useState, SyntheticEvent } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { login } from 'redux/slices/auth';
import { useCustomDispatch } from 'hooks/redux';

import { Provider } from 'react-redux';
import store, { persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import MuiThemeProvider from 'theme';
import Header from 'components/Header';
import { useUserLogged } from 'hooks/useUserLogged';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function Login(): any {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = useUserLogged();
  const navigate = useNavigate();
  const dispatch = useCustomDispatch();

  const handleSubmit = (e: SyntheticEvent): any => {
    e.preventDefault();
    dispatch(
      login({
        email,
        password
      })
    );
  };

  useEffect(() => {
    if (auth) {
      navigate('/users');
    }
  }, [auth, navigate]);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MuiThemeProvider>
            <Header />
          </MuiThemeProvider>
        </PersistGate>
      </Provider>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            {!auth && <p>Error: incorrect email or password</p>}
            <Grid container>
              <Grid item>
                <Link href="/" variant="body2">
                  Return at Home
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
