import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import axios from "axios";
import "./index.css";

function Reddit() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`).then(res => {
      const newPosts = res.data.data.children.map(obj => obj.data);

      setPosts(newPosts);
    });
  }, []);

  return (
    <div>
      <h1>/r/reactjs</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <a href={post.url} target="_blank" rel="noopener noreferrer">
              {post.title}
            </a>
            <br />
            <span className="author">
              Posted by {post.author} | <b>{post.score}</b>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDom.render(<Reddit />, document.getElementById("root"));
