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
        const response = await fetch(`http://localhost:3333/exam/getExamQuestions/${examId}`, {
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

    try {
  
      const response = await fetch(`http://localhost:3333/exam/updateFimTempo/${examId}`, {
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

      document.title = "Resultado da Avaliação";      
      navigate('/result', { state:{
        respostas: respostas, 
        examId: examId
      }});
    } catch (error) {
      console.error('Erro ao atualizar fimTempo:', error);
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
        {showPopup && <Popup onStart={handleStart} />}
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
          {/* Suas seções de instruções continuam aqui */}
        </div>

        <div className="content-box">
          <h1>Simulado de Exame de Avaliação de Produtividade:</h1>
          <h2 className='title-select'>{subject === "portugues" ? "PROVA DE LINGUAGENS, CÓDIGOS E SUAS TECNOLOGIAS" : "PROVA DE MATEMÁTICA E SUAS TECNOLOGIAS"}</h2>

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
