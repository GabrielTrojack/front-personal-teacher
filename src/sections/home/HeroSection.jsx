    import React from "react";
    import "./HeroSection.css";
    import PlayIcon from "../../assets/public/play-icon.svg";
    import HeroImage from "../../assets/study-image.jpg";

    const HeroSection = ({ onRedirect }) => {
        return (
            <section className="hero-section">
                <div className="hero-content">
                <h1 className="hero-title">Descubra o caminho certeiro para o sucesso no ENEM e Vestibulares!</h1>

                <p className="hero-description">Na era da personalização, estudar de forma eficiente não é mais um luxo, mas uma necessidade. Nosso programa foi criado para resolver uma das maiores dúvidas de quem se prepara para o ENEM: "Por onde começar?"</p>
                <p className="hero-description">Com uma abordagem interativa e inteligente, oferecemos a você um plano de estudo adaptado às suas necessidades. Torne o aprendizado mais envolvente e eficaz. Transforme suas dificuldades em oportunidades e conquiste seus objetivos com uma experiência de estudo que realmente faz a diferença.</p>
                
                <div className="hero-button-container">
                    <button onClick={onRedirect} className="hero-button">
                    <img src={PlayIcon} alt="Play" className="play-icon" />
                    Começar jornada</button>
                    </div>
                </div>

                <div className="hero-image-container">
                    <img src={HeroImage} alt="Estudante estudando" className="hero-image"/>
                </div>
            </section>
        );
    };

    export default HeroSection;