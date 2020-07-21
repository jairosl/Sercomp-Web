import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import { FiLoader } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
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

  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState({ status: false, menssage: '' });

  const history = useHistory();

  const idAdmin = localStorage.getItem('id');

  const dataSchema = yup.object().shape({
    titulo: yup.string().required(),
    nomepalestrante: yup.string().required(),
    data: yup.string().required(),
    horario: yup.string().required(),
    sala: yup.string().required(),
    descricao: yup.string().required(),
  });

  useEffect(() => {
    const id = localStorage.getItem('id');
    if (!id) history.push('/');
  }, [history]);

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
    setIsLoading(true);
    const dados = {
      titulo,
      nomepalestrante: nome,
      data,
      horario: hora,
      sala,
      descricao,
    };
    if (!dataSchema.isValidSync(dados)) {
      setError({ status: true, menssage: 'Campo ou dados invalidos' });
      setIsLoading(false);
      return null;
    }
    try {
      const cabecalho = { id: idAdmin };
      await api.post('/palestra', dados, { headers: cabecalho });
      setError({ status: false });
      document.getElementById('formulario-palestra').reset();
      setIsLoading(false);
      toast.success('Palestra Criada com Sucesso', {
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
            </form>
            {!isloading ? (
              <div className="button">
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

export default Palestra;
