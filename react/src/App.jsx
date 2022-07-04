import './App.css';
import Table from './components/table.jsx';
import Keyboard from './components/keyboard.jsx';
import RandWord from './components/lib/randWord';
import {React, useState, useEffect} from 'react';


function App() {

  return (
    <div>
      <header className="App-header">
        <div>
          Random Word:
          {RandWord(console.log)}
          {/*<RandWord />*/}
        </div>
        <Table />
        <Keyboard />
      </header>
      
    </div>
  );
}

export default App;
