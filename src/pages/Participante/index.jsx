import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiLoader } from 'react-icons/fi';
import { toast } from 'react-toastify';
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

  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState({ status: false, menssage: '' });

  const history = useHistory();

  const idAdmin = localStorage.getItem('id');

  const dataSchema = yup.object().shape({
    nome: yup.string().required(),
    email: yup.string().required().email(),
    senha: yup.string().required(),
    universidade: yup.string().required(),
    curso: yup.string().required(),
  });

  useEffect(() => {
    const id = localStorage.getItem('id');
    if (!id) history.push('/');
  }, [history]);

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
    setIsLoading(true);
    const dados = { nome, email, senha, universidade, curso };
    if (!dataSchema.isValidSync(dados)) {
      setError({ status: true, menssage: 'Campo ou dados invalidos' });
      setIsLoading(false);
      return null;
    }
    try {
      const cabecalho = { id: idAdmin };
      await api.post('/user', dados, { headers: cabecalho });
      setError({ status: false });
      setIsLoading(false);
      document.getElementById('formulario-participante').reset();
      toast.success('Participante Criado com Sucesso', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });

      return null;
    } catch (Error) {
      setError({ status: true, menssage: `${Error.response.data.error}` });

      setIsLoading(false);

      return null;
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
            </form>
            {!isloading ? (
              <div className="button">
                <button
                  id="voltar-palestra"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    history.push('/dashboard');
                  }}
                >
                  Voltar
                </button>
                <button type="submit" onClick={handleSubmit}>
                  Cadastrar
                </button>
              </div>
            ) : (
              <div id="loading-Palestra">
                <div id="loadding-container">
                  <div id="loadding-container-icon">
                    <FiLoader size={25} />
                  </div>
                  <div id="loadding-container-text">Carregando</div>
                </div>
              </div>
            )}
            {error.status && <p id="error-palestra">*{error.menssage}</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Participante;
