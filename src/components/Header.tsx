import React from 'react';

import {
  Button,
  Switch,
  Typography,
  Box,
  IconButton,
  AppBar,
  Toolbar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';

import { useCustomSelector, useCustomDispatch } from 'hooks/redux';

import { setThemeMode } from 'redux/slices/settings';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const {
    settings: { themeMode }
  } = useCustomSelector((state) => state);
  const dispatch = useCustomDispatch();

  // console.log(accessToken);

  const handleChangeTheme = (): void => {
    dispatch(setThemeMode(themeMode === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              TDM-Solutions Tech Test
            </Typography>

            <Button
              sx={{ mr: '20px', ml: '20px' }}
              component={Link}
              to="/login"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
            <LightModeIcon />
            <Switch onChange={handleChangeTheme} />
            <ModeNightIcon />
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
};

export default Header;
