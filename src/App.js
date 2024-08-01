import './App.css';
import Keta from './components/Keta/Keta';

function App() {
  const elements = Array.from({ length: 9 });
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Soroban
        </p>
      </header>
      <body>
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
