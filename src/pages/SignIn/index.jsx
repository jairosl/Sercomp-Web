import React, { useState, useEffect } from 'react';
import { FaUserTie } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import './style.css';
import logo from '../../assets/logo.png';

import api from '../../services/api';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState({});

  const history = useHistory();

  const dataSchema = yup.object().shape({
    email: yup.string().email().required(),
    senha: yup.string().required(),
  });

  useEffect(() => {
    localStorage.clear();
  }, []);

  function handleInputChangeEmail(event) {
    event.preventDefault();
    const inputEmail = event.target.value;
    setEmail(inputEmail);
  }

  function handleInputChangeSenha(event) {
    event.preventDefault();
    const inputSenha = event.target.value;
    setSenha(inputSenha);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const data = { email, senha };
    if (!dataSchema.isValidSync(data)) {
      setError({ status: true, menssage: 'Usuario ou Senha invalido' });
    } else {
      setError({ status: false });
      try {
        const response = await api.post('/admin', {
          email,
          senha,
        });

        localStorage.setItem('id', `${response.data.id}`);
        history.push('/dashboard');
      } catch (Error) {
        setError({ status: true, menssage: ` ${Error.response.data.error}` });
      }
    }
  }

  return (
    <>
      <div className="container">
        <div className="main">
          <div className="logo">
            <img src={logo} alt="logo" color="#5C3BA0" />
          </div>

          <div className="form">
            <FaUserTie size={120} color="#5C3BA0" />
            <form>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                onChange={handleInputChangeEmail}
                placeholder="Digite seu Email..."
              />

              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                name="senha"
                id="senha"
                onChange={handleInputChangeSenha}
                placeholder="Digite sua Senha..."
              />
              {error.status && <p id="error">*{error.menssage}</p>}
            </form>
            <button className="btn" type="submit" onClick={handleSubmit}>
              Entrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
