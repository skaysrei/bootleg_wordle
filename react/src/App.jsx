import Keyboard from './components/keyboard.jsx';
import Table from './components/table.jsx';
import { React } from 'react';
import './App.css';


function App() {
  return (
    <div>
      <header className="App-header">
        <Table />
        <Keyboard />
      </header>
    </div>
  );
}

export default App;
