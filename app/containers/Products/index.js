import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProductList from 'containers/ProductList/Loadable';
import ProductDetails from 'containers/ProductDetails/Loadable';
import AppBar from 'containers/AppBar';

export default function App() {
  return (
    <React.Fragment>
      <AppBar />
      <Switch>
        <Route exact path="/products" component={ProductList} />
        <Route exact path="/products/details/:id" component={ProductDetails} />
      </Switch>
    </React.Fragment>
  );
}
