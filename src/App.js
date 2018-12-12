import React, { Component } from "react";
import Todo from "./Todo.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo />
        <header>Add to the list</header>
      </div>
    );
  }
}

export default App;
