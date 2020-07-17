import React from 'react';
import InputMask from 'react-input-mask';
import './styles.css';
import logo from '../../assets/logo.png';

function Palestra() {
  return (
    <>
      <div id="container-palestra">
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
                  <InputMask
                    className="data-input"
                    mask="99/99/9999"
                    maskPlaceholder="dd/mm/yyyy"
                    placeholder="dd/mm/yyyy"
                  />
                </div>

                <div className="field">
                  <label>Hora: </label>
                  <InputMask
                    className="hora-input"
                    placeholder="00:00"
                    mask="99:99"
                    maskPlaceholder="hh:mm"
                  />
                </div>

                <div className="field">
                  <label>Sala:</label>
                  <input
                    type="text"
                    className="sala-input"
                    placeholder="Ex: 202"
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

export default Palestra;
