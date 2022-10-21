import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import Home from 'pages/Home';
import store, { persistor } from 'redux/store';
import MuiThemeProvider from 'theme';
const App: React.FC = () => {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MuiThemeProvider>
            <Home />
          </MuiThemeProvider>
        </PersistGate>
      </Provider>
    </Router>
  );
};

export default App;
