import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import SignIn from './pages/SignIn';

function routes() {
  return (
    <BrowserRouter>
      <Route component={SignIn} path="/" exact />
    </BrowserRouter>
  );
}

export default routes;
