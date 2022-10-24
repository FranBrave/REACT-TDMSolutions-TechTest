import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Users from 'pages/Users/Users';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
