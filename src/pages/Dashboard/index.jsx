import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/logo.png';
import voltaricon from '../../assets/voltaricon.png';

function Dashboard() {
  return (
    <>
      <div id="container-dashboard">
        <div className="conteudo">
          <div className="sair">
            <img src={voltaricon} alt="voltar" />
          </div>

          <div id="main-dashboard">
            <img src={logo} alt="logo" />

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
            <p>Participantes: 3</p>
          </div>

          <div className="vazio" />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
