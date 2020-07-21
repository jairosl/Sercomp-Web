import React from 'react';
import { FiLoader } from 'react-icons/fi';
import logo from '../../assets/logo.png';
import './style.css';

function LoadingListagem() {
  return (
    <>
      <div id="container-listagem">
        <div id="main-listagem">
          <div id="logo">
            <img src={logo} alt="logo" />
          </div>
          <div id="formulario">
            <div id="loading-container">
              <FiLoader size={35} />
              <span>Carregando</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingListagem;
