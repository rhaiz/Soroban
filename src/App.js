import './App.css';
import Keta from './components/Keta/Keta';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Soroban
        </p>
      </header>
      <body>
      <div className='waku'>
        <Keta/>
        <Keta/>
        <Keta/>        
      </div>
      </body>
    </div>
  );
}

export default App;
