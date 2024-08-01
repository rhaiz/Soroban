import React, { useState } from 'react';
import './App.css';
import Keta from './components/Keta/Keta';
import DecimalTable from './components/DecimalTable/DecimalTable'

function App() {
  const [elementsLength, setElementsLength] = useState(9);
  const [numberTds, setNumberTds] = useState(9);

  const handleDropdownChange = (event) => {
    const newValue = parseInt(event.target.value);
    if (newValue >= 4 && newValue <= 17) {
      setElementsLength(newValue);
      setNumberTds(newValue);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Soroban
        </p>
      </header>
      <body>
      <select value={elementsLength} onChange={handleDropdownChange}>
          {Array.from({ length: 14 }, (_, index) => (
            <option key={index + 4} value={index + 4}>
              {index + 4}
            </option>
          ))}
        </select>
        <DecimalTable numberTds={numberTds} />
        <div className='waku'>
          {Array.from({ length: elementsLength }, (_, index) => (
            <Keta key={index} />
          ))}
        </div>
      </body>
    </div>
  );
}

export default App;
