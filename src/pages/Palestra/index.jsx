import React from 'react';
import './styles.css';
import logo from '../../assets/logo.png';
import voltaricon from '../../assets/voltaricon.png';

function Palestra() {
  return (
    <>
      <div id="container-palestra">
        <div className="conteudo">
          <div className="sair">
            <img src={voltaricon} alt="voltar" />
          </div>

          <div id="main-palestra">
            <img src={logo} alt="logo" />

            <div className="palestra">
              <h1>
                Cadastro
                <br /> de Palestras
              </h1>
              <form>
                <div className="field">
                  <label>Título da Palestra: </label>
                  <input
                    type="text"
                    className="titulo-input"
                    placeholder="Digite um título..."
                  />
                </div>
                <div className="field-group">
                  <div className="field">
                    <label>Nome do Palestrante: </label>
                    <input
                      type="text"
                      className="nome-palestrante-input"
                      placeholder="Digite o nome completo..."
                    />
                  </div>
                  <div className="field">
                    <label>Data: </label>
                    <input
                      type="text"
                      className="data-input"
                      placeholder="15/07/2020"
                    />
                  </div>
                  <div className="field">
                    <label>Hora: </label>
                    <input
                      type="text"
                      className="data-input"
                      placeholder="19:30"
                    />
                  </div>
                </div>
                <div className="field">
                  <label>Sala:</label>
                  <input
                    type="text"
                    className="sala-input"
                    placeholder="Ex: 202"
                  />
                </div>
                <div className="field">
                  <label>Descrição do Palestrante:</label>
                  <textarea className="descricao-input" />
                </div>
                <div className="button">
                  <button type="submit">Cadastrar</button>
                </div>
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
