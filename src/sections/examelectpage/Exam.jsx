import React, { useState, useEffect } from 'react';
import './Exam.css';
import SEAPicon from './../../assets/public/SEAP.svg';
import SEAPBG from './../../assets/public/seap-background.svg';
import { useNavigate } from 'react-router-dom';

function ExamSelectPage() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    const fetchMaterias = async () => {
      try {
        const response = await fetch('http://localhost:3333/exam/getAllMaterias ', {
          method: 'GET',
          headers: { 'Authorization': token }
        });
    
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          const text = await response.text();
          console.error("Resposta inesperada (não é JSON):", text);
          return;
        }
    
        const data = await response.json();
        setMaterias(data);
      } catch (err) {
        console.error("Erro ao buscar as matérias:", err);
      }
    };
    fetchMaterias();
  }, []);

  const handleMateriaClick = async (materiaId) => {
    try {
      const response = await fetch('http://localhost:3333/exam/createExam', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
        body: JSON.stringify({ materiaId }),
      });
      if (!response.ok) {
        console.error('Erro ao criar a prova:', await response.text());
        return;
      }

      const data = await response.json();
      console.log('Prova criada com sucesso, ID da prova:', data.id);
      const provaId = data.id;

      navigate(`/exam?examId=${provaId}`)

    } catch (error) {
      console.error('Erro ao criar a prova:', error);
    }
  };

  return (
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
          <h1 className="title-exam">Selecione a materia do qual gostaria de ser avaliado:</h1>

        <div className="selecionar-materia">  
          {materias.length > 0 ? (
          materias.map((materia) => (
            <button onClick={() => handleMateriaClick(materia.id)} key={materia.id} className="botao-materia">
              <span className="texto-materia">{materia.materia}</span>
            </button>
          ))
        ) : (
            <p className='texto-materia'>Carregando matérias...</p>
        )}
        </div>
        </div>
      </main>
    </div>
  );
}

export default ExamSelectPage;
