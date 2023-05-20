import React from 'react';
import CustomCursor from './components/CustomCursorModel';
import './App.css'

const App: React.FC = () => {
  return (
    <div style={{backgroundColor: '#3d3d3d', height: '100vh',  margin: -8, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <h1 style={{color: 'white', fontFamily: 'Arial'}}>Conteudo da página</h1>
      <CustomCursor innerColor="white" outerColor="transparent" />
    </div>
  );
};

export default App;
