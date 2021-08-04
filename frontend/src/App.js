import axios from "axios";
import logo from './logo.svg';
import HomePage from './components/home'
import {
  Route,
  Link, 
  Switch
} from "react-router-dom";
import aboutPage from "./components/home/aboutPage";
import musicPage from "./components/home/musicPage";



let currColor = "white";
const onClickHandle = (e) => {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  e.target.backgroundColor = randomColor
  console.log(currColor)
  currColor = randomColor
}

//Axios call to backend-- listening for an express call with the same
  axios.get("/about").then((response) => {
   console.log(response)
  });

  axios.get("/test").then((response) => {
    console.log(response)
   });

   axios.get("/music").then((response) => {
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
              <Link to="/music">Music</Link>
            </li>
          </ul>
        </nav>
      <Switch>
      <Route path="/home"><h1>Home</h1></Route>
      <Route path="/About">{aboutPage}</Route>
      <Route path="/music">{musicPage}</Route>
      </Switch>

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
