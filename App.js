import React, { Component } from "react";
import Routes from "./Components/Routes";
//import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Component LifeCycle Methods</h1>
          <Routes />
        </header>
      </div>
    );
  }
}

export default App;
