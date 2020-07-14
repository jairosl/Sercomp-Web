import React, { useState } from 'react';
import { FaUserTie } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import './style.css';
import logo from '../../assets/logo.png';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const history = useHistory();

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

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email, senha);
    history.push('/dashboard');
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
