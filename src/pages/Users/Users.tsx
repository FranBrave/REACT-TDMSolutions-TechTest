import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { Provider } from 'react-redux';
import store, { persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import MuiThemeProvider from 'theme';
import Axios from 'axios';
import Grid from '@mui/material/Grid';

const Users: React.FC = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    Axios.get('https://reqres.in/api/users?page=1&per_page=6').then(
      (response) => {
        setUsers(response.data);
      }
    );
  }, []);

  return (
    <>
      {users.length > 0}
      <>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <MuiThemeProvider>
              <Header />
            </MuiThemeProvider>
          </PersistGate>
        </Provider>
        <Grid>
          <h1>You are at Users</h1>;
        </Grid>
      </>
    </>
  );
};

export default Users;
