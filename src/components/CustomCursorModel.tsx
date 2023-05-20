import React, { useEffect, useState } from 'react';
import './CustomCursor.css'

interface CustomCursorProps {
  innerColor?: string;
  outerColor?: string;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ innerColor = 'white', outerColor = 'white' }) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const offsetX = 10; // Ajuste o deslocamento horizontal
  const offsetY = 10; // Ajuste o deslocamento vertical

  return (
    <div
      className="custom-cursor"
      style={{
        transform: `translate3d(${position.x - offsetX}px, ${position.y - offsetY}px, 0)`,
      }}
    >
      <div className="outer-circle" style={{ backgroundColor: outerColor }}></div>
      <div className="inner-circle" style={{ backgroundColor: innerColor }}></div>
    </div>
  );
};

export default CustomCursor;
