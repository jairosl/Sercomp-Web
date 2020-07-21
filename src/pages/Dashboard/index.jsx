import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/logo.png';
import Loading from '../LoadingListagem';

import api from '../../services/api';

function Dashboard() {
  const history = useHistory();
  const idAdmin = localStorage.getItem('id');

  const [qntParticipantes, setQntParticipantes] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem('id');
    if (!id) history.push('/');
  }, [history]);

  useEffect(() => {
    async function fetchDataUser() {
      const cabecalho = { id: idAdmin };
      const response = await api.get('/user', { headers: cabecalho });
      const qnt = response.data;
      setQntParticipantes(qnt.length);
    }
    fetchDataUser();
  }, [idAdmin]);

  return (
    <>
      {qntParticipantes ? (
        <div id="container-dashboard">
          <div className="conteudo">
            <div className="vazio" />

            <div id="main-dashboard">
              <img src={logo} alt="logo" />
              <p>Participantes: {qntParticipantes}</p>

              <div id="nav-dashboard">
                <ul>
                  <li>
                    <Link to="/palestra">Cadastrar Palestra</Link>
                  </li>
                  <li>
                    <Link to="/minicurso">Cadastrar Minicurso</Link>
                  </li>
                  <li>
                    <Link to="/participante">Cadastrar Participantes</Link>
                  </li>
                  <li>
                    <Link to="/listagem">Listagem dos Dados</Link>
                  </li>
                </ul>
              </div>
              <div id="logout">
                <Link to="/" id="logout">
                  Sair
                </Link>
              </div>
            </div>

            <div className="vazio" />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Dashboard;
