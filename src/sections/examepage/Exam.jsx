import React from 'react';
import './Exam.css';

function Exam() {
  return (
    <div className='Exam'>
      <main>
        <div className='faixa'>
          <span className='texto'>SEAP</span>
        </div>

        <div className='content-box'>
          <h1>Orientações para realizar à avaliação:</h1>

          <section>
            <h2>1. Sobre à avaliação:</h2>
            <ul>
              <li> A avaliação consiste em 20 questões objetivas, com cinco alternativas 
                (A, B, C, D, E), sendo apenas uma correta.</li>
              <li> As questões e gabaritos são retirados do banco oficial do INEP 
                e seguem o padrão do ENEM.</li>
              <li> As questões são selecionadas aleatoriamente a cada tentativa, 
                proporcionando uma experiência única a cada avaliação.</li>
            </ul>
          </section>

          <section>
            <h2>2. Tempo de realização:</h2>
            <ul>
              <li> O tempo limite para concluir a avaliação é de 2 horas e 30 minutos.</li>
              <li> Um cronômetro ficará visível na aba do navegador para acompanhar 
                o tempo restante.</li>
            </ul>
          </section>

          <section>
            <h2>3. Caderno de respostas e gabarito:</h2>
            <ul>
              <li> Todas as respostas devem ser transcritas para o Caderno de 
                Respostas, acessível no menu à direita da tela.</li>
              <li> O gabarito pode ser consultado a qualquer momento durante a 
                avaliação.</li>
            </ul>
          </section>
        </div>

        {/* Segunda content-box */}
        <div className='content-box'>
          <h1>Simulado de Exame de Avaliação de Produtividade:</h1>

          {/* Questão 1 */}
          <section className='questao'>
            <h2>Questão 1</h2>
            <blockquote>
              <p>
                “Na linguagem, podemos nos ver da forma mais verdadeira: nossas 
                crenças, nossos valores, nosso lugar no mundo”, afirmou o doutor 
                em linguística e professor da Ufam em seu livro Amazonês: expressões 
                e termos usados no Amazonas. Portanto, o amazonense, com todas as 
                suas “cunhantãs” e “curumins”, acaba por encontrar um lugar no mundo 
                e formar uma unidade linguística, informalmente denominada de português 
                “caboco”, que muito se diferencia do português “mineiro”, “gaúcho”, 
                “carioca” e de tantos outros espalhados pelo Brasil. O livro, que conta 
                com cerca de 1.100 expressões e termos típicos do falar amazonense, 
                levou dez anos para ser construído. Para o autor, o principal objetivo 
                da obra é registrar a linguagem.
                Um designer amazonense também acha o amazonês “xibata”, tanto é 
                que criou uma série de camisetas estampadas com o nome de Caboquês 
                Ilustrado, que mistura o bom humor com as expressões típicas da região. 
                A coleção conta com sete modelos já lançados, entre eles: Leseira Baré, 
                Xibata no Balde e Até o Tucupi, e 43 ainda na fila de espera. Para o criador, 
                as camisas têm como objetivo “resgatar o orgulho do povo manauara, do povo do Norte”.
              </p>
            </blockquote>

            <h3>Considerando o trecho acima, é correto afirmar que:</h3>

            <div className='alternativas'>
              <div className='alternativa'>
                <strong>A)</strong> As notícias falsas são sempre criadas com intenções 
                humorísticas ou literárias.
              </div>
              <div className='alternativa'>
                <strong>B)</strong> A disseminação de notícias falsas pode prejudicar 
                a imagem de indivíduos ou grupos.
              </div>
              <div className='alternativa'>
                <strong>C)</strong> As redes sociais não têm influência na propagação 
                de notícias falsas.
              </div>
              <div className='alternativa'>
                <strong>D)</strong> Notícias falsas são inofensivas e não afetam 
                a sociedade.
              </div>
              <div className='alternativa'>
                <strong>E)</strong> Apenas políticos são alvo de notícias falsas 
                nas redes sociais.
              </div>
            </div>
          </section>

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

          {/* Botão de Finalizar Avaliação */}
          <div className="finalizar-btn-container">
            <button
              className="finalizar-btn"
              onClick={() => window.location.href = '/result'}
            >
              Finalizar Avaliação
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Exam;
