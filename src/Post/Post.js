import React, { useState,useEffect } from 'react'
import './post.scss'

export default function Post() {


    const storedPost = JSON.parse(localStorage.getItem('selectedPost'));
    console.log(storedPost)


    const storedComments = JSON.parse(localStorage.getItem('comments'))
    // console.log(storedComments)
    const [post, setPost] = useState(storedPost);
    const [users, setUsers] = useState([])
    const [comments, setComments] = useState([])
    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then((response)=> response.json())
      .then((data)=>{
        setComments(data)
        localStorage.setItem('comments', JSON.stringify(comments))
      })
     })


     

    





    
    // console.log(users)

  return (
  
<div className="post-container">
    <h1 className="post-title">{post.body}</h1>
    <p className="comment-name">{comments.name}</p>
</div>


   
  )
}
