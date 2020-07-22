import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiLoader } from 'react-icons/fi';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import logo from '../../assets/logo.png';
import Loading from '../LoadingListagem';
import './style.css';

import api from '../../services/api';

function CadastroMinicurso() {
  const [email, setEmail] = useState('');
  const [selected, setSelected] = useState('');
  const [options, setOptions] = useState(null);

  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState({ status: false, menssage: '' });
  const idAdmin = localStorage.getItem('id');

  const history = useHistory();

  const dataSchema = yup.object().shape({
    email: yup.string().required().email(),
    selected: yup.string().required(),
  });

  useEffect(() => {
    const id = localStorage.getItem('id');
    if (!id) history.push('/');
  }, [history]);

  useEffect(() => {
    async function fetchDataUser() {
      const cabecalho = { id: idAdmin };
      const response = await api.get('/minicurso', { headers: cabecalho });
      setOptions(response.data);
      return null;
    }

    fetchDataUser();
  }, [idAdmin]);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    const dados = { email, selected };
    if (!dataSchema.isValidSync(dados)) {
      setError({ status: true, menssage: 'Campo ou dados invalidos' });
      setIsLoading(false);
      return null;
    }
    try {
      const idMinicurso = options.filter((op) => op.titulo === selected);
      const cabecalho = { id: idAdmin };
      await api.post(
        `/minicurso/${idMinicurso[0].id}/cadastrar`,
        { email },
        { headers: cabecalho }
      );
      setError({ status: false });
      setIsLoading(false);
      document.getElementById('formulario-palestra').reset();
      toast.success('Participante cadastrado no mincurso com Sucesso!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return null;
    } catch (Error) {
      setError({
        status: true,
        menssage: `${Error.response.data.error}`,
      });
      setIsLoading(false);
      return null;
    }
    // const idMinicurso = options.filter((op) => op.titulo === selected);
    // console.log(idMinicurso[0].id);
  }

  return (
    <>
      {options ? (
        <div id="container-palestra">
          <div id="main-palestra">
            <img src={logo} alt="logo" />

            <div className="palestra">
              <h1>
                Cadastro Participante
                <br /> no Minicurso
              </h1>
              <form id="formulario-palestra">
                <div className="field">
                  <label>Email do Participante: </label>
                  <input
                    type="text"
                    className="titulo-input"
                    id="Email-Participante"
                    placeholder="Digite um título..."
                    onChange={(e) => {
                      e.preventDefault();
                      setEmail(e.target.value);
                    }}
                  />
                  <div className="field">
                    <label htmlFor="universidade">Selecione Minicurso: </label>
                    <select
                      id="universidade"
                      onChange={(e) => {
                        e.preventDefault();
                        setSelected(e.target.value);
                      }}
                    >
                      {options.map((op) => (
                        <option key={op.id}>{op.titulo}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </form>
              <div id="divisor-cadastro" />
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
      ) : (
        <Loading />
      )}
    </>
  );
}

export default CadastroMinicurso;
