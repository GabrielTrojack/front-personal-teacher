import React from 'react';
import './AboutCont.css';
import aboutImage from './../../assets/public/about.png';

const AboutPage = () => {
  return (
    <div className="sobre-container">
        <img src={aboutImage} alt="Imagem Sobre" />

        <div>
          <h1>Sobre o Personal Teacher</h1>
          <p> 
            O Personal Teacher nasceu da observação das dificuldades que muitos 
            estudantes enfrentam ao se preparar para exames importantes, especialmente 
            a dificuldade de identificar seus pontos fracos. Nosso objetivo é transformar 
            o processo de aprendizado por meio de uma plataforma que avalia o desempenho 
            individual e cria planos de estudo personalizados, com sugestões específicas 
            de materiais e estratégias para melhorar o rendimento acadêmico. Somos alunos 
            do primeiro ano de Ciência da Computação, realizando nosso primeiro 
            projeto acadêmico, e buscamos aplicar nossos conhecimentos para criar 
            uma solução inovadora e relevante. Acreditamos que a personalização da 
            educação é o futuro e, com o uso de tecnologia de ponta e design intuitivo, 
            nosso compromisso é garantir uma experiência de aprendizado de qualidade 
            e ajudar os alunos a alcançar o sucesso.
          </p>
        </div>
    </div>
  );
};

export default AboutPage;
