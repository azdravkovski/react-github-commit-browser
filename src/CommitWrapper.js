import React, { Component } from "react";
import "./App.css";

class CommitWrapper extends Component {
  render() {
    return (
      <div className="commit-wrapper">
        <Search />
      </div>
    );
  }
}

class Search extends Component {
  render() {
    return (
      <div className="search">
        <input />
        <button>Search</button>
      </div>
    );
  }
}

export default CommitWrapper;
