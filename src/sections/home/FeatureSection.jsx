import React, { useEffect } from 'react';
import './FeatureSection.css';
import RelatoryIcon from "./../../assets/public/relatory-icon.svg";
import RocketIcon from "./../../assets/public/rocket-icon.svg";
import SolutionsIcon from "./../../assets/public/solutions-icon.svg";

function FeatureSection () {

  useEffect(() => {
    const features = document.querySelectorAll('.feature');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Adiciona a classe 'visible' quando o elemento entra na tela
        }
      });
    }, { threshold: 0.05 }); // Define que a animação ocorre quando 5% do elemento está visível na tela
    
    features.forEach(feature => observer.observe(feature)); // Observa cada elemento da classe 'feature'

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="feature-section">
      <section className="feature">
        <div className="circle">
          <img src={RelatoryIcon} alt="Icone de relatório" className="relatory-icon"/>
        </div>
        <h3>AVALIAÇÃO INTELIGENTE</h3>
        <p>Resolva questões de múltiplas disciplinas e descubra exatamente onde estão suas maiores dificuldades. Nosso sistema inteligente analisa seu desempenho e identifica lacunas no conhecimento, oferecendo planejamento claro e direcionado para seus estudos.</p>
      </section>
      <section className="feature">
        <div className="circle">
          <img src={SolutionsIcon} alt="Icone de dicas" className="solutions-icon"/>
        </div>
        <h3>SUGESTÕES PERSONALIZADAS</h3>
        <p>Após avaliar seus erros, nossa plataforma sugere conteúdos prioritários que precisam ser fortalecidos. Isso garante um aprendizado eficiente e organizado, focado nas áreas que realmente fazem a diferença para o seu desempenho.</p>
      </section>
      <section className="feature">
        <div className="circle">
          <img src={RocketIcon} alt="Foguete dos sonhos" className="rocket-icon"/>
        </div>
        <h3>ALCANCE SEU SONHO</h3>
        <p>Você aprende a organizar seus estudos de forma estratégica, otimizando cada minuto investido. Nosso diferencial é transformar o aprendizado em um processo contínuo e eficiente, permitindo que você supere suas metas e conquiste a aprovação no ENEM!</p>
      </section>
    </div>
  );
}

export default FeatureSection;
