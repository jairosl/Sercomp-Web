import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import './styles.css';
import * as yup from 'yup';
import logo from '../../assets/logo.png';

import api from '../../services/api';

function Palestra() {
  const [titulo, setTitulo] = useState('');
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [sala, setSala] = useState('');
  const [descricao, setDescricao] = useState('');

  const idAdmin = localStorage.getItem('id');

  const dataSchema = yup.object().shape({
    titulo: yup.string().required(),
    nomepalestrante: yup.string().required(),
    data: yup.string().required(),
    horario: yup.string().required(),
    sala: yup.string().required(),
    descricao: yup.string().required(),
  });

  function handleInputTitulo(event) {
    event.preventDefault();
    const inputTitulo = event.target.value;
    setTitulo(inputTitulo);
  }

  function handleInputNome(event) {
    event.preventDefault();
    const inputNome = event.target.value;
    setNome(inputNome);
  }

  function handleInputData(event) {
    event.preventDefault();
    const inputData = event.target.value;
    setData(inputData);
  }

  function handleInputHora(event) {
    event.preventDefault();
    const inputHora = event.target.value;
    setHora(inputHora);
  }

  function handleInputSala(event) {
    event.preventDefault();
    const inputSala = event.target.value;
    setSala(inputSala);
  }

  function handleInputDescricao(event) {
    event.preventDefault();
    const inputDescricao = event.target.value;
    setDescricao(inputDescricao);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const dados = {
      titulo,
      nomepalestrante: nome,
      data,
      horario: hora,
      sala,
      descricao,
    };
    if (!dataSchema.isValidSync(dados)) {
      console.log('notNull');
    }
    try {
      const cabecalho = { id: idAdmin };
      await api.post('/palestra', dados, { headers: cabecalho });
      document.getElementById('formulario-palestra').reset();
    } catch (Error) {
      console.log(Error.response.data.error);
    }
  }

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
            <form id="formulario-palestra">
              <div className="field">
                <label>Título da Palestra: </label>
                <input
                  type="text"
                  className="titulo-input"
                  placeholder="Digite um título..."
                  onChange={handleInputTitulo}
                />
              </div>

              <div className="field-group">
                <div className="field">
                  <label>Nome do Palestrante: </label>
                  <input
                    type="text"
                    className="nome-palestrante-input"
                    placeholder="Digite o nome completo..."
                    onChange={handleInputNome}
                  />
                </div>

                <div className="field">
                  <label>Data: </label>
                  <InputMask
                    className="data-input"
                    mask="99/99/9999"
                    maskPlaceholder="dd/mm/yyyy"
                    placeholder="dd/mm/yyyy"
                    onChange={handleInputData}
                  />
                </div>

                <div className="field">
                  <label>Hora: </label>
                  <InputMask
                    className="hora-input"
                    placeholder="00:00"
                    mask="99:99"
                    maskPlaceholder="hh:mm"
                    onChange={handleInputHora}
                  />
                </div>

                <div className="field">
                  <label>Sala:</label>
                  <input
                    type="text"
                    className="sala-input"
                    placeholder="Ex: 202"
                    onChange={handleInputSala}
                  />
                </div>
              </div>

              <div className="field">
                <label>Descrição do Palestrante:</label>
                <textarea
                  className="descricao-input"
                  placeholder="Descreva o palestrante..."
                  onChange={handleInputDescricao}
                />
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

export default Palestra;
