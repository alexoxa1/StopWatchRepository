import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [time, setTime] = useState(0)
  const [timerOn, setTimeOn] = useState(false)

  useEffect(() =>  {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)

  },  [timerOn])

  return (
    <div className="App">
    <h2>Секундомер</h2>
    <div id="display">
      <span>{("0" + Math.floor((time / 3600000) % 24)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
    </div>
    <div id="buttons">
      {!timerOn && (
        <button onClick={() => setTimeOn(true)}>Start</button>
      )}
      {timerOn && (
        <button onClick={function stopTime() {
          setTimeOn(false);
          setTime(0);
        }}>Stop</button>
      )}
      <button onDoubleClick={() => setTimeOn(false)}>Wait</button>
      <button onClick={function Reset() {
        setTime(0);
        setTimeOn(true);
      }}>Reset</button>
    </div>
 
    </div>
  );
}

export default App;
