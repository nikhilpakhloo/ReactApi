import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [users, setUsers] = useState([]);
 
  

  const userId = localStorage.getItem("UserId");

  const userName = localStorage.getItem("UserName");
  // console.log(userName)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        localStorage.setItem("navdata", JSON.stringify(users));

      });
  });

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="nik.jpg" alt="" />
        </div>
        <div className="nav-items">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="user-info">Welcome {userName}</div>
      </div>
      <div class="posts-container">
  {users.map((post) => (
    <div class="post" key={post.id}>
      <Link
        to={`/post`}
        onClick={() =>
          localStorage.setItem("selectedPost", JSON.stringify(post))
        }
      >
        <h3 class="post-title">
          {post.title}
        </h3>
        <p class="post-id">
          Post ID: {post.id}
        </p>
      </Link>
    </div>
  ))}
</div>

    </>
  );
}
