import React from "react";
import axios from "axios";



export default class App extends React.Component {
  state = {
    users: [],
  };
  componentDidMount() {
    axios.get("/test").then((response) => {
     console.log(response)
    });
  }

  render() {
    return (
      <div>Music Visualizer</div>
    );
  }
}


