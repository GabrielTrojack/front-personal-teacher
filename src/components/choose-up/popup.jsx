import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import './popup.css';
import exitLogo from "./../../assets/public/exit-btn.svg";

const Popup = ({ onStart }) => {
    const [subject, setSubject] = useState(""); // Estado para controlar a seleção da matéria
    const [error, setError] = useState(""); // Estado para gerenciar mensagens de erro
    const navigate = useNavigate(); // Para navegar para outras páginas
    const popupRef = useRef(null); // Ref para o pop-up
    const overlayRef = useRef(null); // Ref para o fundo
    
    const handleSubjectChange = (e) => {
        setSubject(e.target.value); // Atualiza a matéria selecionada
        setError(""); // Limpa o erro quando uma nova opção é selecionada
    };
    
    const handleStartClick = () => {
        if (subject) onStart(subject); // Passa a matéria selecionada para o método onStart
        else setError("Por favor, selecione uma matéria antes de começar!");
    };

    const handleExitClick = () => {
        const confirmExit = window.confirm("Tem certeza que deseja sair?");
        if (confirmExit) {
         window.location.reload(); // Recarrega a página
        }
    };

      //Ativar a animação quando o pop-up entrar na tela
      useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show'); // Adiciona a classe 'show' quando o elemento entra na tela
                }
            });
        }, { threshold: 0.1 }); // 10% do pop-up precisa estar visível para acionar a animação
        
        if (popupRef.current && overlayRef.current) {
            observer.observe(popupRef.current);
            observer.observe(overlayRef.current);
        }
        
        return () => {
            if (popupRef.current && overlayRef.current) {
                observer.disconnect(); // Desconecta o observer quando o componente for desmontado
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
                <label className="label">
                    <input 
                    type="radio" 
                    value="portugues" 
                    name="subject" 
                    className="radio-input" 
                    onChange={handleSubjectChange}
                    />
                    <div className="radio-design"></div>
                    <div className="label-text">Português</div>
                </label>

                <label className="label">
                    <input 
                    type="radio" 
                    value="matematica" 
                    name="subject" 
                    className="radio-input" 
                    onChange={handleSubjectChange}
                    />
                    <div className="radio-design"></div>
                    <div className="label-text">Matemática</div>
                </label>
                <div className="info-container">
                <p><strong>Leitura das orientações:</strong> Para uma experiência mais tranquila, leia as orientações que serão apresentadas logo após o início da avaliação.</p>
                <p><strong>Questões da avaliação:</strong> A prova é composta por <strong>20</strong> questões, que são selecionadas aleatoriamente a cada tentativa.</p>
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