import React from 'react';
import Wavify from 'react-wavify';

function WaveAnimation() {
  return (
    <Wavify
      fill="#FFEECF"
      paused={false}
      options={{
        height: 30,
        amplitude: 75,
        speed: 0.18,
        points: 6,
      }}
      style={{
        position: 'absolute',
        bottom: 0,
        margin: -600,
        width: '200rem',
        zIndex: -1,
        transform: 'rotate(20deg)',
        overflowX: 'hidden',
      }}
    />
  );
}

export default WaveAnimation;
