import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Product from './routes/Product';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Product} />
        <Route path="/product" exact component={Product} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
