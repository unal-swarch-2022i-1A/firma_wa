import logo from './logo.svg';
import './App.css';
//UI
import Button from '@mui/material/Button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>       
        <Button variant="contained">Hello World</Button>
      </header>
    </div>
  );
}

export default App;
