import React, { useState, useEffect } from 'react';
import './Exam.css';
import SEAPicon from './../../assets/public/SEAP.svg';
import SEAPBG from './../../assets/public/seap-background.svg';
import { useNavigate } from 'react-router-dom';

function Exam() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [examDetails, setExamDetails] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isAllAnswered, setIsAllAnswered] = useState(true);
  const params = new URLSearchParams(location.search);
  const examId = params.get("examId");
  let x = 1;
  
// import QuestionTXT from '../../components/question-txt/question-txt';
// import Popup from '../../components/choose-up/popup';
// import { useParams } from "react-router-dom";
// import { Link } from 'react-router-dom';

// function Exam() {
  
//   const { subject } = useParams(); // Pega o parâmetro da URL
//   const [showPopup, setShowPopup] = useState(false);  //Estados para o popup de escolher disciplina 

//   useEffect(() => {
//     // Verifique se o parâmetro da matéria não é indefinido (caso o pop-up tenha sido fechado anteriormente)
//     if (!subject) {
//       setShowPopup(true); // Exibe o pop-up se a matéria não estiver selecionada
//     }
//   }, [subject]);

//   // Função chamada quando o pop-up começa
//   const handleStart = (subject) => {
//     setShowPopup(false); // Fecha o pop-up quando o usuário clica em "Começar"
//   };

//   /* Estados para manter as alternativas selecionadas*/
//   const [selectedAnswer1, setSelectedAnswer1] = useState('');
//   const [selectedAnswer2, setSelectedAnswer2] = useState('');

  const [tempo, setTempo] = useState(9000); 
  const [running, setRunning] = useState(true); 

  useEffect(() => {
    const fetchExamDetails = async () => {
      try {
        const response = await fetch(`https://ps-back-hhat.onrender.com/exam/getExamQuestions/${examId}`, {
          method: 'GET',
          headers: { 'Authorization': token },
        });

        if (!response.ok) {
          console.error('Erro ao buscar os detalhes da prova:', await response.text());
          return;
        }

        const data = await response.json();
        console.log('Detalhes da prova:', data);
        setExamDetails(data);

      } catch (error) {
        console.error('Erro ao buscar os detalhes da prova:', error);
      }
    };
    fetchExamDetails();
  }, [examId, token]);

  useEffect(() => {
    const allAnswered = examDetails.every(questao => selectedAnswers[questao.questaoId]);
    setIsAllAnswered(allAnswered);
  }, [selectedAnswers, examDetails]);

  const handleAnswerChange = (questionId, assuntoId, selectedAlternativeId, isCorrect) => {
    setSelectedAnswers(prevState => ({
      ...prevState,
      [questionId]: {
        selectedAlternativeId,
        isCorrect,
        assuntoId
      },
    }));
  };

  const handleFinalizar = async () => {
    const respostas = Object.keys(selectedAnswers).map((questionId) => ({
      questionId: questionId,
      assuntoId: selectedAnswers[questionId].assuntoId,
      selectedAlternativeId: selectedAnswers[questionId].selectedAlternativeId,
      isCorrect: selectedAnswers[questionId].isCorrect,
    }));

    const acertos = [];
       respostas.forEach(item => {
        if (item.isCorrect) {
          const assuntoIdExistente = acertos.find(acerto => acerto.assuntoId === item.assuntoId);
          if (assuntoIdExistente) {
            assuntoIdExistente.count++;
          } else {
            acertos.push({ assuntoId: item.assuntoId, count: 1 });
          }
        }
      });

    try {
      const response = await fetch(`https://ps-back-hhat.onrender.com/exam/updateFimTempo/${examId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token, 
        },
        body: JSON.stringify({
          fimTempo: new Date().toISOString(),
        }),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Erro ao atualizar fimTempo:', errorText);
        return;
      }
          const acertosPorAssunto = {};
          acertos.forEach(acerto => {
            acertosPorAssunto[acerto.assuntoId] = acerto.count;
          });
    
          if (Object.keys(acertosPorAssunto).length === 0) {
            console.error('Erro: Nenhum acerto encontrado para enviar.');
            return;
          }
    
          const secondresponse = await fetch(`https://ps-back-hhat.onrender.com/exam/updateAcertos/${examId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': token,
            },
            body: JSON.stringify({ acertosPorAssunto })
          });
    
          if (!secondresponse.ok) {
            const errorText = await secondresponse.text();
            console.error('Erro ao atualizar acertos:', errorText);
            return;
          }
    
          const data = await secondresponse.json();
          console.log('Acertos atualizados com sucesso:', data.message);
      document.title = "Resultado da Avaliação";      
      navigate('/result', { state:{
        examId: examId
      }});
    } catch (error) {
      console.error('Erro ao atualizar informaçoes:', error);
    }
  };

    const formatarTempo = (s) => {
      const horas = Math.floor(s / 3600);
      const minutos = Math.floor((s % 3600) / 60);
      const segundos = s % 60;
      return `${horas < 10 ? '0' + horas : horas}:${minutos < 10 ? '0' + minutos : minutos}:${segundos < 10 ? '0' + segundos : segundos}`;
    };
  
    const aoAcabarTempo = () => {
      console.log('bu');  
    };
  
    useEffect(() => {
      let intervalId;
  
      if (running && tempo > 0) {
        intervalId = setInterval(() => {
          setTempo(prevTempo => {
            if (prevTempo === 1) {
              aoAcabarTempo(); 
              clearInterval(intervalId);
              return 0;
            }
            return prevTempo - 1;
          });
        }, 1000);
      }
  
      return () => clearInterval(intervalId);
    }, [running, tempo]);
  
    useEffect(() => {
      document.title = `Prova: ${formatarTempo(tempo)}`;  
    }, [tempo]);

  return (
  <div className='Exam-page'>
        {/* {showPopup && <Popup onStart={handleStart} />} */}
    <div className="Exam">
      <div className="SEAPback">
        <img src={SEAPBG} alt="Fundo SEAP" />
      </div>

      <main>
        <div className="faixa">
          <div className="mini-cont"></div>
          <img src={SEAPicon} alt="Logo do exame" />
        </div>

        <div className="content-box">
          <h1 className="title-exam">Orientações para realizar a avaliação:</h1>
          <div className="content-box">
          <h1 className="title-exam">Orientações para realizar a avaliação:</h1>

          <section>
            <h2 className="title-exam">1. Sobre a avaliação:</h2>
            <ul>
              <li>A avaliação é composta por 20 questões objetivas, com cinco alternativas (A, B, C, D, E), sendo apenas uma correta.</li>
              <li>As questões são selecionadas de forma aleatória para cada tentativa, garantindo uma experiência única a cada avaliação.</li>
            </ul>
          </section>

          <section>
            <h2 className="title-exam">2. Tempo de realização:</h2>
            <ul>
              <li>O tempo limite para completar a avaliação é de <strong>2 horas e 30 minutos</strong>.</li>
              <li>Um cronômetro ficará visível na guia da aba do navegador para que você possa acompanhar o tempo restante.</li>
              <li>Não se preocupe com pressão de tempo! A ideia é focar na análise do seu desempenho, mas fique atento ao cronômetro.</li>
            </ul>
          </section>

          <section>
            <h2 className="title-exam">3. Foco:</h2>
            <ul>
              <li>Este é o seu momento de praticar e identificar suas forças e fraquezas.</li>
              <li>Use essa avaliação como uma ferramenta de autoconhecimento para se aproximar ainda mais do seu sonho de entrar na faculdade!</li>
              <li>Confie no seu potencial: cada questão respondida é um passo a mais rumo ao seu objetivo.</li>
              <li>Lembre-se, o esforço de hoje abrirá portas para o futuro que você merece!</li>
            </ul>
          </section>
        </div>
        </div>

        <div className="content-box">
          <h1>Simulado de Exame de Avaliação de Produtividade:</h1>
          {/* <h2 className='title-select'>{subject === "portugues" ? "PROVA DE LINGUAGENS, CÓDIGOS E SUAS TECNOLOGIAS" : "PROVA DE MATEMÁTICA E SUAS TECNOLOGIAS"}</h2> */}

          {examDetails.map((questao) => {
            return (
              <section className="questao" key={questao.questaoId}>
                <h2>Questão {x++}</h2>
                <blockquote>
                  <p>{questao.enunciado}</p>
                </blockquote>

                <div className="alternativas">
                  {questao.alternativas.map((alternativa) => {
                    return (
                      <div className="alternativa" key={alternativa.id}>
                        <input
                          type="radio"
                          name={`question${questao.questaoId}`}
                          value={alternativa.id}
                          checked={selectedAnswers[questao.questaoId]?.selectedAlternativeId == alternativa.id}
                          onChange={(e) => handleAnswerChange(questao.questaoId, questao.assuntoId, e.target.value, alternativa.isCorrect)}
                        />
                        <label>{alternativa.texto}</label>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
          {!isAllAnswered && (
          <div>
            <strong className="warning-msg">*Por favor, responda todas as questões antes de finalizar a avaliação.</strong>
          </div>
        )}
        </div>

        <div className="finalizar-btn-container">
          <button onClick={handleFinalizar} className={isAllAnswered?"button-lp":"button-lpdisable"} disabled={!isAllAnswered}>
            {isAllAnswered &&
            (<><span className="shadow"></span>
            <span className="edge"></span></>)
            }
            <span className={isAllAnswered?"front":""} >FINALIZAR AVALIAÇÃO</span>
          </button>
        </div>
      </main>
    </div>
    </div>
  );
}

export default Exam;
