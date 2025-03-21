import React, { useState } from 'react';
import './Exam.css';
import SEAPicon from './../../assets/public/SEAP.svg';
import SEAPBG from './../../assets/public/seap-background.svg';
import { Link } from 'react-router-dom';

function Exam() {
  const [selectedAnswer1, setSelectedAnswer1] = useState('');
  const [selectedAnswer2, setSelectedAnswer2] = useState('');

  const handleAnswerChange1 = (event) => setSelectedAnswer1(event.target.value);
  const handleAnswerChange2 = (event) => setSelectedAnswer2(event.target.value);

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
          <h1 className="title-exam">Orientações para realizar a avaliação:</h1>

          <section>
            <h2 className="title-exam">1. Sobre a avaliação:</h2>
            <ul>
              <li>A avaliação é composta por 20 questões objetivas, com cinco alternativas (A, B, C, D, E), sendo apenas uma correta.</li>
              <li>As questões e gabaritos são retirados diretamente do banco oficial do <strong>INEP</strong> e seguem o padrão do <strong>ENEM</strong>.</li>
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
            <h2 className="title-exam">3. Caderno de respostas e gabarito:</h2>
            <ul>
              <li>Todas as respostas <strong>devem</strong> ser transcritas para o Caderno de Respostas, que pode ser acessado através do menu no canto direito da tela.</li>
              <li>Você pode consultar o gabarito a qualquer momento durante a avaliação.</li>
            </ul>
          </section>

          <section>
            <h2 className="title-exam">4. Interrupção da Avaliação:</h2>
            <ul>
              <li>Caso precise sair da avaliação, clique no botão preto no canto superior direito da página.</li>
              <li><strong>Atenção:</strong> Ao sair da avaliação, seu progresso será perdido e não poderá ser retomado.</li>
            </ul>
          </section>

          <section>
            <h2 className="title-exam">5. Foco:</h2>
            <ul>
              <li>Este é o seu momento de praticar e identificar suas forças e fraquezas.</li>
              <li>Use essa avaliação como uma ferramenta de autoconhecimento para se aproximar ainda mais do seu sonho de entrar na faculdade!</li>
              <li>Confie no seu potencial: cada questão respondida é um passo a mais rumo ao seu objetivo.</li>
              <li>Lembre-se, o esforço de hoje abrirá portas para o futuro que você merece!</li>
            </ul>
          </section>
        </div>

        <div className="content-box">
          <h1>Simulado de Exame de Avaliação de Produtividade:</h1>

          <section className="questao">
            <h2>Questão 1</h2>
            <blockquote>
              <p>
                “Na linguagem, podemos nos ver da forma mais verdadeira: nossas crenças, nossos valores, nosso lugar no mundo”, afirmou o doutor em linguística e professor da Ufam em seu livro Amazonês: expressões e termos usados no Amazonas. Portanto, o amazonense, com todas as suas “cunhantãs” e “curumins”, acaba por encontrar um lugar no mundo e formar uma unidade linguística, informalmente denominada de português “caboco”, que muito se diferencia do português “mineiro”, “gaúcho”, “carioca” e de tantos outros espalhados pelo Brasil. O livro, que conta com cerca de 1.100 expressões e termos típicos do falar amazonense, levou dez anos para ser construído. Para o autor, o principal objetivo da obra é registrar a linguagem.
                <br />
                Um designer amazonense também acha o amazonês “xibata”, tanto é que criou uma série de camisetas estampadas com o nome de Caboquês Ilustrado, que mistura o bom humor com as expressões típicas da região. A coleção conta com sete modelos já lançados, entre eles: Leseira Baré, Xibata no Balde e Até o Tucupi, e 43 ainda na fila de espera. Para o criador, as camisas têm como objetivo “resgatar o orgulho do povo manauara, do povo do Norte”.
                <br />
                Considerando o trecho acima, é correto afirmar que:
              </p>
            </blockquote>

            <div className="alternativas">
              {['A', 'B', 'C', 'D', 'E'].map((option) => (
                <div className="alternativa" key={option}>
                  <input
                    type="radio"
                    id={`answer1${option}`}
                    name="question1"
                    value={option}
                    checked={selectedAnswer1 === option}
                    onChange={handleAnswerChange1}
                  />
                  <label htmlFor={`answer1${option}`}>
                    <strong>{option})</strong> {getAnswerText(option)}
                  </label>
                </div>
              ))}
            </div>
          </section>

          <section className="questao">
            <h2>Questão 2</h2>
            <blockquote>
              <p>
                "O domínio da língua escrita é considerado essencial para a boa comunicação em diversos contextos. Esse domínio envolve o conhecimento das regras gramaticais, a capacidade de utilizar diferentes tipos de linguagem de acordo com a situação, e a habilidade de argumentar de forma clara e objetiva. A linguagem pode ser usada para informar, convencer ou entreter, e seu uso adequado é um reflexo de uma educação linguística de qualidade."
                <br />
                Considerando o trecho acima, é correto afirmar que:
              </p>
            </blockquote>

            <div className="alternativas">
              {['A', 'B', 'C', 'D', 'E'].map((option) => (
                <div className="alternativa" key={option}>
                  <input
                    type="radio"
                    id={`answer2${option}`}
                    name="question2"
                    value={option}
                    checked={selectedAnswer2 === option}
                    onChange={handleAnswerChange2}
                  />
                  <label htmlFor={`answer2${option}`}>
                    <strong>{option})</strong> {getAnswerText(option)}
                  </label>
                </div>
              ))}
            </div>
          </section>
        </div>

        <Link to="/result" style={{ textDecoration: 'none' }}>
          <div className="finalizar-btn-container">
            <button className="button-lp">
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front text">FINALIZAR AVALIAÇÃO</span>
            </button>
          </div>
        </Link>
      </main>
    </div>
  );
}

/* Função para retornar o texto da alternativa */
const getAnswerText = (option) => {
  const answers = {
    A: 'As notícias falsas são sempre criadas com intenções humorísticas ou literárias.',
    B: 'A disseminação de notícias falsas pode prejudicar a imagem de indivíduos ou grupos.',
    C: 'As redes sociais não têm influência na propagação de notícias falsas.',
    D: 'Notícias falsas são inofensivas e não afetam a sociedade.',
    E: 'Apenas políticos são alvo de notícias falsas nas redes sociais.',
  };
  return answers[option];
};

export default Exam;
