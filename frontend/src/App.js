import axios from "axios";
import logo from './logo.svg';
import HomePage from './components/home'
import {
  Route,
  Link
} from "react-router-dom";


let currColor = "white";
const onClickHandle = (e) => {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  e.target.backgroundColor = randomColor
  console.log(currColor)
  currColor = randomColor
}


  axios.get("/test").then((response) => {
   console.log(response)
  });


function App() {
  return (
    <>
       <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/music">music</Link>
            </li>
          </ul>
        </nav>
      <Route path="/home"><h1>Music Visualizer</h1></Route>
      <Route path="/About"><h1>About</h1></Route>
      <Route path="/music"><h1>Music</h1></Route>

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
    </>
  );
}

export default App;
