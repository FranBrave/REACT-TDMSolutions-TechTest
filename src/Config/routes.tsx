import React from 'react';

import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Users from 'pages/Users/Users';

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/users',
    element: <Users />
  }
];

export default routes;
