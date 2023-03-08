import React from 'react'
import Canvas from './Components/Canvas/Canvas.components'
import './App.css';

function App() {
  return (
    <div className="App">
      <Canvas width={window.innerWidth} height={window.innerHeight}></Canvas>
    </div>
  );
}

export default App;
