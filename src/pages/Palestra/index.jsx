import React from 'react';
import './styless.css';
import logo from '../../assets/logo.png';
import voltaricon from '../../assets/voltaricon.png';

function Palestra() {
  return (
    <>
      <div id="container-dashboard">
        <div className="conteudo">
          <div className="sair">
            <img src={voltaricon} alt="voltar" />
          </div>

          <div id="main-dashboard">
            <img src={logo} alt="logo" />

            <div className="palestra">
              <h1>Cadastro de Palestras</h1>
              <form>
                <label>Título da Palestra: </label>
                <br />
                <input
                  type="text"
                  className="titulo-input"
                  placeholder="Digite um título..."
                />
                <label>Nome do Palestrante: </label>
                <br />
                <input
                  type="text"
                  className="nome-palestrante-input"
                  placeholder="Digite o nome completo..."
                />
                <label>Data: </label>
                <input
                  type="text"
                  className="data-input"
                  placeholder="Ex: 15/07"
                />
                <label>Hora: </label>
                <input
                  type="text"
                  className="data-input"
                  placeholder="Ex: 19:30"
                />
                <label>Sala:</label>
                <br />
                <input
                  type="text"
                  className="sala-input"
                  placeholder="Ex: 202"
                />
                <br />
                <label>Descrição do Palestrante:</label>
                <br />
                <input type="text" className="descricao-input" />
              </form>
            </div>
          </div>
          <div className="vazio" />
        </div>
      </div>
    </>
  );
}

export default Palestra;
