import './App.css';
import Grid from './components/grid.jsx';
import Keyboard from './components/keyboard.jsx';
import RandWord from './components/randWord';
import {React, useState, useEffect} from 'react';


function App() {

  const axios = require('axios').default;
  const [output, setOutput] = useState();

  useEffect(()=> {
    axios.get(
      'https://random-word-api.herokuapp.com/word',
      {
        params:
          { 
            length : 5,
            lang : 'it'
          }
      }
    ).then(
      resp => { setOutput(resp.data)}
    );
    console.log("Render Here")
  }, [])

  return (
    <div>
      <header className="App-header">
        <div>
          Random Word:
          {output}
          {/*<RandWord />*/}
        </div>
        <Grid />
        <Keyboard />
      </header>
    </div>
  );
}

export default App;
