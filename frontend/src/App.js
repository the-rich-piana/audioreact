import logo from './logo.svg';
import HomePage from '../src/components/home'

let currColor = "white";
const onClickHandle = (e) => {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  e.target.backgroundColor = randomColor
  console.log(currColor)
  currColor = randomColor
}


function App() {
  return (
    <div className="App" >
      <HomePage bgHue={currColor} onClick={onClickHandle} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
