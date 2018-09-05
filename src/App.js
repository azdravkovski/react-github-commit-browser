import React, { Component } from "react";
import RepoWrapper from "./RepoWrapper";
import CommitWrapper from "./CommitWrapper";
import Repo from "./Repo";
import Commit from "./Commit";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: [],
      commits: [],
      messages: []
    };
  }

  componentDidMount() {
    this.getRepos();
  }

  getRepos() {
    fetch("https://api.github.com/users/facebook/repos", {
      headers: {
        'User-Agent': 'azdravkovski'
      }
    })
      .then(response => response.json())
      .then(data => {
        let repos = data.map(repo => {
          return (
            <Repo
              name={repo.name}
              url={repo.html_url}
              description={repo.description}
              getCommits={() => this.getCommits(repo.name)}
            />
          );
        });
        this.setState({
          repos: repos
        });
      })
      .catch(err => console.log(err));
  }

  getCommits(name) {
    fetch(`https://api.github.com/repos/facebook/${name}/commits`)
      .then(response => response.json())
      .then(data => {
        let commits = data.map(commit => {
          return (
            <Commit
              author={commit.commit.author.name}
              email={commit.commit.author.email}
              date={commit.commit.author.date}
              commitURL={commit.html_url}
              authorURL={commit.author.html_url}
              message={commit.commit.message}
              avatar={commit.author.avatar_url}
            />
          );
        });
        let messages = data.map(commit => {
          return commit.commit.message;
        })
        this.setState({
          commits: commits,
          messages: messages
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <h1>GitHub Browser</h1>
        <section>
          <RepoWrapper repos={this.state.repos}/>
          <CommitWrapper commits={this.state.commits} messages={this.state.messages} />
        </section>
      </div>
    );
  }
}

export default App;
