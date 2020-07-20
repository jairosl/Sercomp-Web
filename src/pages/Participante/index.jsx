import React, { useState } from 'react';
import './style.css';
import * as yup from 'yup';
import logo from '../../assets/logo.png';

import api from '../../services/api';

function Participante() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [universidade, setUniversidade] = useState('uepb');
  const [curso, setCurso] = useState('');

  const idAdmin = localStorage.getItem('id');

  const dataSchema = yup.object().shape({
    nome: yup.string().required(),
    email: yup.string().required().email(),
    senha: yup.string().required(),
    universidade: yup.string().required(),
    curso: yup.string().required(),
  });

  function handleInputNome(event) {
    event.preventDefault();
    const inputNome = event.target.value;
    setNome(inputNome);
  }

  function handleInputEmail(event) {
    event.preventDefault();
    const inputEmail = event.target.value;
    setEmail(inputEmail);
  }

  function handleInputSenha(event) {
    event.preventDefault();
    const inputSenha = event.target.value;
    setSenha(inputSenha);
  }

  function handleInputUniversidade(event) {
    event.preventDefault();
    const inputUniversidade = event.target.value;
    setUniversidade(inputUniversidade);
  }

  function handleInputCurso(event) {
    event.preventDefault();
    const inputCurso = event.target.value;
    setCurso(inputCurso);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const dados = { nome, email, senha, universidade, curso };
    if (!dataSchema.isValidSync(dados)) {
      console.log('erro');
    } else {
      try {
        const cabecalho = { id: idAdmin };
        await api.post('/user', dados, { headers: cabecalho });
        document.getElementById('formulario-participante').reset();
      } catch (Error) {
        console.log(Error.response.data.error);
      }
    }
  }

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
            <form id="formulario-participante">
              <div className="field">
                <label htmlFor="nome">Nome: </label>
                <input
                  type="text"
                  id="nome"
                  placeholder="Aluno..."
                  onChange={handleInputNome}
                />
              </div>
              <div className="field-group">
                <div className="field">
                  <label htmlFor="email-participante">Email:</label>
                  <input
                    type="email"
                    id="email-participante"
                    placeholder="Digite o Email..."
                    onChange={handleInputEmail}
                  />
                </div>
                <div className="field">
                  <label htmlFor="senha-participante">Senha: </label>
                  <input
                    type="password"
                    id="senha-participante"
                    placeholder="Digite a Senha..."
                    onChange={handleInputSenha}
                  />
                </div>
              </div>
              <div className="field-group">
                <div className="field">
                  <label htmlFor="universidade">Universidade: </label>
                  <select id="universidade" onChange={handleInputUniversidade}>
                    <option>uepb</option>
                    <option>outras</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="curso">Curso: </label>
                  <input
                    type="text"
                    id="curso"
                    placeholder="Digite o Curso..."
                    onChange={handleInputCurso}
                  />
                </div>
              </div>
              <div className="button">
                <button type="submit" onClick={handleSubmit}>
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Participante;
