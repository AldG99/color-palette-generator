import React from 'react';

const ColorBox = ({ color }) => {
  return (
    <div className="color-box" style={{ backgroundColor: color }}>
      <p>{color}</p>
    </div>
  );
};

export default ColorBox;
