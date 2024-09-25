import React, { useState } from 'react';
import ColorBox from './colorBox';

const ColorPalette = () => {
  const [colors, setColors] = useState(generateColors(5));

  function generateColors(num) {
      const newColors = [];
      for (let i = 0; i < num; i++) {
          newColors.push(randomColor());
      }
      return newColors;
  }

  function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const regenerateColors = () => {
      setColors(generateColors(5));
  };

  return (
    <div className="color-palette">
      <h1>Generador de Paletas de Colores</h1>
      <button onClick={regenerateColors}>Generar Nueva Paleta</button>
        <div className="color-boxes">
          {colors.map((color, index) => (
            <ColorBox key={index} color={color} />
          ))}
        </div>
    </div>
  );
};

export default ColorPalette;
