import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import routes from './Config/routes';

import MuiThemeProvider from 'theme';
import Footer from 'components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <MuiThemeProvider>
              <Routes>
                {routes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </MuiThemeProvider>
          </PersistGate>
        </Provider>
      </Router>
      <Footer />
    </>
  );
};

export default App;
