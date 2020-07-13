import React, { useState } from 'react';
import './style.css';

const [email, setEmail] = useState('');
function handleInputChange(event) {
  const inputEmail = event.target.value;
  setEmail(inputEmail);
}

function SignIn() {
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
}

export default SignIn;
