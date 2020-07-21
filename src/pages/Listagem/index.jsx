import React, { useEffect } from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Listagem() {
  const history = useHistory();

  useEffect(() => {
    const id = localStorage.getItem('id');
    if (!id) history.push('/');
  }, [history]);

  return (
    <>
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

            <table id="listagem">
              <tr id="listagem-titulo">
                <th>ID</th>
                <th>Nome</th>
                <th>Curso</th>
                <th>Universidade</th>
              </tr>
              <tr>
                <td>01</td>
                <td>Jairo Soares de Lima</td>
                <td>Computação</td>
                <td>UEPB</td>
              </tr>
            </table>
            <h1 id="titulo-listagem">Palestras:</h1>

            <table id="listagem">
              <tr id="listagem-titulo">
                <th>ID</th>
                <th>Título</th>
                <th>Palestrante</th>
                <th>Sala</th>
                <th>Data</th>
                <th>Hora</th>
              </tr>
              <tr>
                <td>01</td>
                <td>Inteligência Artificial</td>
                <td>Márcio Bizerra Wanderley Filho</td>
                <td>201</td>
                <td>17/07/2020</td>
                <td>19:00</td>
              </tr>
            </table>
            <h1 id="titulo-listagem">Minicursos:</h1>

            <table id="listagem">
              <tr id="listagem-titulo">
                <th>ID</th>
                <th>Título</th>
                <th>Professor</th>
                <th>Sala</th>
                <th>Data</th>
                <th>Hora</th>
                <th>Capacidade</th>
              </tr>
              <tr>
                <td>01</td>
                <td>Data Science</td>
                <td>Paulo Silvera Marinho</td>
                <td>202</td>
                <td>26/07/2020</td>
                <td>19:45</td>
                <td>45</td>
              </tr>
            </table>
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
    </>
  );
}

export default Listagem;
