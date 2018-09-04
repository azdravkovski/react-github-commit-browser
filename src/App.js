import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>GitHub Browser</h1>
        <Card />
      </div>
    );
  }
}

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: []
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/facebook/repos")
      .then(response => response.json())
      .then(data => {
        let repos = data.map(repo => {
          return (
            <ul>
              <li>Name: {repo.name}</li>
              <li>Homepage: {repo.html_url}</li>
              <li>Description: {repo.description}</li>
            </ul>
          );
        });
        this.setState({
          repos: repos
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return <div className="card-wrapper">{this.state.repos}</div>;
  }
}

export default App;
