import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [screen, setScreen] = useState('')
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)

    const Addition = () => {
      setNumber1(parseInt(screen, 10));

        if (screen.includes("+",0) ){
            //do nothing;
        } else {
            setScreen(screen + '+');
        }
    };

    const Subtraction = () => {
        setNumber1(parseInt(screen, 10));

        if (screen.substring(screen.length - 1).match(/[+-]/) ) {
            //do nothing;
        } else {
            setScreen(screen + '-');
        }
    };

    const Equals = () => {
        const afterString = screen.substring(number1.toString().length +1,screen.length);
        const number1Length = number1.toString().length;
        setNumber2(parseInt(afterString));
        let x = number1;
        let y = parseInt(afterString);

        if (screen[number1Length] === '+'){
            let result = (x + y);
            setScreen(result.toString());
        } else if (screen[number1Length] === '-') {
            let result = (x - y);
            setScreen(result.toString());
        }
    };

    const Reset = () => {
        setScreen('');
        setNumber1(0);
        setNumber2(0);
    }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="card">
          <text>x: {number1} </text>
          <text>y: {number2}</text>
      </div>
      <div className="screen">
        <text>{screen}</text>
      </div>
        <div className="card">
            <button onClick={() => setScreen(screen + '1')}>1</button>
            <button onClick={() => setScreen(screen + '2')}>2</button>
            <button onClick={() => setScreen(screen + '3')}>3</button>
      </div>
        <div className="card">
            <button onClick={() => setScreen(screen + '4')}>4</button>
            <button onClick={() => setScreen(screen + '5')}>5</button>
            <button onClick={() => setScreen(screen + '6')}>6</button>
        </div>
        <div className="card">
            <button onClick={() => setScreen(screen + '7')}>7</button>
            <button onClick={() => setScreen(screen + '8')}>8</button>
            <button onClick={() => setScreen(screen + '9')}>9</button>
        </div>
        <div className="card">
            <button onClick={(Addition)}>+</button>
            <button onClick={(Subtraction)}>-</button>
            <button onClick={(Equals)}>=</button>
        </div>
        <div className="card"><button onClick={(Reset)}>c</button></div>
      <div className="card">
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
