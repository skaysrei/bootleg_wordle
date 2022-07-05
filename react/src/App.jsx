import Keyboard from './components/keyboard.jsx';
import Table from './components/table.jsx';
import Popup from './components/popup.jsx';
import { React } from 'react';
import './App.css';


function App() {
  return (
    <div>
      <header className="App-header">
        <Table />
        <Keyboard />
        <Popup word="banana"/>
      </header>
    </div>
  );
}

export default App;
