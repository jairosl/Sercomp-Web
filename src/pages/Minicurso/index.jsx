import React from 'react';
import InputMask from 'react-input-mask';
import './style.css';
import logo from '../../assets/logo.png';

function Minicurso() {
  return (
    <>
      <div id="container-minicurso">
        <div id="main-minicurso">
          <div id="logo-minicurso">
            <img src={logo} alt="logo" />
          </div>

          <div id="formulario">
            <h1>
              Cadastro
              <br /> do Minicurso
            </h1>
            <form>
              <div className="field">
                <label htmlFor="titulo">Título do Minicurso:</label>
                <input
                  type="text"
                  id="titulo"
                  placeholder="Digite o título..."
                />
              </div>
              <div className="field">
                <label htmlFor="professor">Professor:</label>
                <input
                  type="text"
                  id="professor"
                  placeholder="Digite o nome..."
                />
              </div>
              <div className="field-group">
                <div className="field">
                  <label htmlFor="capacidade">Capacidade:</label>
                  <input type="text" id="capacidade" placeholder="N°" />
                </div>
                <div className="field">
                  <label htmlFor="sala">Sala:</label>
                  <input type="text" id="sala" placeholder="Sala..." />
                </div>
                <div className="field">
                  <label>Data:</label>
                  <InputMask
                    id="data-input"
                    mask="99/99/9999"
                    maskPlaceholder="dd/mm/yyyy"
                    placeholder="dd/mm/yyyy"
                  />
                </div>
                <div className="field">
                  <label>Hora: </label>
                  <InputMask
                    id="hora-input"
                    placeholder="00:00"
                    mask="99:99"
                    maskPlaceholder="hh:mm"
                  />
                </div>
              </div>
              <div className="field">
                <label>Descrição do Palestrante:</label>
                <textarea
                  className="descricao-input"
                  placeholder="Descreva o palestrante..."
                />
              </div>
              <div className="button">
                <button type="submit">Cadastrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Minicurso;
