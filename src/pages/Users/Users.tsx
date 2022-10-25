import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { Provider } from 'react-redux';
import store, { persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import MuiThemeProvider from 'theme';
import Axios from 'axios';
import Grid from '@mui/material/Grid';
import { User } from 'interfaces';
import { Avatar, Box, Typography } from '@mui/material';

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    Axios.get('https://reqres.in/api/users?page=1&per_page=6').then(
      (response) => {
        setUsers(response.data.data);
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
          <>
            {users.map((user) => (
              <Box key={user.last_name}>
                <Grid
                  className="user-card"
                  container
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  gap="0.6rem"
                >
                  <Box
                    sx={{
                      border: '1px solid none',
                      m: '5px',
                      borderRadius: '10px',
                      boxShadow: ' 0px 18px 30px -10px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    <Box display="flex" flexDirection="column">
                      <Avatar
                        src={user.avatar}
                        sx={{
                          alignSelf: 'center',
                          height: { lg: '150px', sm: '120px', xs: '150px' },
                          width: { lg: '150px', sm: '120px', xs: '150px' },
                          border: '5px solid white'
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        textAlign: 'center',
                        ml: '10px',
                        mt: '10px',
                        textTransform: 'capitalize',
                        color: 'orange',
                        fontWeight: 'bold',
                        fontSize: {
                          lg: '25px',
                          xs: '20px'
                        }
                      }}
                    >
                      {user.email}
                    </Typography>
                    <Typography
                      sx={{
                        m: '10px',
                        textAlign: 'center',
                        fontWeight: '900',
                        color: 'darkgray',
                        textTransform: 'none',
                        fontSize: {
                          lg: '15px',
                          xs: '13px'
                        }
                      }}
                    >
                      First name: {user.first_name}
                    </Typography>
                    <Typography
                      sx={{
                        m: '10px',
                        textAlign: 'center',
                        fontWeight: '900',
                        color: 'darkgray',
                        textTransform: 'none',
                        fontSize: {
                          lg: '15px',
                          xs: '13px'
                        }
                      }}
                    >
                      Last name: {user.last_name}
                    </Typography>
                  </Box>
                </Grid>
              </Box>
            ))}
          </>
        ) : (
          <p>No users to display</p>
        )}
        ;
      </Grid>
    </>
  );
};

export default Users;
