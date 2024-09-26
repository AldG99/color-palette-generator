import React, { useState } from 'react';
import ColorBox from './colorBox';

const ColorPalette = () => {
  const [colors, setColors] = useState([]);
  const [colorType, setColorType] = useState('strong');

  const handleColorTypeChange = (e) => {
    setColorType(e.target.value);
    generateColors(e.target.value, 5);
  };

  const generateColors = (type, num) => {
    const newColors = [];
    for (let i = 0; i < num; i++) {
      newColors.push(generateColor(type));
    }
    setColors(newColors);
  };

  const generateColor = (type) => {
    switch (type) {
      case 'pastel':
        return `#${Math.floor(Math.random() * 16777215).toString(16)}00`;
      case 'light':
        return `#${Math.floor(Math.random() * 255).toString(16)}${Math.floor(Math.random() * 255).toString(16)}${Math.floor(Math.random() * 255).toString(16)}`;
      case 'strong':
      default:
        return randomColor();
    }
  };

  const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="color-palette">
      <h1>Generador de Paletas de Colores</h1>
      <select onChange={handleColorTypeChange}>
        <option value="strong">Colores Fuertes</option>
        <option value="pastel">Colores Pastel</option>
        <option value="light">Colores Claros</option>
      </select>
      <button onClick={() => generateColors(colorType, 5)}>Generar Nueva Paleta</button>
      <div className="color-boxes">
        {colors.map((color, index) => (
          <ColorBox key={index} color={color} />
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
