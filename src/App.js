import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const inc = () => {
    setCounter(counter + 1);
  }
  const dec = () =>{
    setCounter(counter - 1);
  }
  return (
      <div className="App">
        <header className="App-header">
          Counter App - SSR Demo
        </header>
        <span>{counter}</span>
        <button onClick={inc} >Increment</button>
        <button onClick={dec} >Decrement</button>
      </div>
    );
}

export default App;
