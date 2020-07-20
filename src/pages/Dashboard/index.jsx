import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/logo.png';

function Dashboard() {
  const history = useHistory();

  useEffect(() => {
    const id = localStorage.getItem('id');
    if (!id) history.push('/');
  }, []);
  return (
    <>
      <div id="container-dashboard">
        <div className="conteudo">
          <div className="vazio" />

          <div id="main-dashboard">
            <img src={logo} alt="logo" />
            <p>Participantes: 3</p>

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
    </>
  );
}

export default Dashboard;
