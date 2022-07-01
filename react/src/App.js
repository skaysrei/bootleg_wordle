import './App.css';
import Grid from './components/grid.jsx';
import Keyboard from './components/keyboard.jsx';
import RandWord from './components/randWord';


function App() {
  return (
    <div>
      <header className="App-header">
        <div>
          Random Word:
          <RandWord />
        </div>
        <Grid />
        <Keyboard />
      </header>
    </div>
  );
}

export default App;
