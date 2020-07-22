import React, { useEffect, useState } from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';
import Loading from '../LoadingListagem';
import logo from '../../assets/logo.png';

import api from '../../services/api';

function Listagem() {
  const history = useHistory();
  const [palestra, setPalestra] = useState(null);
  const [user, setUser] = useState([]);
  const [minicurso, setMinicurso] = useState([]);

  const idAdmin = localStorage.getItem('id');

  useEffect(() => {
    const id = localStorage.getItem('id');
    if (!id) history.push('/');
  }, [history]);

  useEffect(() => {
    async function fetchDataPalestra() {
      const response = await api.get('/palestra');
      setPalestra(response.data);
      return null;
    }
    fetchDataPalestra();
  }, []);

  useEffect(() => {
    async function fetchDataUser() {
      const cabecalho = { id: idAdmin };
      const response = await api.get('/user', { headers: cabecalho });
      setUser(response.data);
      return null;
    }

    fetchDataUser();
  }, [idAdmin]);

  useEffect(() => {
    async function fetchDataMinicurso() {
      const cabecalho = { id: idAdmin };
      const response = await api.get('/minicurso', { headers: cabecalho });
      setMinicurso(response.data);
      return null;
    }

    fetchDataMinicurso();
  }, [idAdmin]);

  return (
    <>
      {!palestra ? (
        <Loading />
      ) : (
        <div id="container-listagem">
          <div id="main-listagem">
            <div id="logo">
              <img src={logo} alt="logo" />
            </div>
            <div id="formulario">
              <h1>
                Listagem
                <br /> de Dados
              </h1>
              <h1 id="titulo-listagem">Participantes:</h1>
              <div id="overflow">
                <table id="listagem">
                  <thead>
                    <tr id="listagem-titulo">
                      <th>ID</th>
                      <th>Nome</th>
                      <th>Email</th>
                      <th>Curso</th>
                      <th>Universidade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.map((participante) => (
                      <tr key={participante.id}>
                        <td>{participante.id}</td>
                        <td>{participante.nome}</td>
                        <td>{participante.email}</td>
                        <td>{participante.curso}</td>
                        <td>{participante.universidade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h1 id="titulo-listagem">Palestras:</h1>
              <div id="overflow">
                <table id="listagem">
                  <thead>
                    <tr id="listagem-titulo">
                      <th>ID</th>
                      <th>Título</th>
                      <th>Palestrante</th>
                      <th>Sala</th>
                      <th>Data</th>
                      <th>Hora</th>
                    </tr>
                  </thead>
                  <tbody>
                    {palestra.map((palestras) => (
                      <tr key={palestras.id}>
                        <td>{palestras.id}</td>
                        <td>{palestras.titulo}</td>
                        <td>{palestras.nome_palestrante}</td>
                        <td>{palestras.sala}</td>
                        <td>{palestras.data}</td>
                        <td>{palestras.horario}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h1 id="titulo-listagem">Minicursos:</h1>
              <div id="overflow">
                <table id="listagem">
                  <thead>
                    <tr id="listagem-titulo">
                      <th>ID</th>
                      <th>Título</th>
                      <th>Professor</th>
                      <th>Sala</th>
                      <th>Data</th>
                      <th>Hora</th>
                      <th>Capacidade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {minicurso.map((minicursos) => (
                      <tr key={minicursos.id}>
                        <td>{minicursos.id}</td>
                        <td>{minicursos.titulo}</td>
                        <td>{minicursos.nome_professor}</td>
                        <td>{minicursos.sala}</td>
                        <td>{minicursos.data}</td>
                        <td>{minicursos.horario}</td>
                        <td>{minicursos.qnt_alunos}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div id="voltar">
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    history.push('/dashboard');
                  }}
                >
                  Voltar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Listagem;
