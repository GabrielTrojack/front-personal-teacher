import React, { useEffect, useState } from 'react';
import './ResultPage.css';
import { useLocation } from "react-router-dom";

function ResultPage() {
  const token = localStorage.getItem('token');
  const location = useLocation();
  const examId = location.state.examId;
  const [acertos, setAcertos] = useState([]);
  const [durationInMinutes, setDurationInMinutes] = useState(0);

  const fetchAcertosPorProva = async () => {
    try {
      const response = await fetch(`http://localhost:3333/exam/getAcertosPorProva/${examId}`, {
        method: 'GET',
        headers: {
          'Authorization': token,
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Erro ao buscar acertos por prova:', errorText);
        return;
      }

      const data = await response.json();
      setAcertos(data);

    } catch (error) {
      console.error('Erro ao buscar os acertos da prova:', error);
    }
  };

  useEffect(() => {
    fetchAcertosPorProva();
  }, [examId, token]);

  useEffect(() => {
    const fetchProvaDuration = async () => {
      try {
        const response = await fetch(`http://localhost:3333/exam/getProvaDuration/${examId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token, 
          },
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Erro ao buscar a duração da prova:', errorText);
          return;
        }

        const data = await response.json();
        setDurationInMinutes(data.durationInMinutes);        

      } catch (error) {
        console.error('Erro ao buscar a duração da prova:', error);
      }
    };

    fetchProvaDuration();
  }, [examId, token]);

  useEffect(() => {
    console.log(durationInMinutes);
  }, [durationInMinutes]);

  const totalHours = Math.floor(durationInMinutes / 60);
  const totalMinutes = durationInMinutes % 60;

  const averageTimePerQuestion = durationInMinutes / 21;
  const averageTimePerQuestionMinutes = Math.floor(averageTimePerQuestion);
  const averageTimePerQuestionSeconds = Math.round((averageTimePerQuestion - averageTimePerQuestionMinutes) * 60);

  const remainingTime = 150 - durationInMinutes;
  const remainingHours = Math.floor(remainingTime / 60);
  const remainingMinutes = remainingTime % 60;

  const formatTime = (hours, minutes) => {
    if (hours > 0) {
      return `${hours} horas e ${Math.round(minutes)} minutos`;
    } else {
      return `${Math.round(minutes)} minutos`;
    }
  };

  return (
    <div className="result">
      <main className="main-container">
        <div className="content-box">
          <h1 className="title-result">Resultado por Tema:</h1>

          {acertos.map((acerto) => (
            <section key={acerto.assuntoId}>
              <h2 className="disciplin">{acerto.nomeAssunto || `Assunto ${acerto.assuntoId}`}</h2>
              <p>Acertos: {Math.round((acerto.acertos * 100) / 7)}%</p>
              <div className="grafico">
                <div className="barra" style={{ width: `${Math.round((acerto.acertos * 100) / 7)}%` }}></div>
              </div>
            </section>
          ))}
        </div>

        <div className="content-box">
          <h1 className="title-result">Dados de Tempo:</h1>

          <div className="tempo-item">
            <h2 className="text-content">Tempo total de execução:</h2>
            <div className="tempo-value">
              <p>{formatTime(totalHours, totalMinutes)}</p>
            </div>
          </div>

          <div className="tempo-item">
            <h2 className="text-content">Média de tempo por questão:</h2>
            <div className="tempo-value">
              <p>{averageTimePerQuestionMinutes} minutos por questão</p>
            </div>
          </div>

          <div className="tempo-item">
            <h2 className="text-content">Tempo restante:</h2>
            <div className="tempo-value">
              <p>{formatTime(remainingHours, remainingMinutes)} minutos</p>
            </div>
          </div>

          <section className="aviso">
            <p>Clique abaixo para ver o resultados de todas as suas provas</p>
          </section>

          <div className="finalizar-btn-container">
            <button className="Documents-btn">
              <span className="folderContainer">
                <svg
                  className="fileBack"
                  width="146"
                  height="113"
                  viewBox="0 0 146 113"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 4C0 1.79086 1.79086 0 4 0H50.3802C51.8285 0 53.2056 0.627965 54.1553 1.72142L64.3303 13.4371C65.2799 14.5306 66.657 15.1585 68.1053 15.1585H141.509C143.718 15.1585 145.509 16.9494 145.509 19.1585V109C145.509 111.209 143.718 113 141.509 113H3.99999C1.79085 113 0 111.209 0 109V4Z"
                    fill="url(#paint0_linear_117_4)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_117_4"
                      x1="0"
                      y1="0"
                      x2="72.93"
                      y2="95.4804"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#224ba8"></stop>
                      <stop offset="1" stopColor="#224ba8"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <svg
                  className="filePage"
                  width="88"
                  height="99"
                  viewBox="0 0 88 99"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="88" height="99" fill="url(#paint0_linear_117_6)"></rect>
                  <defs>
                    <linearGradient
                      id="paint0_linear_117_6"
                      x1="0"
                      y1="0"
                      x2="81"
                      y2="160.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white"></stop>
                      <stop offset="1" stopColor="#gg"></stop>
                    </linearGradient>
                  </defs>
                </svg>

                <svg
                  className="fileFront"
                  width="160"
                  height="79"
                  viewBox="0 0 160 79"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.29306 12.2478C0.133905 9.38186 2.41499 6.97059 5.28537 6.97059H30.419H58.1902C59.5751 6.97059 60.9288 6.55982 62.0802 5.79025L68.977 1.18034C70.1283 0.410771 71.482 0 72.8669 0H77H155.462C157.87 0 159.733 2.1129 159.43 4.50232L150.443 75.5023C150.19 77.5013 148.489 79 146.474 79H7.78403C5.66106 79 3.9079 77.3415 3.79019 75.2218L0.29306 12.2478Z"
                    fill="url(#paint0_linear_117_5)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_117_5"
                      x1="38.7619"
                      y1="8.71323"
                      x2="66.9106"
                      y2="82.8317"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#a3bbf3"></stop>
                      <stop offset="1" stopColor="#2b59c3"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <p className="text-btn">Ver mais resultados</p>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ResultPage;
