import React from "react";
import "./App.css";

const Commit = (props) => {
  const {author, email, date, commitURL, authorURL, message, avatar} = props;
  return (
    <ul>
      <li><img src={avatar} alt="avatar"/></li>
      <li><a href={authorURL}>{author}</a></li>
      <li>{email}</li>
      <li>{date}</li>
      <li>{message}</li>
      <li><a href={commitURL}>Details</a></li>
    </ul>
  )
}

export default Commit;