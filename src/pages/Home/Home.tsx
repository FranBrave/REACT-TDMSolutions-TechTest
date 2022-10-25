import React from 'react';

import { Box, Grid } from '@mui/material';
import { Provider } from 'react-redux';
import store, { persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import MuiThemeProvider from 'theme';
import Header from 'components/Header';

const Home: React.FC = () => {
  return (
    <Box>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MuiThemeProvider>
            <Header />
          </MuiThemeProvider>
        </PersistGate>
      </Provider>
      <Grid>
        <h1>You are at Home</h1>;
      </Grid>
    </Box>
  );
};

export default Home;
