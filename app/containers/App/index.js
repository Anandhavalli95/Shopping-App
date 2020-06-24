/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import ProductList from 'containers/ProductList/Loadable';
import ProductDetails from 'containers/ProductDetails/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

const AppWrapper = styled.div`
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/details/:id" component={ProductDetails} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  );
}
