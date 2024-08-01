import './App.css';
import Keta from './components/Keta/Keta';
import DecimalTable from './components/DecimalTable/DecimalTable'

function App() {
  const elements = Array.from({ length: 11 });
  const numberTds = 11
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Soroban
        </p>
      </header>
      <body>
        <DecimalTable numberTds={numberTds} />
        <div className='waku'>
          {elements.map((_, index) => (
            <Keta key={index} />
            ))}
        </div>
      </body>
    </div>
  );
}

export default App;
