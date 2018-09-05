import React, { Component } from "react";
import "./App.css";

//Refactor to class component with state
class CommitWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      displayedCommits: () => this.props.commits
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  filterCommitsByMessage() {
    let filteredCommits = [...this.props.commits].filter(commit => {
      return commit.props.message.toLowerCase().includes(this.state.value);
    })
    // console.log([...this.props.commits][0].props.message)
    this.setState({
      displayedCommits: () => filteredCommits
    });
  }

  render() {
    return (
      <div className="commit-wrapper">
        <h2>Showing commits for </h2>
        <div className="search">
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button onClick={() => this.filterCommitsByMessage()}>Search</button>
        </div>
        {this.state.displayedCommits()}
      </div>
    );
  }
}

export default CommitWrapper;
