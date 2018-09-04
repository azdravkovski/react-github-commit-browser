import React, { Component } from "react";
import RepoWrapper from "./RepoWrapper";
import CommitWrapper from "./CommitWrapper";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>GitHub Browser</h1>
        <section>
          <RepoWrapper />
          <CommitWrapper />
        </section>
      </div>
    );
  }
}

export default App;
