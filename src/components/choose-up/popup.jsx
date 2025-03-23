import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import './popup.css';
import exitLogo from "./../../assets/public/exit-btn.svg";

const Popup = () => {
    const [subject, setSubject] = useState(); 
    const [error, setError] = useState(""); 
    const navigate = useNavigate(); 
    const popupRef = useRef(null); 
    const overlayRef = useRef(null);
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

          console.log(provaId);
    
          navigate(`/exam?examId=${provaId}`)
    
        } catch (error) {
          console.error('Erro ao criar a prova:', error);
        }
      };
    
    const handleSubjectChange = (e) => {
        setSubject(parseInt(e.target.value)); 
        setError(""); 
    };
    
    const handleStartClick = () => {
        if (subject) handleMateriaClick(subject); 
        else setError("Por favor, selecione uma matéria antes de começar!");
    };

    const handleExitClick = () => {
         window.location.reload();
    };

      useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show'); 
                }
            });
        }, { threshold: 0.1 }); 
        
        if (popupRef.current && overlayRef.current) {
            observer.observe(popupRef.current);
            observer.observe(overlayRef.current);
        }
        
        return () => {
            if (popupRef.current && overlayRef.current) {
                observer.disconnect();
            }
        };
    }, []);
      
    return(
        <div className="popup-overlay" ref={overlayRef}>
        <div className="popup-container" ref={popupRef}>
            <div className="card">
                <h1 className="title-nickname">Olá @xxxxxxx!</h1>

                <p>Para iniciar sua avaliação, escolha a área do conhecimento que deseja realizar:</p>

                <div className="exit-logo" onClick={handleExitClick}>
               <img src={exitLogo} alt="exit"></img>
                </div>

                <div className="checkmark-book">

        {materias.length > 0 ? (
          materias.map((materia) => (
            <label className="label" key={materia.id}>
                    <input 
                    type="radio" 
                    value={materia.id}
                    name="subject" 
                    className="radio-input" 
                    onChange={(e)=>handleSubjectChange(e)}
                    />
                    <div className="radio-design"></div>
                    <div className="label-text">{materia.materia}</div>
                </label>
          ))
        ) : (
            <p className='texto-materia'>Carregando matérias...</p>
        )}

                <div className="info-container">
                <p><strong>Leitura das orientações:</strong> Para uma experiência mais tranquila, leia as orientações que serão apresentadas logo após o início da avaliação.</p>
                <p><strong>Questões da avaliação:</strong> A prova é composta por <strong>21</strong> questões, que são selecionadas aleatoriamente a cada tentativa.</p>
                <p><strong>Tempo de avaliação:</strong> Você terá <strong>2 horas e 30 minutos</strong> para completar todas as questões.</p>
                <p><strong>Finalização:</strong> Quando terminar, clique no botão <strong>"Finalizar"</strong> para enviar suas respostas.</p>
                </div>
                </div>
                <p className="context-text">Clique em <strong>"Começar"</strong> para iniciar sua avaliação. Boa sorte!</p>
                {error && <p className="error-message" style={{color: "red"}}>{error}</p>}
                <button className="str-button" onClick={handleStartClick}>COMEÇAR</button>
            </div>
        </div>
    </div>
    );
};

export default Popup;