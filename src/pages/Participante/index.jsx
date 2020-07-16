import React from 'react';
import './style.css';
import logo from '../../assets/logo.png';

function Participante() {
  return (
    <>
      <div id="container-participante">
        <div id="main-participante">
          <div id="logo">
            <img src={logo} alt="logo" />
          </div>

          <div id="formulario">
            <h1>
              Cadastro
              <br /> de Participantes
            </h1>
            <form>
              <div className="field">
                <label htmlFor="nome">Nome: </label>
                <input type="text" id="nome" placeholder="Aluno..." />
              </div>
              <div className="field-group">
                <div className="field">
                  <label htmlFor="email-participante">Email:</label>
                  <input
                    type="email"
                    id="email-participante"
                    placeholder="Digite o Email..."
                  />
                </div>
                <div className="field">
                  <label htmlFor="senha-participante">Senha: </label>
                  <input
                    type="password"
                    id="senha-participante"
                    placeholder="Digite a Senha..."
                  />
                </div>
              </div>
              <div className="field-group">
                <div className="field">
                  <label htmlFor="universidade">Universidade: </label>
                  <select id="universidade">
                    <option>Uepb</option>
                    <option>Outras</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="curso">Curso: </label>
                  <input
                    type="text"
                    id="curso"
                    placeholder="Digite o Curso..."
                  />
                </div>
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

export default Participante;
