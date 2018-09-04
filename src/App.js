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
              <li><a href={repo.html_url}>{repo.name}</a></li>
              <li>{repo.description || "No description"}</li>
              <li><button onClick={() => this.showCommits(repo.name)}>Show commits</button></li>
            </ul>
          );
        });
        this.setState({
          repos: repos
        });
      })
      .catch(err => console.log(err));
  }

  showCommits(name) {
    fetch(`https://api.github.com/repos/facebook/${name}/commits`)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return <div className="card-wrapper">{this.state.repos}</div>;
  }
}

export default App;
