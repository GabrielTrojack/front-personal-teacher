import React from 'react';
import './ResultPage.css';

function ResultPage() {
  return (
    <div className='result'>
      <main className='main-container'>
        {/* Primeira content-box com resultados por tema */}
        <div className='content-box'>
          <h1 className='title-result'>Resultado por Tema</h1>
          
          <section>
            <h2 className='disciplin'>Geometria:</h2>
            <p>Acertos: 67%</p>
            <div className="grafico">
              <div className="barra" style={{ width: '67%' }}></div>
            </div>
          </section>

          <section>
            <h2 className='disciplin'>Cálculo:</h2>
            <p>Acertos: 56%</p>
            <div className="grafico">
              <div className="barra" style={{ width: '56%' }}></div>
            </div>
          </section>

          <section>
            <h2 className='disciplin'>Álgebra:</h2>
            <p>Acertos: 80%</p>
            <div className="grafico">
              <div className="barra" style={{ width: '80%' }}></div>
            </div>
          </section>
        </div>

        {/* Segunda content-box com dados de tempo */}
        <div className='content-box'>
          <h1 className='title-result'>Dados de Tempo</h1>
          
          <section>
            <h2 className='text-content'>Tempo total de execução:</h2>
            <p>2 horas e 10 minutos</p>
          </section>

          <section>
            <h2 className='text-content'>Média de tempo por questão:</h2>
            <p>6 minutos por questão</p>
          </section>

          <section>
            <h2 className='text-content'>Tempo restante:</h2>
            <p>20 minutos</p>
          </section>

          {/* Aviso de não armazenamento */}
          <section className="aviso">
            <p><strong>Atenção:</strong> O resultado não fica armazenado no site. Após o download, o arquivo será salvo localmente em seu dispositivo.</p>
          </section>

          {/* Botão de Baixar Resultado dentro da segunda content-box */}
          <div className="finalizar-btn-container">
            <button
              className="finalizar-btn"
              onClick={() => alert('Resultado baixado com sucesso!')}
            >
              Baixar Resultado
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ResultPage;
