import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

function routes() {
  return (
    <BrowserRouter>
      <Route component={SignIn} path="/" exact />
      <Route component={Dashboard} path="/dashboard" />
    </BrowserRouter>
  );
}

export default routes;
