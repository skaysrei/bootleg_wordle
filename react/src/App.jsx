import './App.css';
import Table from './components/table.jsx';
import Keyboard from './components/keyboard.jsx';
import RandWord from './components/lib/randWord';
import { React } from 'react';


function App() {
  const secretWord = RandWord()

  console.log(RandWord(()=> { return }))
  return (
    <div>
      <header className="App-header">
        <div>
          Random Word:
          {secretWord}
        </div>
        <Table />
        <Keyboard />
      </header>
    </div>
  );
}

export default App;
