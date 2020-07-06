import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Product from 'containers/Products';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
// eslint-disable-next-line import/no-cycle
import Login from 'containers/Login';

import * as firebase from 'firebase';
import ProtectedRouteHoc from '../../utils/protectedRoute';
import firebaseConfig from '../../firebase.config';

const AppWrapper = styled.div`
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

firebase.initializeApp(firebaseConfig);
export const AuthContext = React.createContext(null);
export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  function readSession() {
    const user = window.sessionStorage.getItem(
      `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`,
    );
    if (user) setLoggedIn(true);
  }
  useEffect(() => {
    readSession();
  }, []);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      <AppWrapper>
        <Switch>
          <ProtectedRouteHoc
            key="products"
            isLoggedIn={isLoggedIn}
            path="/products"
            component={props => <Product {...props} />}
            public={false}
          />
          <Route path="/" component={Login} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </AppWrapper>
    </AuthContext.Provider>
  );
}
