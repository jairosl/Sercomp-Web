import React, { useState } from 'react';
import './style.css';

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
          <div className="logo" />

          <div className="form">
            <form>
              <fieldset>
                <legend>
                  <h2>Dados</h2>
                </legend>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={handleInputChange}
                />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
