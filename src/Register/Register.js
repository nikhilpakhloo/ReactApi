import React, { useState, useEffect } from 'react';
import './register.scss';
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users,setUsers] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      setUsers(data);
    });
    console.log(users)
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find((user)=> user.name ===fullName && user.username === username);
    const IdName ={
      id : user.id,
      username : user.username
    }
    const serializedUser = JSON.stringify(IdName);
    // console.log(serializedUser)
    if(!user){
      alert("You Can't Signed Up")
    }else{
      localStorage.setItem('registerUser',serializedUser )
      // console.log(user.name);
      navigate("/login")
      // alert('Registered')
    }
  };
  return (
    <div className="signup-form-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" onClick={handleSubmit}>Sign Up</button>
      </form>
    </div>
    
  );
};

export default SignupForm;
