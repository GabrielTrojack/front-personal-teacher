    import React from "react";
    import "./HeroSection.css";
    import { Link } from 'react-router-dom';
    import { useNavigate } from "react-router-dom";
    import { useState } from "react";
    import PlayIcon from "../../assets/public/play-icon.svg";
    import HeroImage from "../../assets/study-image.jpg";
    import Popup from "../../components/choose-up/popup";

    const HeroSection = () => {
        const token = localStorage.getItem('token')

        const [showPopup, setShowPopup] = useState(false);
        const navigate = useNavigate();

        const handleLoginClick = (e) => {
          e.preventDefault(); // Impede o envio do formulário
          setShowPopup(true); // Exibe o popup após o redirecionamento
        };
      
        // Função chamada quando o pop-up começa (usuario escolhe a materia)
        const handlePopupStart = (subject) => {
          setShowPopup(false); // Fecha o pop-up
          navigate(`/exam/${subject}`); // Passa a matéria selecionada como parâmetro na URL
        };

        return (
            <section className="hero-section">
                {showPopup && <Popup onStart={handlePopupStart} />} 
                <div className="hero-content">
                <h1 className="hero-title">Descubra o caminho certeiro para o sucesso no ENEM e Vestibulares!</h1>

                <p className="hero-description">Na era da personalização, estudar de forma eficiente não é mais um luxo, mas uma necessidade. Nosso programa foi criado para resolver uma das maiores dúvidas de quem se prepara para o ENEM: "Por onde começar?"</p>
                <p className="hero-description">Com uma abordagem interativa e inteligente, oferecemos a você um plano de estudo adaptado às suas necessidades. Torne o aprendizado mais envolvente e eficaz. Transforme suas dificuldades em oportunidades e conquiste seus objetivos com uma experiência de estudo que realmente faz a diferença.</p>
                
                <div className="hero-button-container" onClick={handleLoginClick}>
                    <button className="hero-button">
                    <img src={PlayIcon} alt="Play" className="play-icon" />
                    <p className="text-btn">Começar jornada</p></button>
                    </div>
                </div>

                <div className="hero-image-container">
                    <img src={HeroImage} alt="Estudante estudando" className="hero-image"/>
                </div>
            </section>
        );
    };

    export default HeroSection;