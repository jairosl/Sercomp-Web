import React, { useState, useEffect } from 'react';
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';
import { FiLoader } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import './style.css';
import * as yup from 'yup';
import logo from '../../assets/logo.png';

import api from '../../services/api';

function Minicurso() {
  const [titulo, setTitulo] = useState('');
  const [professor, setProfessor] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [sala, setSala] = useState('');
  const [qntAlunos, setQntAlunos] = useState(0);
  const [descricao, setDescricao] = useState('');

  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState({ status: false, menssage: '' });

  const idAdmin = localStorage.getItem('id');

  const history = useHistory();

  const dataSchema = yup.object().shape({
    titulo: yup.string().required(),
    professor: yup.string().required(),
    data: yup.string().required(),
    horario: yup.string().required(),
    sala: yup.string().required(),
    qntAlunos: yup.number().required(),
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

  function handleInputProfessor(event) {
    event.preventDefault();
    const inputProfessor = event.target.value;
    setProfessor(inputProfessor);
  }

  function handleInputData(event) {
    event.preventDefault();
    const inputData = event.target.value;
    setData(inputData);
  }

  function handleInputHorario(event) {
    event.preventDefault();
    const inputHorario = event.target.value;
    setHorario(inputHorario);
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

  function handleInputQntAlunos(event) {
    event.preventDefault();
    const inputQntAlunos = event.target.value;
    setQntAlunos(inputQntAlunos);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    const dados = {
      titulo,
      professor,
      sala,
      data,
      horario,
      qntAlunos,
      descricao,
    };
    if (!dataSchema.isValidSync(dados)) {
      setError({ status: true, menssage: 'Campo ou dados invalidos' });
      setIsLoading(false);
      return null;
    }
    try {
      const cabecalho = { id: idAdmin };
      await api.post(
        '/minicurso',
        {
          titulo,
          professor,
          sala,
          data,
          horario,
          qnt_alunos: qntAlunos,
          descricao,
        },
        { headers: cabecalho }
      );
      document.getElementById('formulario-minicurso').reset();
      setIsLoading(false);

      toast.success('Minicurso Criado com Sucesso', {
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
      <div id="container-minicurso">
        <div id="main-minicurso">
          <div id="logo-minicurso">
            <img src={logo} alt="logo" />
          </div>

          <div id="formulario">
            <h1>
              Cadastro
              <br /> do Minicurso
            </h1>
            <form id="formulario-minicurso">
              <div className="field">
                <label htmlFor="titulo">Título do Minicurso:</label>
                <input
                  type="text"
                  id="titulo"
                  placeholder="Digite o título..."
                  onChange={handleInputTitulo}
                />
              </div>
              <div className="field">
                <label htmlFor="professor">Professor:</label>
                <input
                  type="text"
                  id="professor"
                  placeholder="Digite o nome..."
                  onChange={handleInputProfessor}
                />
              </div>
              <div className="field-group">
                <div className="field">
                  <label htmlFor="capacidade">Capacidade:</label>
                  <input
                    type="number"
                    id="capacidade"
                    placeholder="N°"
                    onChange={handleInputQntAlunos}
                  />
                </div>
                <div className="field">
                  <label htmlFor="sala">Sala:</label>
                  <input
                    type="text"
                    id="sala"
                    placeholder="Sala"
                    onChange={handleInputSala}
                  />
                </div>
                <div className="field">
                  <label>Data:</label>
                  <InputMask
                    id="data-input"
                    mask="99/99/9999"
                    maskPlaceholder="dd/mm/yyyy"
                    placeholder="dd/mm/yyyy"
                    onChange={handleInputData}
                  />
                </div>
                <div className="field">
                  <label>Hora: </label>
                  <InputMask
                    id="hora-input"
                    placeholder="00:00"
                    mask="99:99"
                    maskPlaceholder="hh:mm"
                    onChange={handleInputHorario}
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

export default Minicurso;
