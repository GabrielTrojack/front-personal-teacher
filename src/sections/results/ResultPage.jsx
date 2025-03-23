import React from 'react';
import './ResultPage.css';

function ResultPage() {

  const handleAlertClick = () => {
    window.alert("Arquivo baixado com sucesso!");
  }
  return (
    <div className="result">
      <main className="main-container">
        {/* Primeira content-box com resultados por tema */}
        <div className="content-box">
          <h1 className="title-result">Resultado por Tema:</h1>

          {/* Resultados de disciplinas */}
          <section>
            <h2 className="disciplin">Geometria:</h2>
            <p>Acertos: 67%</p>
            <div className="grafico">
              <div className="barra" style={{ width: '67%' }}></div>
            </div>
          </section>

          <section>
            <h2 className="disciplin">Cálculo:</h2>
            <p>Acertos: 56%</p>
            <div className="grafico">
              <div className="barra" style={{ width: '56%' }}></div>
            </div>
          </section>

          <section>
            <h2 className="disciplin">Álgebra:</h2>
            <p>Acertos: 80%</p>
            <div className="grafico">
              <div className="barra" style={{ width: '80%' }}></div>
            </div>
          </section>

          <section>
            <h2 className="disciplin">Probabilidade:</h2>
            <p>Acertos: 38%</p>
            <div className="grafico">
              <div className="barra" style={{ width: '38%' }}></div>
            </div>
          </section>

          <section>
            <h2 className="disciplin">Gráficos:</h2>
            <p>Acertos: 10%</p>
            <div className="grafico">
              <div className="barra" style={{ width: '10%' }}></div>
            </div>
          </section>
        </div>

        {/* Segunda content-box com dados de tempo */}
        <div className="content-box">
          <h1 className="title-result">Dados de Tempo:</h1>

          {/* Box de tempo para "Tempo total de execução" */}
          <div className="tempo-item">
            <h2 className="text-content">Tempo total de execução:</h2>
            <div className="tempo-value">
              <p>2 horas e 10 minutos</p>
            </div>
          </div>

          {/* Box de tempo para "Média de tempo por questão" */}
          <div className="tempo-item">
            <h2 className="text-content">Média de tempo por questão:</h2>
            <div className="tempo-value">
              <p>6 minutos por questão</p>
            </div>
          </div>

          {/* Box de tempo para "Tempo restante" */}
          <div className="tempo-item">
            <h2 className="text-content">Tempo restante:</h2>
            <div className="tempo-value">
              <p>20 minutos</p>
            </div>
          </div>

          {/* Aviso de não armazenamento */}
          <section className="aviso">
            <h1>Atenção:</h1>
            <p>O resultado não fica armazenado no site. Após o download, o arquivo será salvo localmente em seu dispositivo.</p>
          </section>

          {/* Botão de Baixar Resultado */}
          <div className="finalizar-btn-container">
          <button class="Documents-btn" onClick={handleAlertClick}>
  <span class="folderContainer">
    <svg
      class="fileBack"
      width="146"
      height="113"
      viewBox="0 0 146 113"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 4C0 1.79086 1.79086 0 4 0H50.3802C51.8285 0 53.2056 0.627965 54.1553 1.72142L64.3303 13.4371C65.2799 14.5306 66.657 15.1585 68.1053 15.1585H141.509C143.718 15.1585 145.509 16.9494 145.509 19.1585V109C145.509 111.209 143.718 113 141.509 113H3.99999C1.79085 113 0 111.209 0 109V4Z"
              fill="url(#paint0_linear_117_4)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_117_4"
                x1="0"
                y1="0"
                x2="72.93"
                y2="95.4804"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#224ba8"></stop>
                <stop offset="1" stop-color="#224ba8"></stop>
              </linearGradient>
            </defs>
          </svg>
          <svg
            class="filePage"
            width="88"
            height="99"
            viewBox="0 0 88 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="88" height="99" fill="url(#paint0_linear_117_6)"></rect>
            <defs>
              <linearGradient
                id="paint0_linear_117_6"
                x1="0"
                y1="0"
                x2="81"
                y2="160.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white"></stop>
                <stop offset="1" stop-color="#gg"></stop>
              </linearGradient>
            </defs>
          </svg>

          <svg
            class="fileFront"
            width="160"
            height="79"
            viewBox="0 0 160 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.29306 12.2478C0.133905 9.38186 2.41499 6.97059 5.28537 6.97059H30.419H58.1902C59.5751 6.97059 60.9288 6.55982 62.0802 5.79025L68.977 1.18034C70.1283 0.410771 71.482 0 72.8669 0H77H155.462C157.87 0 159.733 2.1129 159.43 4.50232L150.443 75.5023C150.19 77.5013 148.489 79 146.474 79H7.78403C5.66106 79 3.9079 77.3415 3.79019 75.2218L0.29306 12.2478Z"
              fill="url(#paint0_linear_117_5)"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_117_5"
                x1="38.7619"
                y1="8.71323"
                x2="66.9106"
                y2="82.8317"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#a3bbf3"></stop>
                <stop offset="1" stop-color="#2b59c3"></stop>
              </linearGradient>
            </defs>
          </svg>
        </span>
              <p class="text-btn">Baixar resultado</p>
              </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ResultPage;
