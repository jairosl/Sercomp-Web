import React, { useState } from 'react';
import './style.css';
import logo from '../../assets/logo.png';

const SignIn = () => {
  const [email, setEmail] = useState('');

  function handleInputChange(event) {
    event.preventDefault();
    const inputEmail = event.target.value;
    setEmail(inputEmail);
  }

  return (
    <>
      <div className="container">
        <div className="main">
          <div className="logo">
            <img src={logo} alt="logo" color="#5C3BA0" />
          </div>

          <div className="form">
            <form>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                onChange={handleInputChange}
                placeholder="Digite seu Email..."
              />

              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                name="senha"
                id="senha"
                onChange={handleInputChange}
                placeholder="Digite sua Senha..."
              />
              <div className="divbtn">
                <button className="btn" type="submit">
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
