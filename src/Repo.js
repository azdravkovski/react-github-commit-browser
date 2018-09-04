import React from "react";
import "./App.css";

const Repo = props => {
  return (
    <ul>
      <li>
        <a href={props.url}>{props.name}</a>
      </li>
      <li>{props.description || "No description"}</li>
      <li>
        <button onClick={props.getCommits}>
          Show commits
        </button>
      </li>
    </ul>
  );
};

export default Repo;