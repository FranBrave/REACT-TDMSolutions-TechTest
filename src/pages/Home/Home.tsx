import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import Header from './Header';

import store, { persistor } from 'redux/store';
import MuiThemeProvider from 'theme';
import { Box, Typography } from '@mui/material';

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MuiThemeProvider>
            <Header />
          </MuiThemeProvider>
        </PersistGate>
      </Provider>
      <Box>
        <Typography>You have to be logged to see the container</Typography>
      </Box>
    </>
  );
};

export default App;
