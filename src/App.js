import React, { useState } from 'react';
import Select from 'react-select';
import './App.css';
import Keta from './components/Keta/Keta';
import DecimalTable from './components/DecimalTable/DecimalTable'

function App() {
  const [elementsLength, setElementsLength] = useState(7);
  const options = [
    { value: '7', label: '7' },
    { value: '9', label: '9' },
    { value: '11', label: '11' },
    { value: '13', label: '13' },
    { value: '15', label: '15' },
    { value: '17', label: '17' }
  ]

  const handleDropdownChange = (event) => {
    const newValue = parseInt(event.value,10);
  if (newValue >= 4 && newValue <= 17) {
    setElementsLength(newValue);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Soroban
        </p>
      </header>
        <Select 
          options={options}
          defaultValue={options[0]}
          onChange={handleDropdownChange} />

        <DecimalTable numberTds={elementsLength} />

        <div className='waku'>
          {Array.from({ length: elementsLength }, (_, index) => (
            <Keta key={index} />
          ))}
        </div>
        <footer><a href="https://www.flaticon.com/free-icons/soroban" title="soroban icons">Soroban icons created by Vectors Tank - Flaticon</a></footer>
    </div>
  );
}

export default App;
