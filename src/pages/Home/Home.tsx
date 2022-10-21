import React from 'react';

import { Button, Switch, Typography, CircularProgress } from '@mui/material';

import { useCustomSelector, useCustomDispatch } from 'hooks/redux';
import { login } from 'redux/slices/auth';
import { setThemeMode } from 'redux/slices/settings';

import {
  AppbarStyled,
  AppbarContainerStyed,
  BodyContainerStyed,
  CardStyed
} from './HomeStyled';

const Home: React.FC = () => {
  const {
    auth: { accessToken, isLoading },
    settings: { themeMode }
  } = useCustomSelector((state) => state);
  const dispatch = useCustomDispatch();

  console.log(accessToken);

  const handleLogin = (): void => {
    dispatch(
      login({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      })
    );
  };

  const handleChangeTheme = (): void => {
    dispatch(setThemeMode(themeMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div>
      <AppbarStyled>
        <AppbarContainerStyed>
          <Typography variant="h6">TDM-Solutions Tech Test</Typography>
          <Switch onChange={handleChangeTheme} />
        </AppbarContainerStyed>
      </AppbarStyled>
      <BodyContainerStyed>
        <CardStyed>
          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>
          {isLoading && <CircularProgress size={24} />}
        </CardStyed>
      </BodyContainerStyed>
    </div>
  );
};

export default Home;
