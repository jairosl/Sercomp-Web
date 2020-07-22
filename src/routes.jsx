import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Palestra from './pages/Palestra';
import Minicurso from './pages/Minicurso';
import Paricipante from './pages/Participante';
import Listagem from './pages/Listagem';
import CadastroMinicurso from './pages/CadastroMinicurso';

function routes() {
  return (
    <BrowserRouter>
      <Route component={SignIn} path="/" exact />
      <Route component={Dashboard} path="/dashboard" />
      <Route component={Palestra} path="/palestra" />
      <Route component={Minicurso} path="/minicurso" />
      <Route component={Paricipante} path="/participante" />
      <Route component={Listagem} path="/listagem" />
      <Route component={CadastroMinicurso} path="/cadastro" />
    </BrowserRouter>
  );
}

export default routes;
