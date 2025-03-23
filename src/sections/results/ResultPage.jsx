import React, { useEffect, useState } from 'react';
import './ResultPage.css';
import { useLocation } from "react-router-dom";

function ResultPage() {
  const token = localStorage.getItem('token');
  const location = useLocation();
  const data = location.state.respostas;
  const examId = location.state.examId;
  const [acertos, setAcertos] = useState([]);
  const [assuntos, setAssuntos] = useState({});
  const [durationInMinutes, setDurationInMinutes] = useState(0);
  
  useEffect(() => {
    function contarAcertosPorAssunto() {
      const acertosPorAssunto = [];

      data.forEach(item => {
        if (item.isCorrect) {
          const assuntoIdExistente = acertosPorAssunto.find(acerto => acerto.assuntoId === item.assuntoId);
          if (assuntoIdExistente) {
            assuntoIdExistente.count++;
          } else {
            acertosPorAssunto.push({ assuntoId: item.assuntoId, count: 1 });
          }
        }
      });

      setAcertos(acertosPorAssunto);
    }
    contarAcertosPorAssunto();
  }, [data]);

  useEffect(() => {
    async function fetchAssuntos() {
      const assuntoMap = {};

      for (let acerto of acertos) {
        try {
          const response = await fetch(`http://localhost:3333/exam/getAssuntoById/${acerto.assuntoId}`, {
            method: 'GET',
            headers: { 'Authorization': token },
          });

          if (!response.ok) {
            console.error('Erro ao buscar assunto:', await response.text());
            return;
          }

          const assunto = await response.json();
          
          assuntoMap[acerto.assuntoId] = assunto.assunto;
        } catch (error) {
          console.error('Erro ao buscar os detalhes do assunto:', error);
        }
      }

      setAssuntos(assuntoMap); 
    }

    fetchAssuntos();
  }, [acertos, token]);

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

          {acertos.map((acerto) => {
            const nomeAssunto = assuntos[acerto.assuntoId];

            return (
              <section key={acerto.assuntoId}>
                <h2 className="disciplin">{nomeAssunto || `Assunto ${acerto.assuntoId}`}</h2>
                <p>Acertos: {Math.round((acerto.count * 100) / 7)}%</p>
                <div className="grafico">
                  <div className="barra" style={{ width: `${Math.round((acerto.count * 100) / 7)}%` }}></div>
                </div>
              </section>
            );
          })}
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
            <h1>Atenção:</h1>
            <p>O resultado não fica armazenado no site. Após o download, o arquivo será salvo localmente em seu dispositivo.</p>
          </section>

          <div className="finalizar-btn-container">
            <button
              className="finalizar-btn"
              onClick={() => alert('Resultado baixado com sucesso!')}
            >
              Baixar Resultado
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ResultPage;
