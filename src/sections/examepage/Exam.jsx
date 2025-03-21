import React from 'react';
import './Exam.css';  
import SEAPicon from "./../../assets/public/SEAP.svg";
import SEAPBG from "./../../assets/public/seap-background.svg";
import { Link } from 'react-router-dom';
import QuestionTXT from '../../components/question-txt/question-txt';

function Exam() {
  return (
    <div className='Exam'>
      <div className='SEAPback'>
      <img src={SEAPBG} alt="FundoSEAP" />
      </div>
      <main>
        <div className='faixa'>
          <div className='mini-cont'></div>
          <img src={SEAPicon} alt="Logo do exame" />
        </div>

        <div className='content-box'>
          <h1 className='title-exam'>Orientações para realizar a avaliação:</h1>

          <section>
            <h2 className='title-exam'>1. Sobre a avaliação:</h2>
            <ul>
              <li> A avaliação é composta por 20 questões objetivas, com cinco alternativas <strong>(A, B, C, D, E)</strong>, sendo apenas uma correta.</li>
              <li> As questões e gabaritos são retirados diretamente do banco oficial do <strong>INEP</strong> e seguem o padrão do <strong>ENEM</strong>.</li>
              <li> As questões são selecionadas de forma aleatória para cada tentativa, garantindo uma experiência única a cada avaliação.</li>
            </ul>
          </section>

          <section>
            <h2 className='title-exam'>2. Tempo de realização:</h2>
            <ul>
              <li> O tempo limite para completar a avaliação é de <strong>2 horas e 30 minutos</strong>.</li>
              <li> Um cronômetro ficará visível na guia da aba do navegador para que você possa acompanhar o tempo restante.</li>
              <li> Não se preocupe com pressão de tempo! A ideia é focar na análise do seu desempenho, mas fique atento ao cronômetro.</li>
            </ul>
          </section>

          <section>
            <h2 className='title-exam'>3. Caderno de respostas e gabarito:</h2>
            <ul>
              <li> Todas as respostas <strong>devem</strong> ser transcritas para o Caderno de Respostas, que pode ser acessado através do menu no canto direito da tela.</li>
              <li> Você pode consultar o gabarito a qualquer momento durante a avaliação.</li>
            </ul>
          </section>

          <section>
            <h2 className='title-exam'>4. Interrupção da Avaliação:</h2>
            <ul>
              <li> Caso precise sair da avaliação, clique no botão preto no canto superior direito da página.</li>
              <li> <strong>Atenção:</strong> Ao sair da avaliação, seu progresso será perdido e não poderá ser retomado.</li>
            </ul>
          </section>

          <section>
            <h2 className='title-exam'>5. Foco:</h2>
            <ul>
              <li> Este é o seu momento de praticar e identificar suas forças e fraquezas.</li>
              <li> Use essa avaliação como uma ferramenta de autoconhecimento para se aproximar ainda mais do seu sonho de entrar na faculdade!</li>
              <li> Confie no seu potencial: cada questão respondida é um passo a mais rumo ao seu objetivo.</li>
              <li> Lembre-se, o esforço de hoje abrirá portas para o futuro que você merece!</li>
            </ul>
          </section>
        </div>

        {/* Segunda content-box */}
        <div className='content-box'>
          <h1>Simulado de Exame de Avaliação de Produtividade:</h1>

          {/* Questão 1 */}
        <QuestionTXT/>

          {/* Questão 2 */}
          <section className='questao'>
            <h2>Questão 2</h2>
            <blockquote>
              <p>
                "O domínio da língua escrita é considerado essencial para a boa 
                comunicação em diversos contextos. Esse domínio envolve o conhecimento 
                das regras gramaticais, a capacidade de utilizar diferentes tipos 
                de linguagem de acordo com a situação, e a habilidade de argumentar 
                de forma clara e objetiva. A linguagem pode ser usada para informar, 
                convencer ou entreter, e seu uso adequado é um reflexo de uma educação 
                linguística de qualidade."
              </p>
            </blockquote>

            <h3>Considerando o trecho acima, é correto afirmar que:</h3>

            <div className='alternativas'>
              <div className='alternativa'>
                <strong>A)</strong> A linguagem informal não é adequada em nenhum 
                tipo de comunicação.
              </div>
              <div className='alternativa'>
                <strong>B)</strong> A linguagem é um reflexo da educação linguística 
                e deve ser adaptada de acordo com a situação comunicativa.
              </div>
              <div className='alternativa'>
                <strong>C)</strong> A boa comunicação é alcançada apenas por meio 
                da utilização rigorosa das regras gramaticais.
              </div>
              <div className='alternativa'>
                <strong>D)</strong> O uso de linguagem coloquial é sempre inadequado 
                em textos argumentativos e informativos.
              </div>
              <div className='alternativa'>
                <strong>E)</strong> A linguagem formal é o único tipo de linguagem 
                aceito em contextos educativos.
              </div>
            </div>
          </section>
        </div>

          {/* Botão de Finalizar Avaliação */}

        <Link to="/result" style={{ textDecoration: 'none' }}>
        <div className='finalizar-btn-container'>
        <button className='button-lp'>
         <span class="shadow"></span>
         <span class="edge"></span>
         <span class="front text">FINALIZAR AVALIAÇÃO
         </span>
         </button>
        </div>
        </Link>

      </main>
    </div>
  );
}

export default Exam;
