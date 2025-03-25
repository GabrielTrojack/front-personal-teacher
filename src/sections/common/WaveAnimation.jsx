import React, { useState, useEffect } from 'react';
import Wavify from 'react-wavify';

const WaveAnimation = ({customStyle}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Atualiza o tamanho da tela quando a janela é redimensionada
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Limpa o listener quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // A animação de escala se adapta à largura da tela
  const scaleValue = windowWidth > 1024 ? 1.2 : 1; // Aumenta a escala para telas grandes

  return (
    <Wavify
      fill="#FFEECF"
      paused={false}
      options={{
        height: 30,
        amplitude: 75,
        speed: 0.18,
        points: 4,
      }}
      style={{
        position: 'relative',
        bottom: '0',
        top: '16rem',
        margin: '',
        width: '100%',
        height: '15rem',
        zIndex: -1,
        transform: `rotate(20deg) scale(${scaleValue})`, // Aplica a escala dinamicamente
        overflowX: 'hidden',
        transition: 'transform 0.5s ease', // Transição suave
      }}
    />
  );
}

export default WaveAnimation;
