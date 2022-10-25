import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { Provider } from 'react-redux';
import store, { persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import MuiThemeProvider from 'theme';
import Axios from 'axios';
import Grid from '@mui/material/Grid';
import { User } from 'interfaces';

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    Axios.get('https://reqres.in/api/users?page=1&per_page=6').then(
      (response) => {
        setUsers(response.data.data);
        // console.log(users.data);
      }
    );
  }, []);

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MuiThemeProvider>
            <Header />
          </MuiThemeProvider>
        </PersistGate>
      </Provider>
      <Grid>
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.email}</li>
            ))}
          </ul>
        ) : (
          <p>No users to display</p>
        )}
        ;
      </Grid>
    </>
  );
};

export default Users;
